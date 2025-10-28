# Changelog

## 0.1.0-alpha.3 (2025-10-28)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/digitalocean/gradient-typescript/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* add waitForAgentReady helper for agent deployment polling ([#9](https://github.com/digitalocean/gradient-typescript/issues/9)) ([48a9366](https://github.com/digitalocean/gradient-typescript/commit/48a9366dbb8879bb6a4be7b59a6bba26840d50d9))
* knowledge base indexing poller ([#14](https://github.com/digitalocean/gradient-typescript/issues/14)) ([04e35f0](https://github.com/digitalocean/gradient-typescript/commit/04e35f0553c622fe33b422f611bb7f1592346510))
* **knowledge-bases:** add waitForDatabase polling helper ([#8](https://github.com/digitalocean/gradient-typescript/issues/8)) ([12d1af3](https://github.com/digitalocean/gradient-typescript/commit/12d1af3c82962f420eef7160b8ac043aa96087f7))


### Chores

* formatting fixes ([b2388ec](https://github.com/digitalocean/gradient-typescript/commit/b2388ec757d21bdb00365969af5b083ae1e574b0))


### Refactors

* normalize wait-for implementations ([#20](https://github.com/digitalocean/gradient-typescript/issues/20)) ([30419d1](https://github.com/digitalocean/gradient-typescript/commit/30419d1f1b238a5d2fcb4720c9599c66daa78ce9))

## 0.1.0-alpha.2 (2025-10-16)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/digitalocean/gradient-typescript/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** Images generations ([2b2dc1a](https://github.com/digitalocean/gradient-typescript/commit/2b2dc1ab761524a9a4e80d92f627e0777bc72828))
* **api:** Images generations - openai ([6c3d87c](https://github.com/digitalocean/gradient-typescript/commit/6c3d87c4587799d95634709e10d05398a5b5efea))
* **api:** manual updates ([e428407](https://github.com/digitalocean/gradient-typescript/commit/e428407732f68c3958a7a4aefebb16d6fc993ffe))
* **api:** manual updates ([54e9764](https://github.com/digitalocean/gradient-typescript/commit/54e97647408b0713f2788163c8e62950d0978779))


### Performance Improvements

* faster formatting ([8368269](https://github.com/digitalocean/gradient-typescript/commit/83682693c05b0923eda90f309323e79be81f0959))


### Chores

* clean up LICENSING after legal review ([#3](https://github.com/digitalocean/gradient-typescript/issues/3)) ([da51ba0](https://github.com/digitalocean/gradient-typescript/commit/da51ba0ea90a8a938747e1f5500fe78e388046c6))
* do not install brew dependencies in ./scripts/bootstrap by default ([58a58de](https://github.com/digitalocean/gradient-typescript/commit/58a58dee9cef281da36da118e2ac979cd0d755b7))
* **internal:** codegen related update ([caea2ff](https://github.com/digitalocean/gradient-typescript/commit/caea2ff2b2b44b543ede7b06829fbb5a8d0b2694))
* **internal:** fix incremental formatting in some cases ([353630a](https://github.com/digitalocean/gradient-typescript/commit/353630aa9fe2b61a4d4fb04b581e628fe9e5fd3f))
* **internal:** ignore .eslintcache ([49808e2](https://github.com/digitalocean/gradient-typescript/commit/49808e27fd3936c7aaa21c194fc005f7944380b4))
* **internal:** remove .eslintcache ([b318cc0](https://github.com/digitalocean/gradient-typescript/commit/b318cc0a5b59b443357621de22714cf9e893d4a6))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([3c74bff](https://github.com/digitalocean/gradient-typescript/commit/3c74bff79b6e18426e0bc6cb4e586a5996f4640f))
* **internal:** use npm pack for build uploads ([2b378fc](https://github.com/digitalocean/gradient-typescript/commit/2b378fc6255fb2753373564871d0e8442b54497b))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([ffed53e](https://github.com/digitalocean/gradient-typescript/commit/ffed53e3f10f4cf70ce61c65623fc13298200aa8))
* update author ([3dd3c2d](https://github.com/digitalocean/gradient-typescript/commit/3dd3c2d23f3896305077104a7793d7702371843b))
* update github actions ([d678611](https://github.com/digitalocean/gradient-typescript/commit/d6786115dfe34fde95a8317d7f79a8d6aa579a01))

## 0.1.0-alpha.1 (2025-09-12)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/digitalocean/gradient-typescript/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** add gpu droplets ([f772bbe](https://github.com/digitalocean/gradient-typescript/commit/f772bbeff72966c91777dbbd6a1b4eef4ebc315f))
* **api:** add gpu droplets ([e9f32b9](https://github.com/digitalocean/gradient-typescript/commit/e9f32b90c21d6f56e9f1354c3afac7e81f35e6c0))
* **api:** collected updates 8/4 ([2512acd](https://github.com/digitalocean/gradient-typescript/commit/2512acd4c8b2831cdf553cebdc379e6087c5a110))
* **api:** define api links and meta as shared models ([e718dff](https://github.com/digitalocean/gradient-typescript/commit/e718dff5d2c9e8e9b70a665be8fcf0ab254393ec))
* **api:** enable typescript ([074ed6b](https://github.com/digitalocean/gradient-typescript/commit/074ed6b8eeef29ec92c50523d9c801d5f4b633e2))
* **api:** make kwargs match the env vars ([6938951](https://github.com/digitalocean/gradient-typescript/commit/693895157a0f48e67f292f0a3c2b048f25fca206))
* **api:** manual updates ([deb1daf](https://github.com/digitalocean/gradient-typescript/commit/deb1dafa116b729704ef20d3a8a32ac94b926012))
* **api:** manual updates ([f76c65d](https://github.com/digitalocean/gradient-typescript/commit/f76c65d83997e048de1f85cb92a4e9f7e3377225))
* **api:** manual updates ([d380fc4](https://github.com/digitalocean/gradient-typescript/commit/d380fc4f9860c682e42d1b06f8a5050dd2145e18))
* **api:** manual updates ([7dfa331](https://github.com/digitalocean/gradient-typescript/commit/7dfa33182e7b9ad09aeca1fe065527f7ef8a1780))
* **api:** manual updates ([8841ba0](https://github.com/digitalocean/gradient-typescript/commit/8841ba0d0ac8117f8b1b08852e87b459f1321069))
* **api:** manual updates ([c5f3842](https://github.com/digitalocean/gradient-typescript/commit/c5f3842aaccf8966b638e90ad611ff404c37f72b))
* **api:** manual updates ([e3a6416](https://github.com/digitalocean/gradient-typescript/commit/e3a6416da84e6719b3f1e5c47c77e89b6b36c226))
* **api:** manual updates ([d0cef1c](https://github.com/digitalocean/gradient-typescript/commit/d0cef1c23c580334ac9becee1e77410f562e720a))
* **api:** manual updates ([94489fa](https://github.com/digitalocean/gradient-typescript/commit/94489facf915f1e434ffb2e705dda92e7c257f41))
* **api:** manual updates ([f40ea72](https://github.com/digitalocean/gradient-typescript/commit/f40ea72d67088f8a9db3fef12eb5769b4170e8e6))
* **api:** manual updates ([401c252](https://github.com/digitalocean/gradient-typescript/commit/401c252c680bccf0e33c040b64d3d1e2f6747bb8))
* **api:** manual updates ([b9fc035](https://github.com/digitalocean/gradient-typescript/commit/b9fc03555fd70676fff963a77833f740401d1fac))
* **api:** manual updates ([7c21452](https://github.com/digitalocean/gradient-typescript/commit/7c21452e633e28df1cd15bb913f7fbc62bf76b93))
* **api:** manual updates ([d1e0966](https://github.com/digitalocean/gradient-typescript/commit/d1e09664b5013618516c3722ff537f75cd9ef4ac))
* **api:** manual updates ([22be80e](https://github.com/digitalocean/gradient-typescript/commit/22be80e8d8b57f770a5e3c6d5c6bfa923d8f052c))
* **api:** manual updates ([a80e30e](https://github.com/digitalocean/gradient-typescript/commit/a80e30e1260c0df351841471c193e06bae5fc49f))
* **api:** manual updates ([b10da1f](https://github.com/digitalocean/gradient-typescript/commit/b10da1f346a43be6b8af75c86424db2b7d17e5ec))
* **api:** manual updates ([487a222](https://github.com/digitalocean/gradient-typescript/commit/487a22249c8d5c2f6447e6cbcf64d9a2648384b7))
* **api:** remove GRADIENTAI env vars ([58f3479](https://github.com/digitalocean/gradient-typescript/commit/58f347925628416369464041b05e936c4870bdfc))
* **api:** rename environment variables ([6640346](https://github.com/digitalocean/gradient-typescript/commit/6640346684436310caa8415b67d3a8e9b32201df))
* **api:** share chat completion chunk model between chat and agent.chat ([3803591](https://github.com/digitalocean/gradient-typescript/commit/3803591716d2e97022d807e8a77c35beb74e084d))
* **api:** update OpenAI spec and add endpoint/smodels ([5c8b7ad](https://github.com/digitalocean/gradient-typescript/commit/5c8b7adee37a561f3c7039c9511e606a6afeb2ef))
* **api:** update to package gradient ([b41e3e0](https://github.com/digitalocean/gradient-typescript/commit/b41e3e0aa95c52c2632c36df174db541da2944f5))
* **api:** update via SDK Studio ([66256ea](https://github.com/digitalocean/gradient-typescript/commit/66256ea55c165e9acf5b3eb1041d38783aa5838f))
* **api:** update via SDK Studio ([ed3a886](https://github.com/digitalocean/gradient-typescript/commit/ed3a886d1bcd1ba619c4cf82c6947f3443c325f4))
* **api:** update via SDK Studio ([2d4e9ab](https://github.com/digitalocean/gradient-typescript/commit/2d4e9abaeea04ad12bd0f96c864ebb8b9bb67057))
* **api:** update via SDK Studio ([2a55dad](https://github.com/digitalocean/gradient-typescript/commit/2a55dade2e904d88f9ba56b21ed4133e324d8b4f))
* **api:** update via SDK Studio ([8bc0416](https://github.com/digitalocean/gradient-typescript/commit/8bc0416f4b495b85bb9d16399f042fc33cb8a267))
* **api:** update via SDK Studio ([a97caac](https://github.com/digitalocean/gradient-typescript/commit/a97caaccf71e9bbf1e2f4d1134ee65df6016261f))
* **api:** update via SDK Studio ([bbe4664](https://github.com/digitalocean/gradient-typescript/commit/bbe4664863ed8b8536e98e678fd5d902b89d3fb3))
* **api:** update via SDK Studio ([ffece9c](https://github.com/digitalocean/gradient-typescript/commit/ffece9c5a74ec9d49260bcddeb08d16d2453a249))
* **api:** update via SDK Studio ([4dc906c](https://github.com/digitalocean/gradient-typescript/commit/4dc906c9ec3e8c051a58dd45d4f19a660dd1fa0c))
* **api:** update via SDK Studio ([24c6ed7](https://github.com/digitalocean/gradient-typescript/commit/24c6ed7a6025fbac2bff8d15b8cac28684afd2d1))
* **api:** update via SDK Studio ([d511e36](https://github.com/digitalocean/gradient-typescript/commit/d511e36890a42c6375d8b274f06e8efe9d0cfb2f))
* **api:** update via SDK Studio ([925ea7d](https://github.com/digitalocean/gradient-typescript/commit/925ea7d77db67aca7d8ddd762ae25cd2de5ed56f))
* **api:** update via SDK Studio ([b7c8527](https://github.com/digitalocean/gradient-typescript/commit/b7c85272ebc3896afc6c8ebb75a3e93a36789aa0))
* **api:** update via SDK Studio ([23fdd6f](https://github.com/digitalocean/gradient-typescript/commit/23fdd6f22df22bb7d4b95c295804c40ec45333ad))
* **api:** update via SDK Studio ([152d7be](https://github.com/digitalocean/gradient-typescript/commit/152d7be0ac4225b69e2526c63ead992c32d581d4))
* **api:** update via SDK Studio ([0e90f74](https://github.com/digitalocean/gradient-typescript/commit/0e90f741c95b4021f808f881515e950662cf4b92))
* **api:** update via SDK Studio ([6e0b74a](https://github.com/digitalocean/gradient-typescript/commit/6e0b74ac8a8e5a65c67b2a44255c8ac30d138af7))
* **api:** update via SDK Studio ([13fb500](https://github.com/digitalocean/gradient-typescript/commit/13fb5007b2f9ef7086ab85419ef5ee0c63aaea3b))
* **api:** update via SDK Studio ([92ca5df](https://github.com/digitalocean/gradient-typescript/commit/92ca5df1c3b09b957293bb11fb77c4447e9e5fdc))
* **api:** update via SDK Studio ([2917ddb](https://github.com/digitalocean/gradient-typescript/commit/2917ddb3070497bf521cf9840549327daad63e1e))
* **api:** update via SDK Studio ([7eb007a](https://github.com/digitalocean/gradient-typescript/commit/7eb007aa1cd331e5bd7d5fdd0957a7a0cc200fed))
* **api:** update via SDK Studio ([ccc3c7c](https://github.com/digitalocean/gradient-typescript/commit/ccc3c7c15d1e13317ce55c7adf15cd277b77dbc4))
* **api:** update via SDK Studio ([eed411d](https://github.com/digitalocean/gradient-typescript/commit/eed411d7fd2abee63cd89efbd8821e225d65aed4))
* **api:** update via SDK Studio ([03e423c](https://github.com/digitalocean/gradient-typescript/commit/03e423c2fdd40427a8626f764442d673b096f96a))
* **api:** update via SDK Studio ([b2fab92](https://github.com/digitalocean/gradient-typescript/commit/b2fab9261b093a53bf3c37f2e0c84c1f662651f7))
* **api:** update via SDK Studio ([68d87cc](https://github.com/digitalocean/gradient-typescript/commit/68d87ccd177ba3b4831746e9900c988aaa2e0870))
* **api:** update via SDK Studio ([f432058](https://github.com/digitalocean/gradient-typescript/commit/f432058cfe8a8ed22420811893890697a1b92693))
* **api:** update via SDK Studio ([05b4163](https://github.com/digitalocean/gradient-typescript/commit/05b4163602eff4d4190c350bac818911ba6e887f))
* **api:** update via SDK Studio ([3e0a84a](https://github.com/digitalocean/gradient-typescript/commit/3e0a84ae89b502cf7f119c65e235d9e1e8207929))
* **api:** update via SDK Studio ([a1b026d](https://github.com/digitalocean/gradient-typescript/commit/a1b026db37265536b765b7f02fde4a7f38d86c33))
* **api:** update via SDK Studio ([7b9528b](https://github.com/digitalocean/gradient-typescript/commit/7b9528b432069d75e0f4629dd71068bc1e3b9f7d))
* **api:** update via SDK Studio ([84a4e08](https://github.com/digitalocean/gradient-typescript/commit/84a4e0860852fe0dfd62049a110430348a28b85d))
* **api:** update via SDK Studio ([0a9ca71](https://github.com/digitalocean/gradient-typescript/commit/0a9ca71803fb88ae1463b6c32c6fcda7193ff113))
* **api:** update via SDK Studio ([17c711e](https://github.com/digitalocean/gradient-typescript/commit/17c711e56a533d2e618552b04969ff8bf2c1aff2))
* **api:** update via SDK Studio ([776ea44](https://github.com/digitalocean/gradient-typescript/commit/776ea449af70dab2e9f2befa3b1faf478a135a88))
* **api:** update via SDK Studio ([f2ea88f](https://github.com/digitalocean/gradient-typescript/commit/f2ea88fa322c037c9bebf17679e696da0b28c2f3))
* **api:** update via SDK Studio ([b6b96cb](https://github.com/digitalocean/gradient-typescript/commit/b6b96cbbc54fb26cc3cabb0eceb168c7a798ceab))
* **client:** add agent_domain option ([25857d4](https://github.com/digitalocean/gradient-typescript/commit/25857d47d4efc13aff14ea8a4746535c2812c3c9))
* **client:** add support for endpoint-specific base URLs ([d89b7fe](https://github.com/digitalocean/gradient-typescript/commit/d89b7febc42574f6137870cfe2d35d4947968c09))
* **client:** setup streaming ([d4d70b7](https://github.com/digitalocean/gradient-typescript/commit/d4d70b7814940b0e3b62428c03e978d050b0fb73))
* **mcp:** add code execution tool ([ec6d234](https://github.com/digitalocean/gradient-typescript/commit/ec6d2343946f2dee13fb46fb114f7283134f620b))
* **mcp:** add logging when environment variable is set ([f686498](https://github.com/digitalocean/gradient-typescript/commit/f686498437345c33e8c93c674e1ac68df3a12e64))
* **mcp:** add option to infer mcp client ([7035ebd](https://github.com/digitalocean/gradient-typescript/commit/7035ebd82e4ae5183b4649d1f6ee89ff7a8338f7))
* **mcp:** add unix socket option for remote MCP ([a4802fa](https://github.com/digitalocean/gradient-typescript/commit/a4802fadb242d3907f7805e6e64f817b0df63c65))
* **mcp:** allow setting logging level ([abdcd50](https://github.com/digitalocean/gradient-typescript/commit/abdcd5033d16f23f133ad895663a772efa14b78c))
* **mcp:** expose client options in `streamableHTTPApp` ([278e5d3](https://github.com/digitalocean/gradient-typescript/commit/278e5d3bc7d4bef27b52f5ed371ef2d242805b25))
* **mcp:** parse query string as mcp client options in mcp server ([3b19c09](https://github.com/digitalocean/gradient-typescript/commit/3b19c0907c0e58b2069978b2157268ab92dfc6bd))
* **mcp:** remote server with passthru auth ([b120f99](https://github.com/digitalocean/gradient-typescript/commit/b120f9944bfc69416c23627073c690a4600f9f19))
* **mcp:** support filtering tool results by a jq expression ([8c5c9a8](https://github.com/digitalocean/gradient-typescript/commit/8c5c9a835b34341a946d4d5a64da319bbb186be6))


### Bug Fixes

* avoid console usage ([290a7d4](https://github.com/digitalocean/gradient-typescript/commit/290a7d4c698cd2e1d0fc883bfa59a1319562ee84))
* **client:** explicitly copy fetch in withOptions ([21a6e40](https://github.com/digitalocean/gradient-typescript/commit/21a6e40d0954116159b5d2896e8d7d4d7d376b6a))
* **client:** get fetchOptions type more reliably ([9387d5a](https://github.com/digitalocean/gradient-typescript/commit/9387d5a801229d729ca5ad691d52b39ddaad0891))
* coerce nullable values to undefined ([4fd8c14](https://github.com/digitalocean/gradient-typescript/commit/4fd8c147f1cf27e642326464c20bc876be9c8565))
* **mcp:** avoid sending `jq_filter` to base API ([73ed7d0](https://github.com/digitalocean/gradient-typescript/commit/73ed7d0766b5e96ed595964d38a68db2bcb0ed47))
* **mcp:** fix bug in header handling ([506bc3d](https://github.com/digitalocean/gradient-typescript/commit/506bc3dde42b290f513bd0924fce6439ce6dfbb5))
* **mcp:** fix query options parsing ([7de5e1b](https://github.com/digitalocean/gradient-typescript/commit/7de5e1b4545fa643f5691f7b225d4a594c153a76))
* **mcp:** fix tool description of jq_filter ([855536c](https://github.com/digitalocean/gradient-typescript/commit/855536c6a5ec8658d7a4957ed27d7de0fe84edd0))
* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([19f2392](https://github.com/digitalocean/gradient-typescript/commit/19f239240c2ddb63b455e7ed599e9c8e687e4d19))
* **mcp:** include required section for top-level properties and support naming transformations ([efeaaab](https://github.com/digitalocean/gradient-typescript/commit/efeaaabb6c643dc2412dc967726f48aeeaeab9a6))
* **mcp:** relax input type for asTextContextResult ([9223bbd](https://github.com/digitalocean/gradient-typescript/commit/9223bbda1d05cb7fa878f84dca575d6bf19f1ed8))
* **mcp:** reverse validJson capability option and limit scope ([191d4e7](https://github.com/digitalocean/gradient-typescript/commit/191d4e740cef98158f78536ab2e6a20cb63ae578))
* **mcp:** support jq filtering on cloudflare workers ([786f8fc](https://github.com/digitalocean/gradient-typescript/commit/786f8fc7c81c2977930e7b5ab2190851ffc12f2e))
* **mcp:** update dxt manifest.json files ([a962d4f](https://github.com/digitalocean/gradient-typescript/commit/a962d4f9e24d83af4a78f1fc0c543e2ea17ef8dc))
* publish script — handle NPM errors correctly ([c7e5e7b](https://github.com/digitalocean/gradient-typescript/commit/c7e5e7b4a8c37124b69b86507185d63cb398a7a1))


### Chores

* add docs to RequestOptions type ([036287b](https://github.com/digitalocean/gradient-typescript/commit/036287bc3885b0433beaf77618928a660fb2edf9))
* add package to package.json ([538e3c5](https://github.com/digitalocean/gradient-typescript/commit/538e3c5f8b591888bc659fec013af2aa606bdf4d))
* avoid type error in certain environments ([45fed34](https://github.com/digitalocean/gradient-typescript/commit/45fed344336794a7e1e2a845992f3ee6663f8989))
* change publish docs url ([e86c5a5](https://github.com/digitalocean/gradient-typescript/commit/e86c5a55bdf78793ef24b97dd931874798a7483b))
* ci build action ([a456009](https://github.com/digitalocean/gradient-typescript/commit/a456009e30d8fce75eeec49e924f4b3af2a98661))
* **ci:** enable for pull requests ([188ca97](https://github.com/digitalocean/gradient-typescript/commit/188ca97e3a88fa8e0c1823ed954735d3a33a164c))
* **ci:** only run for pushes and fork pull requests ([2103968](https://github.com/digitalocean/gradient-typescript/commit/21039682661b4dfcdfaf4783eb385be82f149bc9))
* **client:** improve path param validation ([83de9b1](https://github.com/digitalocean/gradient-typescript/commit/83de9b182e9fe8b083691253ed8563bf17e65aa0))
* **client:** qualify global Blob ([22a3568](https://github.com/digitalocean/gradient-typescript/commit/22a356887cc2c3b3d44e094d4c98fb3aff96609a))
* **client:** refactor imports ([499fe31](https://github.com/digitalocean/gradient-typescript/commit/499fe319c5689435602131cbd56c7ded5a05d23f))
* configure new SDK language ([dc303ec](https://github.com/digitalocean/gradient-typescript/commit/dc303ecd85799000c8dd285bc7cd4b6d443f1def))
* configure new SDK language ([bd9a283](https://github.com/digitalocean/gradient-typescript/commit/bd9a283c2a4ae505904c9b77865018c870ee2806))
* **deps:** update dependency @types/node to v20.17.58 ([06afe5e](https://github.com/digitalocean/gradient-typescript/commit/06afe5ec42b85ce579ee80eee8bb89160957bf2c))
* **internal:** add pure annotations, make base APIResource abstract ([888b27b](https://github.com/digitalocean/gradient-typescript/commit/888b27b1af7509b21ef6e535fc6cc99084cfecfb))
* **internal:** codegen related update ([823cfc3](https://github.com/digitalocean/gradient-typescript/commit/823cfc354efdf5703d1e70f65a1df3e95ff1cce7))
* **internal:** codegen related update ([df8841a](https://github.com/digitalocean/gradient-typescript/commit/df8841ab823cf35cb7d98004f5a1e7818ee7d311))
* **internal:** codegen related update ([f198423](https://github.com/digitalocean/gradient-typescript/commit/f198423050c01d22c194f659420c0cd3ed288d6b))
* **internal:** codegen related update ([b773ac0](https://github.com/digitalocean/gradient-typescript/commit/b773ac0674091104e38011573006a881df5f3746))
* **internal:** codegen related update ([c7a1e62](https://github.com/digitalocean/gradient-typescript/commit/c7a1e6243c06aef5051c5ae5e839d6c95fe61520))
* **internal:** codegen related update ([7bf54b2](https://github.com/digitalocean/gradient-typescript/commit/7bf54b20d3f9a51b1eb0260adbacf593cd929e9f))
* **internal:** codegen related update ([f856263](https://github.com/digitalocean/gradient-typescript/commit/f856263877d62a3f5344d3596a406452a5745a81))
* **internal:** formatting change ([107664a](https://github.com/digitalocean/gradient-typescript/commit/107664a4ef8e8fbd4ae360f42132f8d196297ecf))
* **internal:** make mcp-server publishing public by defaut ([124c04e](https://github.com/digitalocean/gradient-typescript/commit/124c04e096ab7732c0a36546e1bd1c913b4428f0))
* **internal:** move publish config ([fe04f40](https://github.com/digitalocean/gradient-typescript/commit/fe04f40ef77e5525c210ae78dc6e519d1ae772fb))
* **internal:** refactor array check ([7fe07d8](https://github.com/digitalocean/gradient-typescript/commit/7fe07d838840c94a7b41fb57cb5817be0e14ab76))
* **internal:** remove redundant imports config ([a5dc058](https://github.com/digitalocean/gradient-typescript/commit/a5dc0580924984abdae3d2af99d1a81ca8f61d54))
* **internal:** update comment in script ([19b47ea](https://github.com/digitalocean/gradient-typescript/commit/19b47eadcd18af1280a1bcd852cf26ec36900331))
* **internal:** update global Error reference ([c284df6](https://github.com/digitalocean/gradient-typescript/commit/c284df6a5527bfc8a955c136c23835d1d7a798b7))
* make some internal functions async ([246aa3b](https://github.com/digitalocean/gradient-typescript/commit/246aa3b1d2d3696fac087b00f8d60bf861b72b36))
* **mcp:** add cors to oauth metadata route ([c11ef25](https://github.com/digitalocean/gradient-typescript/commit/c11ef2527decaa11a82b502aada3d1f5026c38db))
* **mcp:** document remote server in README.md ([3eb386a](https://github.com/digitalocean/gradient-typescript/commit/3eb386ab9ab8c35b637f45bb4bd2f633cd13e491))
* **mcp:** formatting ([29aedab](https://github.com/digitalocean/gradient-typescript/commit/29aedabcc65d83623ad8a411c32fc79e689b1861))
* **mcp:** minor cleanup of types and package.json ([0ca18f3](https://github.com/digitalocean/gradient-typescript/commit/0ca18f39b257a466585126a74997ed05c29eecca))
* **mcp:** refactor streamable http transport ([ed978c7](https://github.com/digitalocean/gradient-typescript/commit/ed978c73c3e6e272eb444754f32fb5a4e65538e1))
* **mcp:** rework imports in tools ([b55308d](https://github.com/digitalocean/gradient-typescript/commit/b55308d3636b0cdb2b4e5a6e6a5288be1c46a28e))
* **mcp:** update package.json ([31b5b66](https://github.com/digitalocean/gradient-typescript/commit/31b5b66c903aade77723f3c30868b56524bb3b30))
* **mcp:** update README ([ffe6539](https://github.com/digitalocean/gradient-typescript/commit/ffe65398617581c4b55e8098cb1616c79eb12299))
* **mcp:** update types ([29cda0b](https://github.com/digitalocean/gradient-typescript/commit/29cda0ba1926a39a642a8e703c3f284ab39b73f5))
* Move model providers ([d0cef1c](https://github.com/digitalocean/gradient-typescript/commit/d0cef1c23c580334ac9becee1e77410f562e720a))
* **readme:** update badges ([8d67c06](https://github.com/digitalocean/gradient-typescript/commit/8d67c068eabf4d4cae4b5001777f00009ec05dc5))
* **readme:** use better example snippet for undocumented params ([242083a](https://github.com/digitalocean/gradient-typescript/commit/242083afd27643693ae030f487121c19b1a4e55e))
* **ts:** reorder package.json imports ([5b21f0b](https://github.com/digitalocean/gradient-typescript/commit/5b21f0bfa1b09cea2f5a21a02fbad438aea730b8))
* update @stainless-api/prism-cli to v5.15.0 ([9197a69](https://github.com/digitalocean/gradient-typescript/commit/9197a6936097f86cb2d9a0f48df240471f44b07e))
* update CI script ([0922a6e](https://github.com/digitalocean/gradient-typescript/commit/0922a6ed953b890991b49e0c48ca5b3362cc9598))
* update SDK settings ([d90e863](https://github.com/digitalocean/gradient-typescript/commit/d90e863d41bab7555a1bd31426e7d99bd5d3a7d6))
* update SDK settings ([b57725c](https://github.com/digitalocean/gradient-typescript/commit/b57725c9422b13ff65458698db2371e70c7ea8de))
* update SDK settings ([df1afd0](https://github.com/digitalocean/gradient-typescript/commit/df1afd09796c208dbe32210a0c590fd968d510b1))


### Refactors

* **types:** replace Record with mapped types ([bc4ebfb](https://github.com/digitalocean/gradient-typescript/commit/bc4ebfb0be0223c440b4494847cbaae30eb97758))
