const defaultConfigurations = {
  credentials: {
    "http-shortcuts-01-o861.codeverify@gmail.com":
      "ew0KICAid2ViIjogew0KICAgICJjbGllbnRfaWQiOiAiMjM1MzE0MzExMTMzLTZ1Z2c2Njdwb3Ezcmplbmhscjh1ZTBsZWJrZjBvNHVkLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwNCiAgICAicHJvamVjdF9pZCI6ICJodHRwLXNob3J0Y3V0cy0wMSIsDQogICAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwNCiAgICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwNCiAgICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsDQogICAgImNsaWVudF9zZWNyZXQiOiAiR09DU1BYLXp1WEttT3d1Vk1faGJ2ZHM2dGpKZEh3MVBaSFoiLA0KICAgICJyZWRpcmVjdF91cmlzIjogWw0KICAgICAgImh0dHBzOi8vZ29vZ2xlLWF1dGgyLnN1cmdlLnNoLyIsDQogICAgICAiaHR0cHM6Ly9nb29nbGUtYXV0aDItb25lLnZlcmNlbC5hcHAvIiwNCiAgICAgICJodHRwczovL28yMnphbG8uZ2l0aHViLmlvL2dvb2dsZS1hdXRoMi8iLA0KICAgICAgImh0dHBzOi8vZ29vZ2xlLWF1dGgyLm5ldGxpZnkuYXBwLyINCiAgICBdLA0KICAgICJvd25lciI6ICJvODYxLmNvZGV2ZXJpZnlAZ21haWwuY29tIg0KICB9DQp9DQo=",
    "http-shortcuts-02-o861.codeverify@gmail.com":
      "ew0KICAid2ViIjogew0KICAgICJjbGllbnRfaWQiOiAiMjA5NjM0MjEwMTA5LW0yamk0Mm5sY2tsMW4zZm5nMmRvZ3NlZjZsNHJnZHNzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwNCiAgICAicHJvamVjdF9pZCI6ICJodHRwLXNob3J0Y3V0cy0wMiIsDQogICAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwNCiAgICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwNCiAgICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsDQogICAgImNsaWVudF9zZWNyZXQiOiAiR09DU1BYLUpULWtFV0owYTlFYkRTNkNJUFVaUWNUanA0SVMiLA0KICAgICJyZWRpcmVjdF91cmlzIjogWw0KICAgICAgImh0dHBzOi8vZ29vZ2xlLWF1dGgyLW9uZS52ZXJjZWwuYXBwLyIsDQogICAgICAiaHR0cHM6Ly9nb29nbGUtYXV0aDIubmV0bGlmeS5hcHAvIiwNCiAgICAgICJodHRwczovL2dvb2dsZS1hdXRoMi5zdXJnZS5zaC8iLA0KICAgICAgImh0dHBzOi8vbzIyemFsby5naXRodWIuaW8vZ29vZ2xlLWF1dGgyLyINCiAgICBdLA0KICAgICJvd25lciI6ICJvODYxLmNvZGV2ZXJpZnlAZ21haWwuY29tIg0KICB9DQp9DQo=",
    "http-shortcuts-03-o861.codeverify@gmail.com":
      "ew0KICAid2ViIjogew0KICAgICJjbGllbnRfaWQiOiAiNjI0NDY3NzkwMTQ1LThtbmc0OGRicTluY2hsZnFkcW1lNHU2OGttNmU5MmptLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwNCiAgICAicHJvamVjdF9pZCI6ICJodHRwLXNob3J0Y3V0cy0wMyIsDQogICAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwNCiAgICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwNCiAgICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsDQogICAgImNsaWVudF9zZWNyZXQiOiAiR09DU1BYLXFSdjlyYVk2RVBZdHUwaE9zOE84VmE4Qm1jZnQiLA0KICAgICJyZWRpcmVjdF91cmlzIjogWw0KICAgICAgImh0dHBzOi8vZ29vZ2xlLWF1dGgyLW9uZS52ZXJjZWwuYXBwLyIsDQogICAgICAiaHR0cHM6Ly9nb29nbGUtYXV0aDIubmV0bGlmeS5hcHAvIiwNCiAgICAgICJodHRwczovL28yMnphbG8uZ2l0aHViLmlvL2dvb2dsZS1hdXRoMi8iLA0KICAgICAgImh0dHBzOi8vZ29vZ2xlLWF1dGgyLnN1cmdlLnNoLyINCiAgICBdLA0KICAgICJvd25lciI6ICJvODYxLmNvZGV2ZXJpZnlAZ21haWwuY29tIg0KICB9DQp9DQo=",
  },
  scopes: {
    "scope-gpt":
      "https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/iam https://www.googleapis.com/auth/contacts https://www.googleapis.com/auth/contacts.readonly https://www.googleapis.com/auth/directory.readonly https://www.googleapis.com/auth/user.addresses.read https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.emails.read https://www.googleapis.com/auth/user.phonenumbers.read https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/spreadsheets.readonly https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/documents.readonly https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/photoslibrary https://www.googleapis.com/auth/photoslibrary.readonly https://www.googleapis.com/auth/photoslibrary.sharing https://www.googleapis.com/auth/firebase https://www.googleapis.com/auth/ndev.cloudman https://mail.google.com/ https://www.googleapis.com/auth/gmail.compose https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/gmail.labels https://www.googleapis.com/auth/gmail.insert https://www.googleapis.com/auth/script.projects https://www.googleapis.com/auth/script.projects.readonly https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/tasks",
    "script.run":
      "https://apps-apis.google.com/a/feeds/ https://apps-apis.google.com/a/feeds https://apps-apis.google.com/a/feeds/alias/ https://apps-apis.google.com/a/feeds/groups/ https://mail.google.com/ https://mail.google.com/mail/feed/atom https://mail.google.com https://mail.google.com/mail/feed/atom/ https://mail.google.com/mail https://mail.google.com/mail/ http://mail.google.com/ http://mail.google.com http://sites.google.com/feeds http://sites.google.com/feeds/ https://sites.google.com/feeds https://sites.google.com/feeds/ https://sites.google.com/feeds/#readonly https://www.googleapis.com/auth/calendar https://www.google.com/calendar/feeds/ https://www.google.com/calendar/feeds http://www.google.com/calendar/feeds/default/allcalendars/full https://www.google.com/calendar/feeds/default/owncalendars/full http://www.google.com/calendar/feeds/ http://www.google.com/calendar/feeds https://www.google.com/calendar/feeds/default/private/full http://www.google.com/calendar/feeds/default/private/full http://www.google.com/calendar/feeds/default/owncalendars/full/ https://www.google.com/calendar/feeds/default https://www.google.com/calendar/freebusy https://www.googleapis.com/auth/contacts https://www.google.com/m8/feeds https://www.google.com/m8/feeds/ https://www.google.com/m8/feeds/contacts https://www.google.com/m8/feeds/contacts/ https://www.google.com/m8/feeds/contacts/default/full https://www.google.com/m8/feeds/photos https://www.google.com/m8/feeds/photos/ https://www.google.com/m8/feeds/profiles https://www.google.com/m8/feeds/profiles/ https://www.google.com/m8/feeds/groups https://www.google.com/m8/feeds/groups/ https://www.google.com/m8/feeds/user/ https://www.google.com/m8/feeds/user http://www.google.com/m8/feeds/ http://www.google.com/m8/feeds http://www.google.com/m8/feeds/contacts/ https://www.google.com/m8/feeds/contacts/default/full/ https://www.google.com/m8/feeds/default/full http://www.google.com/m8/feeds/contacts/default/full https://www.google.com/m8/feeds/photo http://www.google.com/m8/feeds/contacts https://www.google.com/m8/feeds/groups/default/full https://picasaweb.google.com/c/ http://www-opensocial.googleusercontent.com/api/people/@me/@self https://www-opensocial.googleusercontent.com/api/people/ http://www-opensocial.googleusercontent.com/api/people/ https://www-opensocial.googleusercontent.com/api/people https://www.googleapis.com/auth/admin.directory.group https://www.googleapis.com/auth/directory.group https://www.googleapis.com/auth/admin.directory.user https://www.googleapis.com/auth/directory.user https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/documents.currentonly https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/dynamiccreatives https://www.googleapis.com/auth/forms https://www.googleapis.com/auth/forms.currentonly https://www.googleapis.com/auth/groups https://www.googleapis.com/auth/script.cpanel https://www.googleapis.com/auth/script.external_request https://www.googleapis.com/auth/script.scriptapp https://www.googleapis.com/auth/script.send_mail https://www.googleapis.com/auth/script.storage https://www.googleapis.com/auth/script.webapp.deploy https://www.googleapis.com/auth/spreadsheets https://spreadsheets.google.com/feeds https://spreadsheets.google.com/feeds/ http://spreadsheets.google.com/feeds http://spreadsheets.google.com/feeds/ https://spreadsheets.google.com/feeds/spreadsheets https://spreadsheets.google.com/feeds/spreadsheets/private/full http://spreadsheets.google.com/feeds/spreadsheets/private/full https://spreadsheets.google.com/feeds/worksheets/ https://spreadsheets.google.com/tq https://spreadsheets.google.com/feeds/list/ https://spreadsheets.google.com/feeds/worksheet/ https://spreadsheets.google.com/feeds/cell/ https://www.googleapis.com/auth/spreadsheets.currentonly https://www.googleapis.com/auth/sqlservice https://www.googleapis.com/auth/userinfo.email email https://www.googleapis.com/auth/userinfo#email https://www.googleapis.com/auth/script.projects",
    "scope-01":
      "https://www.googleapis.com/auth/script.external_request openid https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/script.send_mail https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/groups https://apps-apis.google.com/a/feeds/ https://www.googleapis.com/auth/script.storage https://www.googleapis.com/auth/forms.currentonly https://www.googleapis.com/auth/iam https://www.googleapis.com/auth/photoslibrary https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/documents.readonly https://www.googleapis.com/auth/photoslibrary.sharing https://www.googleapis.com/auth/firebase https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/contacts https://www.googleapis.com/auth/spreadsheets.currentonly https://www.googleapis.com/auth/ndev.cloudman https://www.googleapis.com/auth/user.addresses.read https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/gmail.insert https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/script.projects.readonly https://www.googleapis.com/auth/script.projects",
    "scope-02":
      "https://www.googleapis.com/auth/user.emails.read https://mail.google.com/ https://www.googleapis.com/auth/calendar https://apps-apis.google.com/a/feeds/alias/ https://www.googleapis.com/auth/admin.directory.user https://www.googleapis.com/auth/forms https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/gmail.compose https://apps-apis.google.com/a/feeds/groups/ https://www.googleapis.com/auth/directory.readonly https://www.googleapis.com/auth/admin.directory.group https://www.googleapis.com/auth/documents.currentonly https://www.googleapis.com/auth/script.webapp.deploy https://www.googleapis.com/auth/script.scriptapp https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/spreadsheets.readonly https://www.googleapis.com/auth/user.birthday.read http://sites.google.com/feeds https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/user.phonenumbers.read https://www.googleapis.com/auth/contacts.readonly https://www.googleapis.com/auth/gmail.labels https://www.googleapis.com/auth/photoslibrary.readonly https://www.googleapis.com/auth/script.cpanel ",
  },
};
const RTDBHelper = (() => {
  const KEY_DOT_MAP = "~";
  const KEY_DATA = "VAL";
  const TREE_KEY = {
    RPath: "RPath",
    RPathByDate: "RPathByDate",
  };
  const STORE_KEY = {
    GOOGLE_GEMINI_API_KEY: "GOOGLE_GEMINI_API_KEY",
    HTTPSHORTCUTS_CURMAIL: "HTTPSHORTCUTS_CURMAIL",
    EXECUTE_JS_FUNCTION_SCRIPTID: "EXECUTE_JS_FUNCTION_SCRIPTID",
    EXECUTE_JS_FUNCTION_SCRIPTID_PUBLIC: "EXECUTE_JS_FUNCTION_SCRIPTID_PUBLIC",
    R_AUTH2_STORE: "R_AUTH2_STORE",
    R_AUTH2_STORE_PUBLIC: "R_AUTH2_STORE_PUBLIC",
    R_AUTH2_CLIENTID_CURRENT_PUBLIC: "R_AUTH2_CLIENTID_CURRENT_PUBLIC",
  };
  const STORE_CONFIG = {
    [STORE_KEY.GOOGLE_GEMINI_API_KEY]: {
      url: `https://r-gemini-api-key-default-rtdb.asia-southeast1.firebasedatabase.app`,
      auth: ``,
      root: STORE_KEY.GOOGLE_GEMINI_API_KEY,
    },
    [STORE_KEY.HTTPSHORTCUTS_CURMAIL]: {
      url: `https://r-httpshortcut-curmail-default-rtdb.asia-southeast1.firebasedatabase.app`,
      auth: ``,
      root: STORE_KEY.HTTPSHORTCUTS_CURMAIL,
    },
    [STORE_KEY.EXECUTE_JS_FUNCTION_SCRIPTID]: {
      url: `https://r-scriptid-execute-js-function-default-rtdb.asia-southeast1.firebasedatabase.app`,
      auth: ``,
      root: STORE_KEY.EXECUTE_JS_FUNCTION_SCRIPTID,
    },
    [STORE_KEY.EXECUTE_JS_FUNCTION_SCRIPTID_PUBLIC]: {
      url: `https://r-scriptid-execute-js-public-default-rtdb.asia-southeast1.firebasedatabase.app/`,
      auth: ``,
      root: STORE_KEY.EXECUTE_JS_FUNCTION_SCRIPTID_PUBLIC,
    },
    [STORE_KEY.R_AUTH2_STORE]: {
      url: `https://r-auth2-store-default-rtdb.asia-southeast1.firebasedatabase.app/`,
      auth: ``,
      root: STORE_KEY.R_AUTH2_STORE,
    },
    [STORE_KEY.R_AUTH2_STORE_PUBLIC]: {
      url: `https://r-auth2-store-public-default-rtdb.asia-southeast1.firebasedatabase.app/`,
      auth: ``,
      root: STORE_KEY.R_AUTH2_STORE_PUBLIC,
    },
    [STORE_KEY.R_AUTH2_CLIENTID_CURRENT_PUBLIC]: {
      url: `https://r-auth2-client-current-public-default-rtdb.asia-southeast1.firebasedatabase.app/`,
      auth: ``,
      root: STORE_KEY.R_AUTH2_CLIENTID_CURRENT_PUBLIC,
    },
  };

  const RTDBEmails = {
    [TREE_KEY.RPath]: {
      url: `https://http-shortcuts-08-default-rtdb.asia-southeast1.firebasedatabase.app`,
      auth: `uJIoKugV8544zNQyMGIoO2QasJRnBrJFIo8DOV0s`,
      root: `emails`,
    },
    [TREE_KEY.RPathByDate]: {
      url: `https://http-shortcuts-09-default-rtdb.asia-southeast1.firebasedatabase.app`,
      auth: `uKLM6KeNCPncBM7dGbjNSSH2y5zsnaXO517mWZ6P`,
      root: `emails`,
    },
  };
  const resolveUrl = (url = "") => {
    if (url) {
      while ((url + "").endsWith("/")) url = url.slice(0, -1);
    }
    return url;
  };
  /**
   * Converts an email address to a structured path for RTDB (Realtime Database).
   *
   * @param {string} email - The email address to be converted.
   * @returns {Object} An object containing the RTDB path, RTDB path with time, and value object.
   * @property {string} RPath - The RTDB path derived from the email's local part.
   * @property {string} RPathByDate - The RTDB path with the current date.
   * @property {Object} VAL - The value object containing the email and a key.
   * @property {string} VAL.EMAIL - The original email address.
   * @property {string} VAL.KEY - A key derived from the email address by removing non-alphanumeric characters.
   *
   * @example
   * // Example usage
   * console.log("Path for updating:\n", JSON.stringify(ToRTDBPath("ong.trieu@gmail.com"), null, 2));
   *
   * // Output:
   * // {
   * //   "RPath": "o/n/g/t/r/i/e/u/~/g/m/a/i/l/c/o/m/VAL",
   * //   "RPathByDate": "2023/10/05/VAL",
   * //   "VAL": {
   * //     "EMAIL": "ong.trieu@gmail.com",
   * //     "KEY": "ongtrieugmailcom"
   * //   }
   * // }
   */
  function ToRTDBPath(email) {
    if (typeof email !== "string") return "";
    if (email === "") return "";
    email = (email + "").trim().toLowerCase();
    let localPart = email;
    if (localPart.includes("@")) localPart = email.split("@")[0];
    localPart = localPart.replace(/\./g, KEY_DOT_MAP);
    var path = [];
    for (var i = 0; i < localPart.length; i++) {
      var char = localPart[i];
      path.push(char);
    }
    const KEY = email.replace(/[^a-zA-Z0-9]/g, "");
    const currentDate = new Date();
    const formattedDate =
      currentDate.getUTCFullYear() + "/" + ("0" + (currentDate.getUTCMonth() + 1)).slice(-2) + "/" + ("0" + currentDate.getUTCDate()).slice(-2);

    return {
      RPath: path.join("/") + "/" + KEY_DATA,
      RPathByDate: formattedDate + "/" + KEY_DATA + KEY,
      VAL: {
        EMAIL: email,
        KEY,
        AT: formattedDate.replace(/\//g, "-"),
      },
    };
  }
  function CreateFetchOptions(email, { url, auth, root, pathBy } = {}) {
    try {
      pathBy = pathBy || TREE_KEY.RPath;
      if (pathBy in TREE_KEY !== true) pathBy = TREE_KEY.RPath;

      url = resolveUrl(url || RTDBEmails[pathBy].url);
      auth = auth || RTDBEmails[pathBy].auth;
      root = root || RTDBEmails[pathBy].root;

      let rPath = ToRTDBPath(email);
      let keyBody = "body";
      if (typeof ScriptApp === "object" && typeof ScriptProperties === "object") {
        keyBody = "payload";
      }
      let fetchOptions = {
        url: `${url}/${root}/${rPath[pathBy]}.json?auth=${auth}`,
        [keyBody]: JSON.stringify(rPath.VAL),
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      };
      return fetchOptions;
    } catch (error) {
      throw error;
    }
  }
  function CreateFetchOptionsMulti(email) {
    try {
      let results = [];
      Object.keys(RTDBEmails).forEach((x) => {
        results.push(CreateFetchOptions(email, Object.assign({}, x, { pathBy: x })));
      });
      return results;
    } catch (error) {
      throw error;
    }
  }
  function searchVALObjects(obj) {
    let result = [];
    if (obj === null) return result;
    if (typeof obj !== "object") return result;

    // Hàm đệ quy để duyệt qua tất cả các phần tử trong JSON
    function search(obj) {
      if (typeof obj === "object" && obj !== null) {
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (key.startsWith("VAL")) {
              result.push(obj[key]); // Thêm đối tượng có key "VAL" vào mảng
            }
            search(obj[key]); // Đệ quy vào các phần tử con
          }
        }
      }
    }

    search(obj); // Bắt đầu tìm kiếm từ đối tượng JSON
    return result;
  }
  function CreateFetchOptionGetEmailsByPrefix(prefixEmail = "") {
    try {
      let { url, auth, root } = RTDBEmails[TREE_KEY.RPath];
      url = resolveUrl(url);
      let prefixPath = "";
      let rPath = ToRTDBPath(prefixEmail);
      if (rPath && TREE_KEY.RPath in rPath) prefixPath = (rPath[TREE_KEY.RPath] + "").replace("/VAL", "");
      let fetchOptions = {
        url: `${url}/${root}/${prefixPath}.json?auth=${auth}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      return fetchOptions;
    } catch (error) {
      throw error;
    }
  }
  function CreateFetchOptionGetEmailsByDate(yyyyMMdd = "") {
    try {
      yyyyMMdd = yyyyMMdd || "";
      yyyyMMdd = (() => {
        // Nếu ngày ở định dạng yyyy-MM-dd hoặc yyyy/MM/dd
        if (/^\d{4}[-/]\d{2}[-/]\d{2}$/.test(yyyyMMdd)) {
          return yyyyMMdd.replace(/-/g, "/"); // Chuyển dấu '-' thành '/'
        }
        if (/^\d{8}$/.test(yyyyMMdd)) {
          return yyyyMMdd.replace(/(\d{4})(\d{2})(\d{2})/, "$1/$2/$3"); // Chuyển thành yyyy/MM/dd
        }
        if (/^\d{2}\/\d{2}\/\d{4}$/.test(yyyyMMdd)) {
          // Chuyển định dạng MM/dd/yyyy thành yyyy/MM/dd
          let parts = yyyyMMdd.split("/");
          return `${parts[2]}/${parts[0]}/${parts[1]}`;
        }
      })();
      let { url, auth, root } = RTDBEmails[TREE_KEY.RPathByDate];
      url = resolveUrl(url);
      let fetchOptions = {
        url: `${url}/${root}/${yyyyMMdd}.json?auth=${auth}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      return fetchOptions;
    } catch (error) {
      throw error;
    }
  }
  function CreateFetchOptionGetDataStoreByPrefix(prefixEmail = "", store_key = "") {
    try {
      if (store_key in STORE_CONFIG !== true) return undefined;
      let { url, auth, root } = STORE_CONFIG[store_key];
      url = resolveUrl(url);
      let prefixPath = "";
      let rPath = ToRTDBPath(prefixEmail);
      if (rPath && TREE_KEY.RPath in rPath) prefixPath = (rPath[TREE_KEY.RPath] + "").replace("/VAL", "");
      let fetchOptions = {
        url: `${url}/${root}/${prefixPath}.json?auth=${auth}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      return fetchOptions;
    } catch (error) {
      throw error;
    }
  }
  class StoreHandler {
    constructor(storeKey) {
      if (!(storeKey in STORE_CONFIG)) {
        throw new Error(`Invalid store key: ${storeKey}`);
      }
      this.storeKey = storeKey;
      this.config = STORE_CONFIG[storeKey];
    }

    CreateFetchOptionsBySave(email, objData, VAL_SUFFIX = "") {
      try {
        let fetchOptions = CreateFetchOptions(email, Object.assign({}, this.config, { pathBy: TREE_KEY.RPath }));
        var bodyObj = JSON.parse(fetchOptions.body);
        bodyObj[this.storeKey] = JSON.stringify(objData);
        fetchOptions.body = JSON.stringify(bodyObj);
        if (VAL_SUFFIX !== "") fetchOptions.url = fetchOptions.url.replace("VAL", `VAL-${VAL_SUFFIX}`);
        return fetchOptions;
      } catch (error) {
        throw error;
      }
    }

    CreateFetchOptionsByGet(email) {
      try {
        let fetchOptions = CreateFetchOptionGetDataStoreByPrefix(email, this.storeKey);
        return fetchOptions;
      } catch (error) {
        throw error;
      }
    }
  }
  const STORE = (() => {
    const GOOGLE_GEMINI_API_KEY = (() => {
      const CreateFetchOptionsBySave = (email, apiKey) => {
        try {
          var fetchOptions = CreateFetchOptions(email, Object.assign({}, STORE_CONFIG[STORE_KEY.GOOGLE_GEMINI_API_KEY], { pathBy: TREE_KEY.RPath }));
          var bodyObj = JSON.parse(fetchOptions.body);
          bodyObj[STORE_KEY.GOOGLE_GEMINI_API_KEY] = apiKey;
          fetchOptions.body = JSON.stringify(bodyObj);
          return fetchOptions;
        } catch (error) {
          throw error;
        }
      };
      const CreateFetchOptionsByGet = (email) => {
        try {
          let fetchOptions = CreateFetchOptionGetDataStoreByPrefix(email, STORE_KEY.GOOGLE_GEMINI_API_KEY);
          return fetchOptions;
        } catch (error) {
          throw error;
        }
      };
      return {
        CreateFetchOptionsBySave,
        CreateFetchOptionsByGet,
      };
    })();
    const HTTPSHORTCUTS_CURMAIL = (() => {
      const CreateFetchOptionsBySave = (email, objData) => {
        try {
          let fetchOptions = CreateFetchOptions(email, Object.assign({}, STORE_CONFIG[STORE_KEY.HTTPSHORTCUTS_CURMAIL], { pathBy: TREE_KEY.RPath }));
          var bodyObj = JSON.parse(fetchOptions.body);
          bodyObj[STORE_KEY.HTTPSHORTCUTS_CURMAIL] = JSON.stringify(objData);
          fetchOptions.body = JSON.stringify(bodyObj);
          return fetchOptions;
        } catch (error) {
          throw error;
        }
      };
      const CreateFetchOptionsByGet = (email) => {
        try {
          let fetchOptions = CreateFetchOptionGetDataStoreByPrefix(email, STORE_KEY.HTTPSHORTCUTS_CURMAIL);
          return fetchOptions;
        } catch (error) {
          throw error;
        }
      };
      return {
        CreateFetchOptionsBySave,
        CreateFetchOptionsByGet,
      };
    })();
    const EXECUTE_JS_FUNCTION_SCRIPTID = (() => {
      const CreateFetchOptionsBySave = (email, objData) => {
        try {
          let fetchOptions = CreateFetchOptions(
            email,
            Object.assign({}, STORE_CONFIG[STORE_KEY.EXECUTE_JS_FUNCTION_SCRIPTID], { pathBy: TREE_KEY.RPath })
          );
          var bodyObj = JSON.parse(fetchOptions.body);
          bodyObj[STORE_KEY.EXECUTE_JS_FUNCTION_SCRIPTID] = JSON.stringify(objData);
          fetchOptions.body = JSON.stringify(bodyObj);
          return fetchOptions;
        } catch (error) {
          throw error;
        }
      };
      const CreateFetchOptionsByGet = (email) => {
        try {
          let fetchOptions = CreateFetchOptionGetDataStoreByPrefix(email, STORE_KEY.EXECUTE_JS_FUNCTION_SCRIPTID);
          return fetchOptions;
        } catch (error) {
          throw error;
        }
      };
      return {
        CreateFetchOptionsBySave,
        CreateFetchOptionsByGet,
      };
    })();
    const EXECUTE_JS_FUNCTION_SCRIPTID_PUBLIC = (() => {
      const CreateFetchOptionsBySave = (email, objData) => {
        try {
          let fetchOptions = CreateFetchOptions(
            email,
            Object.assign({}, STORE_CONFIG[STORE_KEY.EXECUTE_JS_FUNCTION_SCRIPTID_PUBLIC], { pathBy: TREE_KEY.RPath })
          );
          var bodyObj = JSON.parse(fetchOptions.body);
          bodyObj[STORE_KEY.EXECUTE_JS_FUNCTION_SCRIPTID_PUBLIC] = JSON.stringify(objData);
          fetchOptions.body = JSON.stringify(bodyObj);
          return fetchOptions;
        } catch (error) {
          throw error;
        }
      };
      const CreateFetchOptionsByGet = (email) => {
        try {
          let fetchOptions = CreateFetchOptionGetDataStoreByPrefix(email, STORE_KEY.EXECUTE_JS_FUNCTION_SCRIPTID_PUBLIC);
          return fetchOptions;
        } catch (error) {
          throw error;
        }
      };
      return {
        CreateFetchOptionsBySave,
        CreateFetchOptionsByGet,
      };
    })();
    return {
      GOOGLE_GEMINI_API_KEY,
      HTTPSHORTCUTS_CURMAIL,
      EXECUTE_JS_FUNCTION_SCRIPTID,
      EXECUTE_JS_FUNCTION_SCRIPTID_PUBLIC,
      R_AUTH2_STORE: new StoreHandler(STORE_KEY.R_AUTH2_STORE),
      R_AUTH2_STORE_PUBLIC: new StoreHandler(STORE_KEY.R_AUTH2_STORE_PUBLIC),
    };
  })();
  return {
    KEY_DOT_MAP,
    KEY_DATA,
    ToRTDBPath,
    CreateFetchOptions,
    CreateFetchOptionsMulti,
    searchVALObjects,
    CreateFetchOptionGetEmailsByPrefix,
    CreateFetchOptionGetEmailsByDate,
    STORE,
    STORE_KEY,
    StoreHandler,
  };
})();
if (typeof window !== "undefined") {
  window.defaultConfigurations = defaultConfigurations;
  window.RTDBHelper = RTDBHelper;
}
