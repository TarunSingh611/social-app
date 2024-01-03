import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Location {
  city?: string;
  country?: string;
  privacy?: string;
}

interface GeneralProps {
  user: {
    gender?: string;
    birthday?: string;
    website?: string;
    location?: Location;
  };
  onUpdateProfile: (values: any) => void;
}
const formatDate = (dateString:any) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};



const privacyOptions = ['public', 'followers', 'private', 'friends'];
const genderOptions = ['Male', 'Female', 'Other'];

const validationSchema = Yup.object().shape({
  gender: Yup.string(),
  birthday: Yup.date().max(new Date(), 'Birthday must be in the past'),
  website: Yup.string(),
  location: Yup.object().shape({
    city: Yup.string(),
    country: Yup.string(),
    privacy: Yup.string(),
  }),

});

const General: React.FC<GeneralProps> = ({ user, onUpdateProfile }) => {
  const formik = useFormik({
    initialValues: {
      gender: user?.gender || "Female",
      birthday: user?.birthday ?  formatDate(user?.birthday) : '0000-00-00',
      website: user?.website || '',
      location: {
        city: user?.location?.city || '',
        country: user?.location?.country || '',
        privacy: user?.location?.privacy || '',
      },
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onUpdateProfile(values);
    },
  });

  const handleReset = () => {
    formik.resetForm();
  }

  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold my-2">General Information</h2>
      <form onSubmit={formik.handleSubmit}>
        {renderEditableDropdown('Gender', 'gender', genderOptions, formik)}
        {renderEditableDatepicker('Birthday', 'birthday', formik)}
        {renderEditableItem('Website', 'website', formik)}
        {renderEditableLocationItem('Location', 'location', formik)}
        <div className="flex justify-end">
        <button
                type="button"
                onClick={handleReset}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
              >
                Reset
              </button>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
            disabled={!formik.isValid}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

const renderEditableItem = (label: string, fieldName: string, formik: any) => (
  <div key={fieldName} className="mb-4">
    <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
      {label}
    </label>
    <input
      type="text"
      id={fieldName}
      name={fieldName}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[fieldName]}
      className="mt-1 p-2 border rounded-md w-full"
    />
    {formik.touched[fieldName] && formik.errors[fieldName] && (
      <div className="text-red-600">{formik.errors[fieldName]}</div>
    )}
  </div>
);

const renderEditableLocationItem = (label: string, fieldName: string, formik: any) => (
  <div key={fieldName} className="mb-4">
    <label className="block text-sm font-medium text-gray-600">{label}</label>
    <input
      type="text"
      id={`${fieldName}.city`}
      name={`${fieldName}.city`}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[fieldName].city}
      className="mt-1 p-2 border rounded-md w-full"
      placeholder="City"
    />
    <input
      type="text"
      id={`${fieldName}.country`}
      name={`${fieldName}.country`}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[fieldName].country}
      className="mt-1 p-2 border rounded-md w-full"
      placeholder="Country"
    />
    {renderEditableDropdown('Location Privacy', `${fieldName}.privacy`, privacyOptions, formik)}
    {formik.touched[fieldName] && formik.errors[fieldName] && (
      <div className="text-red-600">{formik.errors[fieldName]}</div>
    )}
  </div>
);

const renderEditableDropdown = (label: string, fieldName: string, options: string[], formik: any) => (
  <div key={fieldName} className="mb-4">

    <select
      id={fieldName}
      name={fieldName}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[fieldName]?.privacy||formik.values[fieldName]}
      className="mt-1 p-2 border rounded-md w-full"
    >
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {formik.touched[fieldName] && formik.errors[fieldName] && (
      <div className="text-red-600">{formik.errors[fieldName]}</div>
    )}
  </div>
);

const renderEditableDatepicker = (label: string, fieldName: string, formik: any) => (
  <div key={fieldName} className="mb-4">
    <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
      {label}
    </label>
    <input
      type="date"
      id={fieldName}
      name={fieldName}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[fieldName]}
      className="mt-1 p-2 border rounded-md w-full"
    />
    {formik.touched[fieldName] && formik.errors[fieldName] && (
      <div className="text-red-600">{formik.errors[fieldName]}</div>
    )}
  </div>
);

export default General;
