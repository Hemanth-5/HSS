import dotenv from "dotenv";

dotenv.config();

// 🔹 LOGIN TO HSS PORTAL & GET ACCESS TOKEN
export const loginToHSS = async (username, password) => {
  try {
    const payload = {
      username,
      password,
      grant_type: "password",
    };

    console.log(payload);
    const response = await fetch("http://hss.psgtech.ac.in/WebAPI/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json, text/plain, /",
      },
      body: new URLSearchParams({
        grant_type: "password",
        username: username,
        password: password,
      }),
    });

    console.log(response);
    if (response.ok) {
      const data = await response.json();
      if (data.access_token) {
        console.log("✅ HSS Login Successful!");
        return data.access_token;
      } else {
        console.log("❌ HSS Login Failed!");
        return null;
      }
    } else {
      console.log("❌ HSS Login Failed with status:", response.status);
      return null;
    }
  } catch (error) {
    console.error("❌ Error logging into HSS:", error.message);
    return null;
  }
};
