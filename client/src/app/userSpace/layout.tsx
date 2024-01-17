"use client";
import ListNav from "@/components/navbar/ListNav";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValidUser, setUser } from "@/redux/slicers/authSlice";
import { getToken } from "@/services/auth";
import { toast } from "react-toastify";
import apiGetProfile from "@/api/user/apiGetProfile";
import apiGetNotifications from "@/api/notification/apiGetNotifications";
import  {setNotifications} from "@/redux/slicers/notificationSlice";
export default function UserSpaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const dispatch = useDispatch();
    const validUser = useSelector((state: any) => state.auth.validUser);

    useEffect(() => {
        if (validUser === null) {
            dispatch(setValidUser(getToken() ? true : false));
        } else if (validUser === false) {
            router.push("/");
        } else if (validUser === true) {
            apiGetProfile()
                .then((res: any) => {
                    if (res.statusCode === 200) {
                        dispatch(setUser(res.user));
                        toast.success(res.message);
                    }
                })
                .catch((err: any) => {
                    console.log(err);
                    toast.error(err.message);
                });

            apiGetNotifications(0)
                .then((res: any) => {
                  if (res.success) {
                        dispatch(setNotifications(res.data));
                    }
                })
                .catch((err: any) => {
                    toast.error(err.message);
                });
        }
    }, [validUser]);

    return (
        <div className="authUser flex">
            <div className="w-3/12">
                <ListNav />
            </div>
            <div className="bg-gray-300 w-9/12">{children}</div>

        </div>
    );
}
