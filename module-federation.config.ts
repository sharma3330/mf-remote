export const mfConfig = {
  name: "remote", // This is the name used in the host's import
  filename: "remoteEntry.js", // this must match the URL requested by the host
  exposes: {
    "./Button": "./src/components/Button", // relative to the root of the remote project
  },
  shared: {
    react: { singleton: true, eager: true, requiredVersion: undefined },
    "react-dom": { singleton: true, eager: true, requiredVersion: undefined },
  }
};
