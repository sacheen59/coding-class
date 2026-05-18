import { toast } from "react-toastify";

const API_URL = "http://127.0.0.1:8000";

export async function registerUser(username, email, password) {
  try {
    const response = await fetch(`${API_URL}/api/auth/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }
    toast.success("User registered successfully!");
    return data;
  } catch (error) {
    toast.error(error.message);
    console.log(error);
  }
}
