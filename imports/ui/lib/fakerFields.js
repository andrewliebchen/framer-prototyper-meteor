const fakerFields = [
  {
    name: "address",
    options: [
      { name: "zipCode", value: "address.zipCode" },
      { name: "city", value: "address.city" },
      { name: "cityPrefix", value: "address.cityPrefix" },
      { name: "citySuffix", value: "address.citySuffix" },
      { name: "streetName", value: "address.streetName" },
      { name: "streetAddress", value: "address.streetAddress" },
      { name: "streetSuffix", value: "address.streetSuffix" },
      { name: "streetPrefix", value: "address.streetPrefix" },
      { name: "secondaryAddress", value: "address.secondaryAddress" },
      { name: "county", value: "address.county" },
      { name: "country", value: "address.country" },
      { name: "countryCode", value: "address.countryCode" },
      { name: "state", value: "address.state" },
      { name: "stateAbbr", value: "address.stateAbbr" },
      { name: "latitude", value: "address.latitude" },
      { name: "longitude", value: "address.longitude" }
    ]
  },
  {
    name: "commerce",
    options: [
      "color",
      "department",
      "productName",
      "price",
      "productAdjective",
      "productMaterial",
      "product"
    ]
  },
  {
    name: "company",
    options: [
      "suffixes",
      "companyName",
      "companySuffix",
      "catchPhrase",
      "bs",
      "catchPhraseAdjective",
      "catchPhraseDescriptor",
      "catchPhraseNoun",
      "bsAdjective",
      "bsBuzz",
      "bsNoun"
    ]
  },
  {
    name: "database",
    options: ["column", "type", "collation", "engine"]
  },
  {
    name: "date",
    options: ["past", "future", "between", "recent", "soon", "month", "weekday"]
  },
  {
    name: "finance",
    options: [
      "account",
      "accountName",
      "mask",
      "amount",
      "transactionType",
      "currencyCode",
      "currencyName",
      "currencySymbol",
      "bitcoinAddress",
      "ethereumAddress",
      "iban",
      "bic"
    ]
  },
  {
    name: "hacker",
    options: ["abbreviation", "adjective", "noun", "verb", "ingverb", "phrase"]
  },
  {
    name: "image",
    options: [
      "image",
      "avatar",
      "imageUrl",
      "abstract",
      "animals",
      "business",
      "cats",
      "city",
      "food",
      "nightlife",
      "fashion",
      "people",
      "nature",
      "sports",
      "technics",
      "transport",
      "dataUri"
    ]
  },
  {
    name: "internet",
    options: [
      "avatar",
      "email",
      "exampleEmail",
      "userName",
      "protocol",
      "url",
      "domainName",
      "domainSuffix",
      "domainWord",
      "ip",
      "ipv6",
      "userAgent",
      "color",
      "mac",
      "password"
    ]
  },
  {
    name: "lorem",
    options: [
      "word",
      "words",
      "sentence",
      "slug",
      "sentences",
      "paragraph",
      "paragraphs",
      "text",
      "lines"
    ]
  },
  {
    name: "name",
    options: [
      "firstName",
      "lastName",
      "findName",
      "jobTitle",
      "prefix",
      "suffix",
      "title",
      "jobDescriptor",
      "jobArea",
      "jobType"
    ]
  },
  {
    name: "phone",
    options: ["phoneNumber", "phoneNumberFormat", "phoneFormats"]
  },
  {
    name: "random",
    options: [
      "number",
      "arrayElement",
      "objectElement",
      "uuid",
      "boolean",
      "word",
      "words",
      "image",
      "locale",
      "alphaNumeric",
      "hexaDecimal"
    ]
  },
  {
    name: "system",
    options: [
      "fileName",
      "commonFileName",
      "mimeType",
      "commonFileType",
      "commonFileExt",
      "fileType",
      "fileExt",
      "directoryPath",
      "filePath",
      "semver"
    ]
  }
];

export default fakerFields;

// "helpers",
// "helpers.randomize",
// "helpers.slugify",
// "helpers.replaceSymbolWithNumber",
// "helpers.replaceSymbols",
// "helpers.shuffle",
// "helpers.mustache",
// "helpers.createCard",
// "helpers.contextualCard",
// "helpers.userCard",
// "helpers.createTransaction",
