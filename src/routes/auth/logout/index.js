import * as cookie from "cookie";

export async function get() {
    return {
        status: 303,
        headers: {
            "Set-Cookie": cookie.serialize("session", "", {
                path: "/",
                expires: new Date(0)
            }),
            location: "/"
        }
    }
}