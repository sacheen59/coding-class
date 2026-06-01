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

export async function loginUser(username, password) {
  try {
    const response = await fetch(`${API_URL}/api/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }
    toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error.message);
    console.log(error);
  }
}


// fetch programming language
export async function fetchAllLanguageItem() {
  try {
    const response = await fetch(`${API_URL}/api/language/list-create/`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }
    return data;
  } catch (error) {
    toast.error(error.message);
    console.log(error);
  }
}


// post language item
export async function addLanguage(languageName, languageDescription) {
  const lowerCaseLanguageName = languageName.toLowerCase();
  try {
    const response = await fetch(`${API_URL}/api/language/list-create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language_name: lowerCaseLanguageName,
        description: languageDescription,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }
    toast.success("Language added successfully.");
    return data;
  } catch (error) {
    toast.error(error.message);
    console.log(error);
  }
}
