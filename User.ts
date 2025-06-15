// User.ts
export function saveUserToIndexedDB(user: {
  username: string;
  email: string;
  password: string;
}) {
  return new Promise<void>((resolve, reject) => {
    const request = indexedDB.open("MyAppDB", 1);

    request.onupgradeneeded = function (event) {
      const db = request.result;
      if (!db.objectStoreNames.contains("users")) {
        db.createObjectStore("users", { keyPath: "username" });
      }
    };

    request.onsuccess = function () {
      const db = request.result;
      const tx = db.transaction("users", "readwrite");
      const store = tx.objectStore("users");
      store.put(user);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    };

    request.onerror = function () {
      reject(request.error);
    };
  });
}

export function getUserFromIndexedDB(): Promise<{
  username: string;
  email: string;
  password: string;
} | null> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("MyAppDB", 2);

    request.onsuccess = function () {
      const db = request.result;
      const tx = db.transaction("users", "readonly");
      const store = tx.objectStore("users");

      const getRequest = store.getAll();

      getRequest.onsuccess = function () {
        const users = getRequest.result;
        if (users.length > 0) {
          resolve(users[0]); // или найди нужного пользователя
        } else {
          resolve(null);
        }
      };

      getRequest.onerror = function () {
        reject(getRequest.error);
      };
    };

    request.onerror = function () {
      reject(request.error);
    };
  });
}
