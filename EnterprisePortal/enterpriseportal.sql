/*
Navicat MySQL Data Transfer

Source Server         : 3306
Source Server Version : 50022
Source Host           : localhost:3306
Source Database       : enterpriseportal

Target Server Type    : MYSQL
Target Server Version : 50022
File Encoding         : 65001

Date: 2023-11-03 10:40:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `num` int(50) NOT NULL auto_increment,
  `title` varchar(50) collate utf8_unicode_ci default NULL,
  `content` varchar(5000) collate utf8_unicode_ci default NULL,
  `category` int(50) default NULL,
  `cover` varchar(50) collate utf8_unicode_ci default NULL,
  `isPublish` varchar(25) collate utf8_unicode_ci default NULL,
  `editTime` datetime default NULL,
  PRIMARY KEY  (`num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('2', 'test', '<p>test2</p>', '1', '/newsuploads/eaabe5656527ef02d80adf5cbf32868e', '1', '2023-10-21 19:29:46');
INSERT INTO `news` VALUES ('3', 'hello world', '<p>hello world</p>', '1', '/newsuploads/8cbebaf3f2f97d31e986e715745c3ecf', '1', '2023-10-21 19:29:49');
INSERT INTO `news` VALUES ('4', 'test2', '<p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>', '2', '/newsuploads/d503dff0a107722c8553ef2a7052a30e', '1', '2023-10-21 19:27:21');
INSERT INTO `news` VALUES ('7', 'wwwwwww', '<p>wwwwwwwwww</p>', '3', '/newsuploads/e657f8e6a47733a66419a84e44e0a9bb', '1', '2023-10-21 19:29:27');
INSERT INTO `news` VALUES ('8', '特斯拉用户故事', '<p>我和海伦很幸运，拥有三辆特斯拉，一辆Model X，一辆Model S和一辆Roadster。不过，我们在2013年5月购买第一辆Model S时，完全没有料到我们还会在这条路上继续走下去。实际上，特斯拉Model S是我们买过的最贵的一辆汽车。我们之前一直只是把汽车看作是一种交通工具。但是这种看法就要改变了。</p><p><strong>Model S</strong><strong>与杰出的工程设计</strong></p><p>最初令我对特斯拉发生兴趣的是它的工程设计。当我在当地的特斯拉销售店里看到它的电池和传动系统时，我意识到内燃机的设计太过复杂了，完全是一种浪费。特斯拉的工程设计非常简洁：靠一台电动机驱动。它减去了许多无用的部件和内燃机驱动汽车所需的各种系统。特斯拉不仅在相当程度上使可持续运输成为可能，而且还拥有许多优势，例如，即时扭矩、5星安全评级、行动迅捷、底盘重心低、操控性好等等。它被评为有史以来最优秀的汽车可谓实至名归。</p><p><img alt=\"Tesla\" src=\"https://www.tesla.cn/sites/default/files/images/customerstories/Kiker_2.jpg\"/><br/><em>特斯拉门店展示的Model S传动系统</em></p><p><strong>自驾游</strong></p><p>2013年5月，我们迎来了属于我们的全新Model S。它的驾驶体验与汽车杂志评论所描述的完全一致，甚至更好。我们几乎立刻感到短途驾驶已经无法满足我们了。于是，我们参加了一场名为BC 2 BC的电动汽车拉力赛，从不列颠哥伦比亚沿美国西海岸行驶至下加利福尼亚。当时只有旧金山到洛杉矶的途中设有超级充电桩。但我们很快了解到，我们在自家车库用来充电的那种220伏插座在全国大部分房车营地都能找到。这是一场充满了刺激和新鲜感的旅行。每次停下，这辆Model S都会吸引众人目光。这种感觉好极了。整场旅行都令人非常放松舒心，因为没有内燃机引起的噪音、气味和震动。</p><p><img alt=\"Tesla\" src=\"https://www.tesla.cn/sites/default/files/images/customerstories/Kiker_3.jpg\"/><br/><em>我们的Model S在BC 2 BC电动汽车拉力赛期间停靠在火山口湖国家公园</em></p><p>这次经历让我们打定了将来要驾车环游北美的主意。</p><p><img alt=\"Tesla\" src=\"https://www.tesla.cn/sites/default/files/images/customerstories/Kiker_4.jpg\"/><br/><em>在北瀑布国家公园</em></p><p>我们驾驶着特斯拉游览了美国和加拿大的20多个国家公园和历史遗迹。例如班夫、大峡谷、洛基山、约书亚树国家公园等等。在这些旅行中，我们依靠不断扩大的超级充电桩网络为车子充电，能源成本几乎为零。</p><p><img alt=\"Tesla\" src=\"https://www.tesla.cn/sites/default/files/images/customerstories/Kiker_5.jpg\"/><br/><em>在彩绘沙漠国家公园</em></p><p>过去的3年里，我们驾驶着特斯拉行驶了大约7.5万英里。由于一心想要开车游遍全国，我们决定将这辆Model S升级到包含自动驾驶功能的最新版本。我热爱驾驶，尤其喜欢驾驶特斯拉，但是自动驾驶功能非常适合像西雅图到旧金山一日游这样的长距离公路驾驶。最后，我们很快发现驾驶特斯拉电动汽车确实不会带来里程焦虑。如果在本地，哪怕是驾驶一整天，你也只要回家充一晚上电就行了。实际上它比汽油发动汽车更为便利，因为你不用特意跑去加油站了。自驾游时，导航系统会带你找到超级充电桩，估算充电时间，准备出发时它还会向你的手机发送提示。</p><p><strong>汽车展、电动汽车推广和新（二手）特斯拉Roadster</strong></p><p><img alt=\"Tesla\" src=\"https://www.tesla.cn/sites/default/files/images/customerstories/Kiker_6.jpg\"/><br/><em>作为礼物送给海伦的Roadster到了</em></p><p>在我们享受Model S驾驶乐趣的过程中，我们也更深入地了解了驾驶电动汽车对环境、公共健康和经济的积极影响。我们打算与公众分享这些经验。于是，我们参加了一场汽车拉力赛，以加深人们对电动汽车（EV）的认识。此外我们还参加了多次车展，其中包括世界地球日车展和超级跑车车展。在这些车展上，特斯拉吸引了众多参观者前来拍照，\"出镜率\"不亚于法拉利、兰博基尼和保时捷。我们还参加了很多特殊的汽车展，包括美国插电式汽车协会赞助的电动汽车展。该组织致力于提高公众对电动汽车的认识，并取得了一定的成绩。我就是在其中的一次活动上得知，他们的合作创建者正在拍卖一辆特斯拉Roadster，以便为美国插电式汽车协会筹集资金。我很幸运地竞得了这辆车，为一项伟大的事业贡献了一份力量，而且这辆新（二手）Signature Roadster给了海伦一个巨大的惊喜。</p><p><img alt=\"Tesla\" src=\"https://www.tesla.cn/sites/default/files/images/customerstories/Kiker_7.jpg\"/><br/><em>全国电动汽车驾驶周电动汽车展上的Roadster</em></p><p><strong>Model X</strong></p><p>Model S和Roadster的驾驶体验让我们决定永远不再买汽油车了。于是我们加入了等待Model X的大军。</p><blockquote><p>这是一款非常棒的家用汽车。</p></blockquote><p>大约在两个月前，海伦的Model X终于送到了。这是一款非常棒的家用汽车。她最喜欢的功能是那对电动门。它们能毫不费力地自动打开，而当你轻轻踩下制动踏板准备出发时，它们又会自动关闭。驾驶一辆大型的家用汽车而不用费劲去伸手关门，这真的非常便利。我最喜欢的是掠过驾驶员头顶的全景挡风玻璃。作为一个高个子，我感觉自己终于可以一边开车一边好好欣赏一下这个世界了。</p><p>Model S和Model X的无线升级功能非常实用。每隔几个月，汽车就会通过自动升级来解决各种问题、增加新的功能，而且你还不用专门去店里升级。这比普通汽车要好得多，因为你不用再开车去做定期保养和维护。最后我还要提一下Model X的另一个特点，那就是引人注目。只要一打开鹰翼门，就会有一群人过来围观，一边看一边问这问那。</p><p><img alt=\"Tesla\" src=\"https://www.tesla.cn/sites/default/files/images/customerstories/Kiker_8.jpg\"/><br/><em>驾驶特斯拉3年、行驶7.5万英里之后，我们现在又拥有了一辆全新Model X。</em></p>', '2', '/newsuploads/c6d6af3990b61567ca3fa50c16f71e7f', '1', '2023-10-21 19:29:53');
INSERT INTO `news` VALUES ('9', 'test2 牛逼y', '<p>test2 999</p>', '1', '/newsuploads/57bd2852c2618d5902157987cdb667b4', '1', '2023-10-21 19:27:16');
INSERT INTO `news` VALUES ('10', 'test number', '<p>test number</p>', '2', '/newsuploads/4c80c3c94fea07f2da884a5c94695c17', '1', '2023-10-21 19:27:16');
INSERT INTO `news` VALUES ('11', 'vvv', '<p>vvv</p>', '3', '/newsuploads/2c344af2a7c62e9b805e717f323493be', '1', '2023-10-21 19:29:09');
INSERT INTO `news` VALUES ('12', 'SERATO STUDIO 发布', '<p>cjd3000</p>', '1', '/newsuploads/425f8b734c2a9d0bbf17e5f18b96b673', '1', '2023-10-21 19:29:54');

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `pid` int(11) NOT NULL auto_increment,
  `title` varchar(255) collate utf8_unicode_ci default NULL,
  `introduction` varchar(255) collate utf8_unicode_ci default NULL,
  `detail` varchar(255) collate utf8_unicode_ci default NULL,
  `cover` varchar(255) collate utf8_unicode_ci default NULL,
  `editTime` datetime default NULL,
  PRIMARY KEY  (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES ('1', 'cdj3000', 'Pioneer DJ', 'This is the best in the world', '/productsuploads/cf2bb3054ee7ff89a1910bb689789972', '2023-10-19 22:22:33');
INSERT INTO `products` VALUES ('2', 'DJM-A9', 'Pioneer DJ Mixer', 'This is the best for the music', '/productsuploads/6297222a334255b8870c911d88c762ad', '2023-10-19 21:52:35');
INSERT INTO `products` VALUES ('4', 'testttt', 'testttt', 'testttt', '/productsuploads/a653f95238d1ec70b261498ef7ec4a7b', '2023-10-19 21:52:45');
INSERT INTO `products` VALUES ('5', 'test', 'test', 'test', '/productsuploads/adaeb3014e0ee711301e6034e90ff17f', '2023-10-19 21:52:55');
INSERT INTO `products` VALUES ('7', 'aaa', 'aaa', 'aaa', '/productsuploads/179d28f50073008069a08d574267979a', '2023-10-19 22:22:09');
INSERT INTO `products` VALUES ('8', 'bbb', 'bbb', 'bbb', '/productsuploads/c5702774f557669cd2131b369e925cb4', '2023-10-19 22:22:49');
INSERT INTO `products` VALUES ('9', 'ooooo', 'ooooo', 'ooooo', '/productsuploads/3080b6bc722be2003d808cf4c1a3e8b1', '2023-10-20 20:02:01');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL auto_increment,
  `username` varchar(255) collate utf8_unicode_ci default NULL,
  `password` varchar(255) collate utf8_unicode_ci default NULL,
  `gender` varchar(255) collate utf8_unicode_ci default NULL,
  `introduction` varchar(255) collate utf8_unicode_ci default NULL,
  `avatar` varchar(500) collate utf8_unicode_ci default NULL,
  `role` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'admin', '123456', '1', 'im the king hhhhhhhh', '/avataruploads/627d0eeb5d1697b3e977281e41260b96', '1');
INSERT INTO `users` VALUES ('2', 'century', '197878', '1', 'range rover', '/avataruploads/4c0b1676647b50ed2809d7cc3d92b2b0', '1');
INSERT INTO `users` VALUES ('4', '牛逼', '5dsfs', '3', '哈哈哈哈哈哈哈哈哈哈哈', '', '6');
INSERT INTO `users` VALUES ('14', 'lychee', '123456', '0', '我是lychee', '/avataruploads/aeaa46be556cc9f6d295f73abeaf6c29', '2');
INSERT INTO `users` VALUES ('15', '额我确认', 'sdf', '0', 'sgsag', '/avataruploads/eb52fd47ea6563d6817cdbf3065628bd', '2');
INSERT INTO `users` VALUES ('16', 'utuft', 'hjg', '0', 'bn', '/avataruploads/85d4b48763904cbfac8944b116f42572', '2');
INSERT INTO `users` VALUES ('17', 'nonono', 'nonono', '0', 'hihihi', '/avataruploads/b839862d5a17ef2d2412698754afe302', '2');
INSERT INTO `users` VALUES ('18', 'test', '1234', '0', '1234', '/avataruploads/f1982319a61fbcba1b9bd8018628c17b', '2');
INSERT INTO `users` VALUES ('19', 'apple care', '123456', '0', 'apple inc.', '/avataruploads/bec6b83ceafc62bbf920f4ef03462589', '2');
INSERT INTO `users` VALUES ('20', 'spiderman', 'spiderman', '0', 'spiderman', '/avataruploads/6da30347ba3a4970584fd7913a2b6620', '2');
