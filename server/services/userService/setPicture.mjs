// setPicture.js

import User from "../../models/userModel.mjs";
import fs from "fs";
import path from "path";
import imagekit from "../../utils/imageKit.js";

const setPicture = async (userId, picture, type) => {
	try {
		const user = await User.findById(userId);
		if (!user) {
			return { error: "User not found", statusCode: 404 };
		}

		const folder = "profilePictures";

		if (!folder) {
			return { error: "Invalid type", statusCode: 400 };
		}

		const oldImage = user[type];

		// Generate a unique name for the new image
		const uniqueName = `${Date.now()}_${Math.floor(
			Math.random() * 1000
		)}${path.extname(picture.originalname)}`;

		// Upload the new image to ImageKit with the unique name
		const uploadResponse = await imagekit.upload({
			file: fs.createReadStream(picture.path),
			fileName: uniqueName,
			folder: folder,
		});

		const extractedUniqueName = path.basename(uploadResponse.url);
		user[type] = extractedUniqueName;
		await user.save();

		// Delete the old local image file if it exists
		try {
			if (oldImage) {
				// Get fileId for the old image using its path
				const oldImageDetails = await imagekit.getFileDetails(
					{
						path: `${folder}/${oldImage}`,
					}
				);

				const fileId = oldImageDetails.data._id;

				console.log(fileId);

				// Attempt to delete the old image
				const deleteResponse = await imagekit.deleteFile(
					fileId
				);

				if (deleteResponse.status === "success") {
					console.log("Old image deleted successfully");
				} else {
					console.error(
						"Failed to delete old image from ImageKit:",
						deleteResponse
					);
				}
			}
		} catch (imageKitError) {
			console.error(
				"Error deleting old image from ImageKit:",
				imageKitError
			);
		}

		return {
			message: "Image stored and user updated successfully.",
			picture: extractedUniqueName,
			statusCode: 200,
		};
	} catch (error) {
		console.error(error);
		return {
			error: "Internal Server Error",
			statusCode: 500,
			detail: error.message,
		};
	}
};

export default setPicture;
