// 导入 Web3.js 和智能合约 ABI
const Web3 = require('web3');
const contractABI = require('./contractABI.json'); // 替换为你的智能合约 ABI

// 创建 Web3 实例
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'); // 替换为你的 Infura 项目 ID

// 智能合约地址
const contractAddress = '0x123...'; // 替换为你的智能合约地址

// 使用智能合约 ABI 和地址创建智能合约实例
const contract = new web3.eth.Contract(contractABI, contractAddress);

// 获取投票主题和选项
async function getTopics() {
    try {
        // 调用智能合约方法获取投票主题和选项
        const topics = await contract.methods.getTopics().call();
        console.log('Topics:', topics);
        return topics;
    } catch (error) {
        console.error('Error getting topics:', error);
    }
}

// 投票
async function vote(topicId, optionId, address) {
    try {
        // 调用智能合约方法进行投票
        const result = await contract.methods.vote(topicId, optionId).send({ from: address }); // 替换为你的以太坊地址
        console.log('Vote successful:', result);
        return result;
    } catch (error) {
        console.error('Error voting:', error);
    }
}

// 获取投票结果
async function getResults(topicId) {
    try {
        // 调用智能合约方法获取投票结果
        const results = await contract.methods.getResults(topicId).call();
        console.log('Results:', results);
        return results;
    } catch (error) {
        console.error('Error getting results:', error);
    }
}

// 主函数
async function main() {
    // 获取投票主题和选项
    const topics = await getTopics();
    console.log('Topics:', topics);

    // 假设从命令行参数中获取投票参数
    const topicId = parseInt(process.argv[2]);
    const optionId = parseInt(process.argv[3]);
    const address = process.argv[4];

    // 如果有提供足够的参数，则进行投票
    if (!isNaN(topicId) && !isNaN(optionId) && address) {
        await vote(topicId, optionId, address);
    } else {
        console.log('Please provide topicId, optionId, and your Ethereum address as command line arguments to vote.');
    }

    // 获取投票结果
    const results = await getResults(topicId); // 替换为你要查询的主题 ID
    console.log('Results:', results);
}

// 运行主函数
main();
