const hashTagTrend = async (req, res) => {
  res.send("hashTagTrend");
};

const hashTagSearch = async (req, res) => {
  res.send("hashTagSearch");
};

const hashTagFeed = async (req, res) => {
  res.send("hashTagFeed");
}

  export {
    hashTagTrend,
    hashTagSearch,
    hashTagFeed,
  };