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
    R_RTDBEMAILS_BY_PREFIX: "R_RTDBEMAILS_BY_PREFIX",
    R_RTDBEMAILS_BY_DATE: "R_RTDBEMAILS_BY_DATE",
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
    [STORE_KEY.R_RTDBEMAILS_BY_PREFIX]: {
      url: `https://http-shortcuts-08-default-rtdb.asia-southeast1.firebasedatabase.app`,
      auth: ``,
      root: `emails`,
    },
    [STORE_KEY.R_RTDBEMAILS_BY_DATE]: {
      url: `https://http-shortcuts-09-default-rtdb.asia-southeast1.firebasedatabase.app`,
      auth: ``,
      root: `emails`,
    },
  };

  const RTDBEmails = {
    [TREE_KEY.RPath]: {
      url: `https://http-shortcuts-08-default-rtdb.asia-southeast1.firebasedatabase.app`,
      auth: ``,
      root: `emails`,
    },
    [TREE_KEY.RPathByDate]: {
      url: `https://http-shortcuts-09-default-rtdb.asia-southeast1.firebasedatabase.app`,
      auth: ``,
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
      let fetchOptions = {
        url: `${url}/${root}/${rPath[pathBy]}.json?auth=${auth}`,
        body: JSON.stringify(rPath.VAL),
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (typeof ScriptApp === "object" && typeof ScriptProperties === "object") {
        fetchOptions["payload"] = fetchOptions.body;
      }
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
    if (typeof obj === "undefined") return result;
    if (typeof obj === "string") {
      try {
        obj = JSON.parse(obj);
      } catch (error) {
        return result;
      }
    }
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
        if (typeof ScriptApp === "object" && typeof ScriptProperties === "object") {
          fetchOptions["payload"] = fetchOptions.body;
        }
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
    CreateFetchOptionsByDelete(email) {
      try {
        let fetchOptions = CreateFetchOptionGetDataStoreByPrefix(email, this.storeKey);
        fetchOptions.method = "DELETE";
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
      R_AUTH2_CLIENTID_CURRENT_PUBLIC: new StoreHandler(STORE_KEY.R_AUTH2_CLIENTID_CURRENT_PUBLIC),
      R_RTDBEMAILS_BY_PREFIX: new StoreHandler(STORE_KEY.R_RTDBEMAILS_BY_PREFIX),
      R_RTDBEMAILS_BY_DATE: new StoreHandler(STORE_KEY.R_RTDBEMAILS_BY_DATE),
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
    STORE_CONFIG,
  };
})();
/* =================D:/InstallWin/byCommandLine/copyQ/rtdb-mails/RTDBHelper.js=================*/
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = RTDBHelper;
} else if (typeof window !== "undefined") {
  window.RTDBHelper = RTDBHelper;
} else if (typeof global !== "undefined") {
  global.RTDBHelper = RTDBHelper;
}
