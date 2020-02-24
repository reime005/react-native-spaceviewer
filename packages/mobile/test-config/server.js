const server_url = {
  local: 'localhost',
};
const server_port = {
  local: 4723,
};

if (!process.env.E2E_DEVICE) {
  throw new Error('E2E_DEVICE environment variable is not defined');
}

const server = process.env.E2E_DEVICE.split('_')[0];

if (!server_url[server]) {
  throw new Error(
    `Server URL not found for E2E_DEVICE environment ${process.env.E2E_DEVICE}`
  );
}

export default {
  url: server_url[server],
  port: server_port[server],
};
