# NodeJS websocket remote control

## Installation

1. Clone [repo](https://github.com/yurka1605/remote-control)
2. `npm install`
3. Rename `.env.example` to `.env`

## Usage

**Development**

`npm run start`

- Frontend served @ `http://localhost:3000` without nodemon
- Backend websocket connection served @ `http://localhost:8080` without nodemon

**Production**

`npm run start:prod`

- Frontend served @ `http://localhost:3000` without nodemon
- Backend websocket connection served @ `http://localhost:8080` without nodemon

---

**All commands**

| Command              | Description                           |
| -------------------- | ------------------------------------- |
| `npm run start`      | Run developer app mode                |
| `npm run start:prod` | Build app and run production app mode |
| `npm run build`      | Build app in dist folder              |

**Note**: replace `npm` with `yarn` in `package.json` if you use yarn.
