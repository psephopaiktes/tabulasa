export const store = $state({
  memo: "",
  options: {
    theme: "system",
  },
});

export const loadOptions = async () => {
  const options = await storage.getItem("sync:options");
  if (options) {
    Object.assign(store.options, options);
  } else {
    await storage.setItem("sync:options", store.options);
  }
};
