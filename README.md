# Teavoting
Teavoting 是一个用于在以太坊上进行投票的工具。
## 安装
你可以通过 npm 来安装 Teavoting：
```bash
npm install teavoting
使用
1. 导入 Teavoting
首先，你需要在你的项目中导入 Teavoting：
const Teavoting = require('teavoting');
2. 初始化 Teavoting 实例
然后，你需要初始化 Teavoting 实例，传入你的 Infura 项目 ID 和智能合约地址：
const teavoting = new Teavoting('YOUR_INFURA_PROJECT_ID', 'CONTRACT_ADDRESS');
3. 获取投票主题和选项
你可以使用 getTopics 方法来获取投票主题和选项：
const topics = await teavoting.getTopics();
console.log('Topics:', topics);
4. 进行投票
你可以使用 vote 方法来进行投票，传入主题 ID、选项 ID 和你的以太坊地址：
const topicId = 0;
const optionId = 1;
const address = 'YOUR_ETHEREUM_ADDRESS';
await teavoting.vote(topicId, optionId, address);
5. 获取投票结果
最后，你可以使用 getResults 方法来获取投票结果，传入主题 ID：
const results = await teavoting.getResults(topicId);
console.log('Results:', results);


示例代码
下面是一个完整的示例代码，展示了如何使用 Teavoting：
const Teavoting = require('teavoting');

const teavoting = new Teavoting('YOUR_INFURA_PROJECT_ID', 'CONTRACT_ADDRESS');

async function main() {
    const topics = await teavoting.getTopics();
    console.log('Topics:', topics);

    const topicId = 0;
    const optionId = 1;
    const address = 'YOUR_ETHEREUM_ADDRESS';

    await teavoting.vote(topicId, optionId, address);

    const results = await teavoting.getResults(topicId);
    console.log('Results:', results);
}

main();
注意事项:确保你的以太坊地址有足够的 ETH 用于支付 gas 费用。
