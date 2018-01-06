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
      { name: "color", value: "commerce.color" },
      { name: "department", value: "commerce.department" },
      { name: "productName", value: "commerce.productName" },
      { name: "price", value: "commerce.price" },
      { name: "productAdjective", value: "commerce.productAdjective" },
      { name: "productMaterial", value: "commerce.productMaterial" },
      { name: "product", value: "commerce.product" }
    ]
  },
  {
    name: "company",
    options: [
      { name: "suffixes", value: "company.suffixes" },
      { name: "companyName", value: "company.companyName" },
      { name: "companySuffix", value: "company.companySuffix" },
      { name: "catchPhrase", value: "company.catchPhrase" },
      { name: "bs", value: "company.bs" },
      { name: "catchPhraseAdjective", value: "company.catchPhraseAdjective" },
      { name: "catchPhraseDescriptor", value: "company.catchPhraseDescriptor" },
      { name: "catchPhraseNoun", value: "company.catchPhraseNoun" },
      { name: "bsAdjective", value: "company.bsAdjective" },
      { name: "bsBuzz", value: "company.bsBuzz" },
      { name: "bsNoun", value: "company.bsNoun" }
    ]
  },
  {
    name: "database",
    options: [
      { name: "column", value: "database.column" },
      { name: "type", value: "database.type" },
      { name: "collation", value: "database.collation" },
      { name: "engine", value: "database.engine" }
    ]
  },
  {
    name: "date",
    options: [
      { name: "past", value: "date.past" },
      { name: "future", value: "date.future" },
      { name: "between", value: "date.between" },
      { name: "recent", value: "date.recent" },
      { name: "soon", value: "date.soon" },
      { name: "month", value: "date.month" },
      { name: "weekday", value: "date.weekday" }
    ]
  },
  {
    name: "finance",
    options: [
      { name: "account", value: "finance.account" },
      { name: "accountName", value: "finance.accountName" },
      { name: "mask", value: "finance.mask" },
      { name: "amount", value: "finance.amount" },
      { name: "transactionType", value: "finance.transactionType" },
      { name: "currencyCode", value: "finance.currencyCode" },
      { name: "currencyName", value: "finance.currencyName" },
      { name: "currencySymbol", value: "finance.currencySymbol" },
      { name: "bitcoinAddress", value: "finance.bitcoinAddress" },
      { name: "ethereumAddress", value: "finance.ethereumAddress" },
      { name: "iban", value: "finance.iban" },
      { name: "bic", value: "finance.bic" }
    ]
  },
  {
    name: "hacker",
    options: [
      { name: "abbreviation", value: "hacker.abbreviation" },
      { name: "adjective", value: "hacker.adjective" },
      { name: "noun", value: "hacker.noun" },
      { name: "verb", value: "hacker.verb" },
      { name: "ingverb", value: "hacker.ingverb" },
      { name: "phrase", value: "hacker.phrase" }
    ]
  },
  {
    name: "image",
    options: [
      { name: "image", value: "image.image" },
      { name: "avatar", value: "image.avatar" },
      { name: "imageUrl", value: "image.imageUrl" },
      { name: "abstract", value: "image.abstract" },
      { name: "animals", value: "image.animals" },
      { name: "business", value: "image.business" },
      { name: "cats", value: "image.cats" },
      { name: "city", value: "image.city" },
      { name: "food", value: "image.food" },
      { name: "nightlife", value: "image.nightlife" },
      { name: "fashion", value: "image.fashion" },
      { name: "people", value: "image.people" },
      { name: "nature", value: "image.nature" },
      { name: "sports", value: "image.sports" },
      { name: "technics", value: "image.technics" },
      { name: "transport", value: "image.transport" },
      { name: "dataUri", value: "image.dataUri" }
    ]
  },
  {
    name: "internet",
    options: [
      { name: "avatar", value: "internet.avatar" },
      { name: "email", value: "internet.email" },
      { name: "exampleEmail", value: "internet.exampleEmail" },
      { name: "userName", value: "internet.userName" },
      { name: "protocol", value: "internet.protocol" },
      { name: "url", value: "internet.url" },
      { name: "domainName", value: "internet.domainName" },
      { name: "domainSuffix", value: "internet.domainSuffix" },
      { name: "domainWord", value: "internet.domainWord" },
      { name: "ip", value: "internet.ip" },
      { name: "ipv6", value: "internet.ipv6" },
      { name: "userAgent", value: "internet.userAgent" },
      { name: "color", value: "internet.color" },
      { name: "mac", value: "internet.mac" },
      { name: "password", value: "internet.password" }
    ]
  },
  {
    name: "lorem",
    options: [
      { name: "word", value: "lorem.word" },
      { name: "words", value: "lorem.words" },
      { name: "sentence", value: "lorem.sentence" },
      { name: "slug", value: "lorem.slug" },
      { name: "sentences", value: "lorem.sentences" },
      { name: "paragraph", value: "lorem.paragraph" },
      { name: "paragraphs", value: "lorem.paragraphs" },
      { name: "text", value: "lorem.text" },
      { name: "lines", value: "lorem.lines" }
    ]
  },
  {
    name: "name",
    options: [
      { name: "firstName", value: "name.firstName" },
      { name: "lastName", value: "name.lastName" },
      { name: "findName", value: "name.findName" },
      { name: "jobTitle", value: "name.jobTitle" },
      { name: "prefix", value: "name.prefix" },
      { name: "suffix", value: "name.suffix" },
      { name: "title", value: "name.title" },
      { name: "jobDescriptor", value: "name.jobDescriptor" },
      { name: "jobArea", value: "name.jobArea" },
      { name: "jobType", value: "name.jobType" }
    ]
  },
  {
    name: "phone",
    options: [
      { name: "phoneNumber", value: "phone.phoneNumber" },
      { name: "phoneNumberFormat", value: "phone.phoneNumberFormat" },
      { name: "phoneFormats", value: "phone.phoneFormat" }
    ]
  },
  {
    name: "random",
    options: [
      { name: "number", value: "random.number" },
      { name: "arrayElement", value: "random.arrayElement" },
      { name: "objectElement", value: "random.objectElement" },
      { name: "uuid", value: "random.uuid" },
      { name: "boolean", value: "random.boolean" },
      { name: "word", value: "random.word" },
      { name: "words", value: "random.words" },
      { name: "image", value: "random.image" },
      { name: "locale", value: "random.locale" },
      { name: "alphaNumeric", value: "random.alphaNumeric" },
      { name: "hexaDecimal", value: "random.hexaDecimal" }
    ]
  },
  {
    name: "system",
    options: [
      { name: "fileName", value: "system.fileName" },
      { name: "commonFileName", value: "system.commonFileName" },
      { name: "mimeType", value: "system.mimeType" },
      { name: "commonFileType", value: "system.commonFileType" },
      { name: "commonFileExt", value: "system.commonFileExt" },
      { name: "fileType", value: "system.fileType" },
      { name: "fileExt", value: "system.fileExt" },
      { name: "directoryPath", value: "system.directoryPath" },
      { name: "filePath", value: "system.filePath" },
      { name: "semver", value: "system.semver" }
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
