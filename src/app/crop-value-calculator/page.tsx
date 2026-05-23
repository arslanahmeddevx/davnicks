"use client";

import React, { useState, useMemo } from "react";
import { Search, ChevronDown, Copy } from "lucide-react";

// Placeholder data matching images
const crops = [
  { name: "Ackee", value: 88888, icon: "https://tr.rbxcdn.com/180DAY-88249d8dd72740fc663c5378afe2fd03/150/150/Image/Png/noFilter" },
  { name: "Acorn", value: 123123, icon: "https://tr.rbxcdn.com/180DAY-65cf88077120f9ed066d3d1cb81678ed/150/150/Image/Png/noFilter" },
  { name: "Acorn Squash", value: 15555, icon: "https://tr.rbxcdn.com/180DAY-1b8c68d94e58b79ade2aefdb735fe0df/150/150/Image/Png/noFilter" },
  { name: "Aetherfruit", value: 100000, icon: "https://tr.rbxcdn.com/180DAY-0f343800bfb6909458fa928fd504aa02/150/150/Image/Png/noFilter" },
  { name: "Akebi", value: 40500, icon: "https://tr.rbxcdn.com/180DAY-37a415d93014fd4b86050b0c12a4cf40/150/150/Image/Png/noFilter" },
  { name: "Alien Apple", value: 1000000, icon: "https://tr.rbxcdn.com/180DAY-35a39de6a2a21f4a3bd2d004c3d31e6e/150/150/Image/Png/noFilter" },
  { name: "Aloe Vera", value: 69000, icon: "https://tr.rbxcdn.com/180DAY-8fd3d7bc4c835bac8cba5e2e90b74be2/150/150/Image/Png/noFilter" },
  { name: "Amazon Feather Fern", value: 125125, icon: "https://tr.rbxcdn.com/180DAY-6058575437578a3227447f59e420fe42/150/150/Image/Png/noFilter" },
  { name: "Amber Flower", value: 1000000, icon: "https://tr.rbxcdn.com/180DAY-e2e7f1014bf9805c8c4cdf4027035ec5/150/150/Image/Png/noFilter" },
  { name: "Amber Spine", value: 55000, icon: "https://tr.rbxcdn.com/180DAY-9017d017c1686d075f294ed214efe917/150/150/Image/Png/noFilter" },
  { name: "Ambercomb", value: 66660, icon: "https://tr.rbxcdn.com/180DAY-2a90919220af44d91ac79d978d832ae0/150/150/Image/Png/noFilter" },
  { name: "Amberfruit Shrub", value: 40500, icon: "https://tr.rbxcdn.com/180DAY-7d1743cac270312888abfcc225b880b4/150/150/Image/Png/noFilter" },
  { name: "Amberheart", value: 175000, icon: "https://tr.rbxcdn.com/180DAY-36fb3b5deb69c770372474250052e4f7/150/150/Image/Png/noFilter" },
  { name: "Antlerbloom", value: 55000, icon: "https://tr.rbxcdn.com/180DAY-09fdac562d0279e10d6757e9e0eea0a8/150/150/Image/Png/noFilter" },
  { name: "Apple", value: 275, icon: "https://tr.rbxcdn.com/180DAY-6a8d9fb69a8310ba8418a975ccc17336/150/150/Image/Png/noFilter" },
  { name: "Aqua Lily", value: 20, icon: "https://tr.rbxcdn.com/180DAY-522fac60f74ca88b3646236f25444366/150/150/Image/Png/noFilter" },
  { name: "Archling", value: 20, icon: "https://tr.rbxcdn.com/180DAY-0e50a785e9dbffabd68eda09c39e66bf/150/150/Image/Png/noFilter" },
  { name: "Artichoke", value: 30000, icon: "https://tr.rbxcdn.com/180DAY-c7fcc6dc44ca431f824091269c15af25/150/150/Image/Png/noFilter" },
  { name: "Asteris", value: 125000, icon: "https://tr.rbxcdn.com/180DAY-557bc3f13d2581604ebb5eb3abefae24/150/150/Image/Png/noFilter" },
  { name: "Auburn Pine", value: 73555, icon: "https://tr.rbxcdn.com/180DAY-d8ef7b461f8b210e49807114b89a7744/150/150/Image/Png/noFilter" },
  { name: "Aura Flora", value: 29000, icon: "https://tr.rbxcdn.com/180DAY-1e81c3ffddbed64e92b5da32300f6e38/150/150/Image/Png/noFilter" },
  { name: "Aurora Vine", value: 120000, icon: "https://tr.rbxcdn.com/180DAY-b81607b74e211c07ce65b4ba1ef482be/150/150/Image/Png/noFilter" },
  { name: "Autumn Shroom", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-ad31e42842940084a18c1fb7f3154ce6/150/150/Image/Png/noFilter" },
  { name: "Avocado", value: 350, icon: "https://tr.rbxcdn.com/180DAY-65605a4c96880743567d3eb3d7357c8f/150/150/Image/Png/noFilter" },
  { name: "Badlands Pepper", value: 45000, icon: "https://tr.rbxcdn.com/180DAY-1a6d80c138a6882077ef9a94aa1213d7/150/150/Image/Png/noFilter" },
  { name: "Bamboo", value: 4000, icon: "https://tr.rbxcdn.com/180DAY-5b4dd4975d8be0045af865e020544b2a/150/150/Image/Png/noFilter" },
  { name: "Bamboo Tree", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-eef775877b11347bef93a3df8d33f4b0/150/150/Image/Png/noFilter" },
  { name: "Banana", value: 1750, icon: "https://tr.rbxcdn.com/180DAY-9ea1e955f8133c467d53e15e53f6acaa/150/150/Image/Png/noFilter" },
  { name: "Banana Orchid", value: 24000, icon: "https://tr.rbxcdn.com/180DAY-0c03951800390c2c1103507f8a1960fe/150/150/Image/Png/noFilter" },
  { name: "Banesberry", value: 33333, icon: "https://tr.rbxcdn.com/180DAY-0577daedd34029fbaa70b8cb8b9d47c4/150/150/Image/Png/noFilter" },
  { name: "Baobab", value: 120000, icon: "https://tr.rbxcdn.com/180DAY-0418152dcd853f17745111243a828041/150/150/Image/Png/noFilter" },
  { name: "Basket Bouquet", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-b4ec244306172b3ab6f6b780a217e1a8/150/150/Image/Png/noFilter" },
  { name: "Beanstalk", value: 28000, icon: "https://tr.rbxcdn.com/180DAY-e159d994654a3b7fd561f23d9ca53e31/150/150/Image/Png/noFilter" },
  { name: "Beast Buttercup", value: 3000000, icon: "https://tr.rbxcdn.com/180DAY-d3577c8dae9ffe1587e923aad4c4eb5d/150/150/Image/Png/noFilter" },
  { name: "Beast Shadow Buttercup", value: 3000000, icon: "https://tr.rbxcdn.com/180DAY-0c3aa8cf9df8588f9a68f3ad1ca33f6a/150/150/Image/Png/noFilter" },
  { name: "Bee Balm", value: 18000, icon: "https://tr.rbxcdn.com/180DAY-5263acb29653e80ca2e43c84069049e3/150/150/Image/Png/noFilter" },
  { name: "Bee Bell", value: 77700, icon: "https://tr.rbxcdn.com/180DAY-6b76a55806cce9101a5703b20aa4ccaf/150/150/Image/Png/noFilter" },
  { name: "Bee Lantern", value: 150000, icon: "https://tr.rbxcdn.com/180DAY-a6cf19e4d69c1ffbb627fb756272a470/150/150/Image/Png/noFilter" },
  { name: "Bell Pepper", value: 5500, icon: "https://tr.rbxcdn.com/180DAY-50b88917d4c107b6a5d5e901eb32d215/150/150/Image/Png/noFilter" },
  { name: "Bendboo", value: 155000, icon: "https://tr.rbxcdn.com/180DAY-526c918b8175736c92e3ec15cb731778/150/150/Image/Png/noFilter" },
  { name: "Big Buttercup", value: 10000, icon: "https://tr.rbxcdn.com/180DAY-615b9fd0c1fa009b55165ea05876685e/150/150/Image/Png/noFilter" },
  { name: "Big Shadow Buttercup", value: 10000, icon: "https://tr.rbxcdn.com/180DAY-cadb115aa279b6e61827f926ed8bd039/150/150/Image/Png/noFilter" },
  { name: "Bigger Buttercup", value: 200000, icon: "https://tr.rbxcdn.com/180DAY-63a4e2ac23199e571fe04d6fb79c0c6f/150/150/Image/Png/noFilter" },
  { name: "Bigger Shadow Buttercup", value: 200000, icon: "https://tr.rbxcdn.com/180DAY-53c7a28f78095f26686a719894231d8e/150/150/Image/Png/noFilter" },
  { name: "Biggest Buttercup", value: 400000, icon: "https://tr.rbxcdn.com/180DAY-378e8fda23caf18432adcfabdbac4c16/150/150/Image/Png/noFilter" },
  { name: "Biggest Shadow Buttercup", value: 400000, icon: "https://tr.rbxcdn.com/180DAY-bf4f83411a2a86f6b48a025f6aa3d625/150/150/Image/Png/noFilter" },
  { name: "Birds Nest", value: 5000, icon: "https://tr.rbxcdn.com/180DAY-200eb3de6d918cf8684014a2b8e4d71d/150/150/Image/Png/noFilter" },
  { name: "Birds of Paradise", value: 99120, icon: "https://tr.rbxcdn.com/180DAY-000559a00e7f49baee9ef1207023d762/150/150/Image/Png/noFilter" },
  { name: "Bitter Melon", value: 77000, icon: "https://tr.rbxcdn.com/180DAY-d2d4c959e0beeff4aef06548806a99ad/150/150/Image/Png/noFilter" },
  { name: "Black Bat Flower", value: 70000, icon: "https://tr.rbxcdn.com/180DAY-3bd734b370c6567ea69b84950bb569a2/150/150/Image/Png/noFilter" },
  { name: "Black Magic Ears", value: 77000, icon: "https://tr.rbxcdn.com/180DAY-15ca6d1ce03d320a435f0ce5ad4a8379/150/150/Image/Png/noFilter" },
  { name: "Blood Banana", value: 6000, icon: "https://tr.rbxcdn.com/180DAY-8d19bc74aa46472022871ec453396b0b/150/150/Image/Png/noFilter" },
  { name: "Blood Orange", value: 140000, icon: "https://tr.rbxcdn.com/180DAY-2797080595bca55458daf06da0d824a7/150/150/Image/Png/noFilter" },
  { name: "Bloodred Mushroom", value: 22222, icon: "https://tr.rbxcdn.com/180DAY-6f6963f3a0a62312bdbbf0dbe4d332a4/150/150/Image/Png/noFilter" },
  { name: "Blooming Cactus", value: 120000, icon: "https://tr.rbxcdn.com/180DAY-44a7a346d24abeaccbe4ef470871f965/150/150/Image/Png/noFilter" },
  { name: "Blue Candypop", value: 45000, icon: "https://tr.rbxcdn.com/180DAY-ec0140cd249797f2cdc2d162186d5695/150/150/Image/Png/noFilter" },
  { name: "Blue Lollipop", value: 50000, icon: "https://tr.rbxcdn.com/180DAY-920b8b5983014d41cedc3997b75811cd/150/150/Image/Png/noFilter" },
  { name: "Blue Raspberry", value: 45000, icon: "https://tr.rbxcdn.com/180DAY-43d1c1b3c2bdc28f903e4d83c426a82b/150/150/Image/Png/noFilter" },
  { name: "Blueberry", value: 20, icon: "https://tr.rbxcdn.com/180DAY-daffe53d9e60cefb9013d4e065b50bc0/150/150/Image/Png/noFilter" },
  { name: "Bonanza Bloom", value: 288888, icon: "https://tr.rbxcdn.com/180DAY-30d70de267e818ff6a06f458aa0ba54d/150/150/Image/Png/noFilter" },
  { name: "Bone Blossom", value: 200000, icon: "https://tr.rbxcdn.com/180DAY-fb86381c6ccdc2bc0af49e7e1b4204a9/150/150/Image/Png/noFilter" },
  { name: "Boneboo", value: 141141, icon: "https://tr.rbxcdn.com/180DAY-1cfc40e2fc55842ca25e11f148279ea2/150/150/Image/Png/noFilter" },
  { name: "Bonnet Bloom", value: 90000, icon: "https://tr.rbxcdn.com/180DAY-5fb055a463bb14444a0ee5917d488f50/150/150/Image/Png/noFilter" },
  { name: "Boreal Orange", value: 222000, icon: "https://tr.rbxcdn.com/180DAY-4f06deb7c927ff72f4e387933cc37767/150/150/Image/Png/noFilter" },
  { name: "Briar Rose", value: 75000, icon: "https://tr.rbxcdn.com/180DAY-a6519ca59a0efc4e487ba5d90429d640/150/150/Image/Png/noFilter" },
  { name: "Broccoli", value: 55555, icon: "https://tr.rbxcdn.com/180DAY-e889b2cb68da7dbc9b070fdbf47f6b26/150/150/Image/Png/noFilter" },
  { name: "Brussels Sprout", value: 120000, icon: "https://tr.rbxcdn.com/180DAY-0ebb0c51aeabda6bef00cd2950fd246f/150/150/Image/Png/noFilter" },
  { name: "Buddhas Hand", value: 48000, icon: "https://tr.rbxcdn.com/180DAY-6f17d135d3c3e64b07fa2f7ea1e82561/150/150/Image/Png/noFilter" },
  { name: "Bumble Bulb", value: 280000, icon: "https://tr.rbxcdn.com/180DAY-311485515045a6304b659bc18e7181ba/150/150/Image/Png/noFilter" },
  { name: "Bunny Berry", value: 30000, icon: "https://tr.rbxcdn.com/180DAY-dcec3ca93eba795fd1b85dc8214f86a2/150/150/Image/Png/noFilter" },
  { name: "Burning Bud", value: 70000, icon: "https://tr.rbxcdn.com/180DAY-9bbb7366a211593bddeed98708e9b34a/150/150/Image/Png/noFilter" },
  { name: "Bush Flake", value: 76000, icon: "https://tr.rbxcdn.com/180DAY-a3c093124fc982078311446f26c4b378/150/150/Image/Png/noFilter" },
  { name: "Buttercup", value: 600, icon: "https://tr.rbxcdn.com/180DAY-4582f3532a7ee08a7e14b3a8dfe02bbf/150/150/Image/Png/noFilter" },
  { name: "Butternut Squash", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-65670fa755ac59a5d1769d031b5df716/150/150/Image/Png/noFilter" },
  { name: "Cacao", value: 12000, icon: "https://tr.rbxcdn.com/180DAY-ba4a56772e40536c57cbb392d6cccd80/150/150/Image/Png/noFilter" },
  { name: "Cactus", value: 3400, icon: "https://tr.rbxcdn.com/180DAY-ab50877c63f60db819d06561e8e96c11/150/150/Image/Png/noFilter" },
  { name: "Calla Lily", value: 67676, icon: "https://tr.rbxcdn.com/180DAY-d5b180dcd742618f1576f0df46b4d568/150/150/Image/Png/noFilter" },
  { name: "Canary Melon", value: 65000, icon: "https://tr.rbxcdn.com/180DAY-6676f3af924058fd37eb465b2f929bf9/150/150/Image/Png/noFilter" },
  { name: "Candlite", value: 66666, icon: "https://tr.rbxcdn.com/180DAY-584c675fb5f25a87d20c7497e6e238e0/150/150/Image/Png/noFilter" },
  { name: "Candy Blossom", value: 100000, icon: "https://tr.rbxcdn.com/180DAY-ddd647fda1fa025090a1a9e52c76ee1a/150/150/Image/Png/noFilter" },
  { name: "Candy Blossom 2026", value: 100000, icon: "https://tr.rbxcdn.com/180DAY-e7dfa88396907d3d9b13a2a001254a7f/150/150/Image/Png/noFilter" },
  { name: "Candy Cane", value: 150000, icon: "https://tr.rbxcdn.com/180DAY-11c844fce5133a8926ae3de83ce6bc95/150/150/Image/Png/noFilter" },
  { name: "Candy Carrot", value: 8000, icon: "https://tr.rbxcdn.com/180DAY-fb8f6c1acd3c610144443491f418d5f8/150/150/Image/Png/noFilter" },
  { name: "Candy Cornflower", value: 44444, icon: "https://tr.rbxcdn.com/180DAY-b0ad2a5b79d9e5d44c403a107dd30e3a/150/150/Image/Png/noFilter" },
  { name: "Candy Sunflower", value: 80000, icon: "https://tr.rbxcdn.com/180DAY-46887b9607c7052b4abedf86c4f89f28/150/150/Image/Png/noFilter" },
  { name: "Cantaloupe", value: 34000, icon: "https://tr.rbxcdn.com/180DAY-5afc6aa5b3b1ed332f79b055c29dd0be/150/150/Image/Png/noFilter" },
  { name: "Carnival Pumpkin", value: 48000, icon: "https://tr.rbxcdn.com/180DAY-8d0c373e23f507cd767a6222ca34d60a/150/150/Image/Png/noFilter" },
  { name: "Carrot", value: 20, icon: "https://tr.rbxcdn.com/180DAY-ab456ae76f1b2cb4fb6e1c9c88bb5540/150/150/Image/Png/noFilter" },
  { name: "Castor Bean", value: 53333, icon: "https://tr.rbxcdn.com/180DAY-12c786c0f5c9bae674725920f052c788/150/150/Image/Png/noFilter" },
  { name: "Cauliflower", value: 50, icon: "https://tr.rbxcdn.com/180DAY-ba97af35ed42bb389d5685d4c01e9447/150/150/Image/Png/noFilter" },
  { name: "Celestiberry", value: 10000, icon: "https://tr.rbxcdn.com/180DAY-3263c74f1f46b385ff3997a1d9dd3598/150/150/Image/Png/noFilter" },
  { name: "Cherry", value: 28575, icon: "https://tr.rbxcdn.com/180DAY-5f6a2b7c4c6d18409110f2673d446b71/150/150/Image/Png/noFilter" },
  { name: "Cherry Blossom", value: 500, icon: "https://tr.rbxcdn.com/180DAY-f3f5548a081a488545a1a40fa36ac7f7/150/150/Image/Png/noFilter" },
  { name: "Chicken Feed", value: 77777, icon: "https://tr.rbxcdn.com/180DAY-7e00143b026d5284fbaff54088a5c484/150/150/Image/Png/noFilter" },
  { name: "Chocolate Berry", value: 8000, icon: "https://tr.rbxcdn.com/180DAY-4efe524d475f17e0b92fd43905f87757/150/150/Image/Png/noFilter" },
  { name: "Chocolate Carrot", value: 11000, icon: "https://tr.rbxcdn.com/180DAY-f31a2236d2a529c9540dd6edecb6fec5/150/150/Image/Png/noFilter" },
  { name: "Chocolate Coconut", value: 55000, icon: "https://tr.rbxcdn.com/180DAY-50f1cb6744274c9fdfa5544ebdde30ab/150/150/Image/Png/noFilter" },
  { name: "Christmas Cracker", value: 120000, icon: "https://tr.rbxcdn.com/180DAY-bf080f418b98835232a1ea635b9b4796/150/150/Image/Png/noFilter" },
  { name: "Christmas Tree", value: 500000, icon: "https://tr.rbxcdn.com/180DAY-bb2ef66bd32547b714032dfc1f07ef60/150/150/Image/Png/noFilter" },
  { name: "Cocoa Pod", value: 150000, icon: "https://tr.rbxcdn.com/180DAY-8ca29bd21e0fe35c88cd9014630b40f6/150/150/Image/Png/noFilter" },
  { name: "Cocomango", value: 180000, icon: "https://tr.rbxcdn.com/180DAY-dc87ab9a9fa28f5c6d144acc9a3ffa8f/150/150/Image/Png/noFilter" },
  { name: "Coconut", value: 400, icon: "https://tr.rbxcdn.com/180DAY-df98c34558478709a382df1246f9dfc9/150/150/Image/Png/noFilter" },
  { name: "Cocovine", value: 66666, icon: "https://tr.rbxcdn.com/180DAY-c7ccb7c4ea13dbb7a65a0f21cf1d4db5/150/150/Image/Png/noFilter" },
  { name: "Coilvine", value: 65000, icon: "https://tr.rbxcdn.com/180DAY-d076cc1f91340eee4c2e53b10151ee7c/150/150/Image/Png/noFilter" },
  { name: "Coinfruit", value: 22222, icon: "https://tr.rbxcdn.com/180DAY-a013c1f5ccba80d7000388228aaa32f7/150/150/Image/Png/noFilter" },
  { name: "Cold Snap Suckle", value: 20, icon: "https://tr.rbxcdn.com/180DAY-111a3bf5fb88d96060788b0b2c7e4f19/150/150/Image/Png/noFilter" },
  { name: "Colorpop Crop", value: 150000, icon: "https://tr.rbxcdn.com/180DAY-f183b8ef9a89574293f4542521db8e53/150/150/Image/Png/noFilter" },
  { name: "Coneflower", value: 75000, icon: "https://tr.rbxcdn.com/180DAY-3ea939f293b437247e091ace5cf96043/150/150/Image/Png/noFilter" },
  { name: "Confetti Tula", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-2d801eea09412b66b45684fa61afc936/150/150/Image/Png/noFilter" },
  { name: "Cookie Stack", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-3028a8018f51dee59660a646d5c50c02/150/150/Image/Png/noFilter" },
  { name: "Coolcool Beanbeanstalk", value: 28000, icon: "https://tr.rbxcdn.com/180DAY-3dc145fc0b2ce74f3dff56ca6ac44326/150/150/Image/Png/noFilter" },
  { name: "Corn", value: 40, icon: "https://tr.rbxcdn.com/180DAY-ddf738bc5376654cefea2d102b1c16f8/150/150/Image/Png/noFilter" },
  { name: "Corpse Flower", value: 85000, icon: "https://tr.rbxcdn.com/180DAY-ca9ac3122ce992ac1e923f5bbde4043c/150/150/Image/Png/noFilter" },
  { name: "Cranberry", value: 3500, icon: "https://tr.rbxcdn.com/180DAY-e8a19d09b55b1f0ab071e3a3418543a1/150/150/Image/Png/noFilter" },
  { name: "Crassula Umbrella", value: 4500, icon: "https://tr.rbxcdn.com/180DAY-3d87b6342fce07aa4ea406c27da1ba5c/150/150/Image/Png/noFilter" },
  { name: "Crimson Cranberry", value: 15000, icon: "https://tr.rbxcdn.com/180DAY-1da36f4d84f10f3fab9f65cab6aff596/150/150/Image/Png/noFilter" },
  { name: "Crimson Thorn", value: 210000, icon: "https://tr.rbxcdn.com/180DAY-ceed3f310ff18c373a886968ea9679c2/150/150/Image/Png/noFilter" },
  { name: "Crimson Vine", value: 1250, icon: "https://tr.rbxcdn.com/180DAY-9c4340fe523162f26fc3841f9a34086c/150/150/Image/Png/noFilter" },
  { name: "Crocus", value: 30000, icon: "https://tr.rbxcdn.com/180DAY-c19f4ea710d2762e096102ff5391ade0/150/150/Image/Png/noFilter" },
  { name: "Crown Melon", value: 50000, icon: "https://tr.rbxcdn.com/180DAY-6e0071a36a00ccbaab364c18f22b4200/150/150/Image/Png/noFilter" },
  { name: "Crown of Thorns", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-15ba6ec171dfddb8c105da0f0c40bead/150/150/Image/Png/noFilter" },
  { name: "Crown Pumpkin", value: 15000, icon: "https://tr.rbxcdn.com/180DAY-f75edc8d5422886e439a4caabf345c33/150/150/Image/Png/noFilter" },
  { name: "Crunchnut", value: 2000, icon: "https://tr.rbxcdn.com/180DAY-bf058ba20e1900b1f6eef4936e7cf749/150/150/Image/Png/noFilter" },
  { name: "Cryo Rose", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-3ffad886f2edc136ce332503e69f0e44/150/150/Image/Png/noFilter" },
  { name: "Cryoshard", value: 124124, icon: "https://tr.rbxcdn.com/180DAY-af373e93bd60ffe998fdc4769f51192d/150/150/Image/Png/noFilter" },
  { name: "Cursed Fruit", value: 25750, icon: "https://tr.rbxcdn.com/180DAY-0771598ec232fe3b584505b51c939222/150/150/Image/Png/noFilter" },
  { name: "Cyberflare", value: 15000, icon: "https://tr.rbxcdn.com/180DAY-0c29b72a0ba8e3c5488d49450c2059ba/150/150/Image/Png/noFilter" },
  { name: "Cyclamen", value: 95000, icon: "https://tr.rbxcdn.com/180DAY-f82bda41d18fe4529fdb8acd1e073e26/150/150/Image/Png/noFilter" },
  { name: "Daffodil", value: 1000, icon: "https://tr.rbxcdn.com/180DAY-447a24dfa64b1f06487b02d9f57d476f/150/150/Image/Png/noFilter" },
  { name: "Daisy", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-8770db12a6e1485f7e1e69768ba08cac/150/150/Image/Png/noFilter" },
  { name: "Dandelion", value: 50000, icon: "https://tr.rbxcdn.com/180DAY-df5748617a2de5c51854372b203b4829/150/150/Image/Png/noFilter" },
  { name: "Delphinium", value: 24000, icon: "https://tr.rbxcdn.com/180DAY-b2c84e8ffa813247b18e84b6d5709401/150/150/Image/Png/noFilter" },
  { name: "Devilroot", value: 66666, icon: "https://tr.rbxcdn.com/180DAY-2f70459dfbd625f3fcc3d82fbb55592a/150/150/Image/Png/noFilter" },
  { name: "Dezen", value: 29250, icon: "https://tr.rbxcdn.com/180DAY-b08a71d32c27657d65c0793cf6a74b12/150/150/Image/Png/noFilter" },
  { name: "DJ Delight", value: 67676, icon: "https://tr.rbxcdn.com/180DAY-7a78ff034a13e159c618be9e936a9834/150/150/Image/Png/noFilter" },
  { name: "Dragon Fruit", value: 4750, icon: "https://tr.rbxcdn.com/180DAY-2354e3614f9a4191fa8ec206bdf567e5/150/150/Image/Png/noFilter" },
  { name: "Dragon Pepper", value: 88888, icon: "https://tr.rbxcdn.com/180DAY-d83d7b769aa7550cba0bc9cc77c17d15/150/150/Image/Png/noFilter" },
  { name: "Dragon Sapling", value: 69000, icon: "https://tr.rbxcdn.com/180DAY-a3af8e871d50a3e119bf44ca9bc58913/150/150/Image/Png/noFilter" },
  { name: "Drowned Flower", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-cc77eba0db70b9804110c77bb852d76c/150/150/Image/Png/noFilter" },
  { name: "Durian", value: 7500, icon: "https://tr.rbxcdn.com/180DAY-bdb8e729dc3b39bd8e915e18458d6459/150/150/Image/Png/noFilter" },
  { name: "Duskpuff", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-bbd07f844f87d4bdd2fec235a3a9d02b/150/150/Image/Png/noFilter" },
  { name: "Easter Candy Carrot", value: 8000, icon: "https://tr.rbxcdn.com/180DAY-895dafb311221145c6939f6e8e6d939f/150/150/Image/Png/noFilter" },
  { name: "Easter Chocolate Berry", value: 8000, icon: "https://tr.rbxcdn.com/180DAY-058d32091e996606bc4a28708c618cd8/150/150/Image/Png/noFilter" },
  { name: "Easter Chocolate Coconut", value: 55000, icon: "https://tr.rbxcdn.com/180DAY-71ebb8f4d12cdcc4fdd52c9994c330e3/150/150/Image/Png/noFilter" },
  { name: "Easter Easter Sprout", value: 650000, icon: "https://tr.rbxcdn.com/180DAY-dd4b4f91a0d65e12bd03f1354111c8fd/150/150/Image/Png/noFilter" },
  { name: "Easter Egg", value: 2500, icon: "https://tr.rbxcdn.com/180DAY-28186d6d12d6384d355ee81b08c347bb/150/150/Image/Png/noFilter" },
  { name: "Easter Egg Melon", value: 100000, icon: "https://tr.rbxcdn.com/180DAY-0887f0699aeb34af17de9a34a7ed2665/150/150/Image/Png/noFilter" },
  { name: "Easter Eggfruit", value: 444444, icon: "https://tr.rbxcdn.com/180DAY-0b21481148f479dcc0f6a79cb9a71856/150/150/Image/Png/noFilter" },
  { name: "Easter Gumball", value: 12000, icon: "https://tr.rbxcdn.com/180DAY-b28979777c10607a9f26b8137f964323/150/150/Image/Png/noFilter" },
  { name: "Easter Gummy Cactus", value: 100000, icon: "https://tr.rbxcdn.com/180DAY-3ec725409cbe19592efcc8b11b6b8d9d/150/150/Image/Png/noFilter" },
  { name: "Easter Liquorice", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-3e3aa210a172594d4cd76df79d9d5da3/150/150/Image/Png/noFilter" },
  { name: "Easter Sour Lemon", value: 250000, icon: "https://tr.rbxcdn.com/180DAY-836a3c1b1c7afc73b2dcc65323a41e22/150/150/Image/Png/noFilter" },
  { name: "Easter Sprout", value: 650000, icon: "https://tr.rbxcdn.com/180DAY-523b310d5e909dbd9b67655d4e0d338e/150/150/Image/Png/noFilter" },
  { name: "Easter Sugar Melon", value: 40000, icon: "https://tr.rbxcdn.com/180DAY-6df1b52732823a633f3a7f40898966d9/150/150/Image/Png/noFilter" },
  { name: "Egg Melon", value: 100000, icon: "https://tr.rbxcdn.com/180DAY-163884e28c94266d850b90722c607ad1/150/150/Image/Png/noFilter" },
  { name: "Egg Shroom", value: 110000, icon: "https://tr.rbxcdn.com/180DAY-ab37c2fb8e2814382e0c4cfdf88ce96d/150/150/Image/Png/noFilter" },
  { name: "Eggfruit", value: 444444, icon: "https://tr.rbxcdn.com/180DAY-80e37fd8832cd8e082f0508aa6bbbef1/150/150/Image/Png/noFilter" },
  { name: "Eggplant", value: 12000, icon: "https://tr.rbxcdn.com/180DAY-3fc330ccb2131f74ca4633152464c0df/150/150/Image/Png/noFilter" },
  { name: "Eggsnapper", value: 175000, icon: "https://tr.rbxcdn.com/180DAY-8bb16fe64500adad123f96f8f23ee538/150/150/Image/Png/noFilter" },
  { name: "Elder Candy Blossom", value: 150000, icon: "https://tr.rbxcdn.com/180DAY-cc059d5f3f7951858cdba3a88b74e0ce/150/150/Image/Png/noFilter" },
  { name: "Elder Strawberry", value: 90000, icon: "https://tr.rbxcdn.com/180DAY-00484406aeb4eea874ba732930ba7187/150/150/Image/Png/noFilter" },
  { name: "Elephant Ears", value: 77000, icon: "https://tr.rbxcdn.com/180DAY-6e48ab9b1466335868d0a0a4ada1101e/150/150/Image/Png/noFilter" },
  { name: "Ember Lily", value: 66666, icon: "https://tr.rbxcdn.com/180DAY-e184aa9ea37d6b4518a44c78aab045a3/150/150/Image/Png/noFilter" },
  { name: "Emerald Bud", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-155d4a478b58bc3c0ca1bf58e4fe8beb/150/150/Image/Png/noFilter" },
  { name: "Enkaku", value: 62000, icon: "https://tr.rbxcdn.com/180DAY-f365a35a05de756f51272f10c604e79a/150/150/Image/Png/noFilter" },
  { name: "Evo Apple I", value: 60000, icon: "https://tr.rbxcdn.com/180DAY-8e71a2f44fc7a5de240ce55039a25252/150/150/Image/Png/noFilter" },
  { name: "Evo Apple II", value: 75000, icon: "https://tr.rbxcdn.com/180DAY-e191983d2826e4f832a9cef891704b41/150/150/Image/Png/noFilter" },
  { name: "Evo Apple III", value: 90000, icon: "https://tr.rbxcdn.com/180DAY-4bee78513727fd7c2c5e7e28dbc1785e/150/150/Image/Png/noFilter" },
  { name: "Evo Apple IV", value: 165000, icon: "https://tr.rbxcdn.com/180DAY-e741e838a1e399882b39af51d1bff3de/150/150/Image/Png/noFilter" },
  { name: "Evo Beetroot I", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-326db3a35b1e2d714a4e34042e0339f6/150/150/Image/Png/noFilter" },
  { name: "Evo Beetroot II", value: 30000, icon: "https://tr.rbxcdn.com/180DAY-7313c0aab8e1547d931d1cc2ddec45bb/150/150/Image/Png/noFilter" },
  { name: "Evo Beetroot III", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-bedb6abbeeae00731a4490fd53379f52/150/150/Image/Png/noFilter" },
  { name: "Evo Beetroot IV", value: 50000, icon: "https://tr.rbxcdn.com/180DAY-e3c6f83ab76d732965ec04098d579766/150/150/Image/Png/noFilter" },
  { name: "Evo Blueberry I", value: 30000, icon: "https://tr.rbxcdn.com/180DAY-a9e4a71c2954cbd5905328a9b864c77f/150/150/Image/Png/noFilter" },
  { name: "Evo Blueberry II", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-3bdf173de3a95da6ed6ce12a961069f2/150/150/Image/Png/noFilter" },
  { name: "Evo Blueberry III", value: 40000, icon: "https://tr.rbxcdn.com/180DAY-3357f8e6edbaaa7efb875f24b623985f/150/150/Image/Png/noFilter" },
  { name: "Evo Blueberry IV", value: 60000, icon: "https://tr.rbxcdn.com/180DAY-b1cc77f6bd24cce99870c72e98d5a0d2/150/150/Image/Png/noFilter" },
  { name: "Evo Mushroom I", value: 40000, icon: "https://tr.rbxcdn.com/180DAY-b04ec5ba3f80b4f3549f3ac432044e1d/150/150/Image/Png/noFilter" },
  { name: "Evo Mushroom II", value: 45000, icon: "https://tr.rbxcdn.com/180DAY-2c6e3ec5182cb608248c63c7603a7908/150/150/Image/Png/noFilter" },
  { name: "Evo Mushroom III", value: 50000, icon: "https://tr.rbxcdn.com/180DAY-cedee4b75f315a10eecd831ecea7c9a1/150/150/Image/Png/noFilter" },
  { name: "Evo Mushroom IV", value: 80000, icon: "https://tr.rbxcdn.com/180DAY-5da27ce3b5b2881fa06b25a45f12def1/150/150/Image/Png/noFilter" },
  { name: "Evo Pumpkin I", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-480ea3dfda875f3083e70418963e4dc1/150/150/Image/Png/noFilter" },
  { name: "Evo Pumpkin II", value: 40000, icon: "https://tr.rbxcdn.com/180DAY-26400244ebe4297e9b60f86619e80843/150/150/Image/Png/noFilter" },
  { name: "Evo Pumpkin III", value: 45000, icon: "https://tr.rbxcdn.com/180DAY-d2fd49c5cb018c004043a40481756a60/150/150/Image/Png/noFilter" },
  { name: "Evo Pumpkin IV", value: 70000, icon: "https://tr.rbxcdn.com/180DAY-95214c9f7f1fad3621aaf27c6cbcf0d3/150/150/Image/Png/noFilter" },
  { name: "Faestar", value: 4500, icon: "https://tr.rbxcdn.com/180DAY-4e969ce0bee43cbbd9c426e9972e2b14/150/150/Image/Png/noFilter" },
  { name: "Fall Berry", value: 45222, icon: "https://tr.rbxcdn.com/180DAY-1ce96a665a310bc6240895a5f69c1f01/150/150/Image/Png/noFilter" },
  { name: "Feijoa", value: 13000, icon: "https://tr.rbxcdn.com/180DAY-0361db3960faa87151a0596f4f969daa/150/150/Image/Png/noFilter" },
  { name: "Fennel", value: 50000, icon: "https://tr.rbxcdn.com/180DAY-7ab01405ca45b0c8679d3b805663adec/150/150/Image/Png/noFilter" },
  { name: "Ferntail", value: 2000, icon: "https://tr.rbxcdn.com/180DAY-bd8977c2359be9ae397a3399c9d91688/150/150/Image/Png/noFilter" },
  { name: "Festive Bamboo", value: 45000, icon: "https://tr.rbxcdn.com/180DAY-c15a04b7b04fb058bb79965dc88603cc/150/150/Image/Png/noFilter" },
  { name: "Filbert Nut", value: 32500, icon: "https://tr.rbxcdn.com/180DAY-e2da89e06a1e3c4fb3076a358851ddd5/150/150/Image/Png/noFilter" },
  { name: "Firefly Fern", value: 72000, icon: "https://tr.rbxcdn.com/180DAY-46ec9207ba053b62a330a88e83e6bad8/150/150/Image/Png/noFilter" },
  { name: "Firewell", value: 112111, icon: "https://tr.rbxcdn.com/180DAY-5d36910fd95d762f127005718c52c886/150/150/Image/Png/noFilter" },
  { name: "Firework Fern", value: 150000, icon: "https://tr.rbxcdn.com/180DAY-6322657e38e41293eeadc26a78d7efc9/150/150/Image/Png/noFilter" },
  { name: "Firework Flower", value: 151000, icon: "https://tr.rbxcdn.com/180DAY-f07dbc3e6438e2da18d6e3b971bf9375/150/150/Image/Png/noFilter" },
  { name: "Fissure Berry", value: 13000, icon: "https://tr.rbxcdn.com/180DAY-a8940db2ac907160bd482bb70c08d5f7/150/150/Image/Png/noFilter" },
  { name: "Flare Daisy", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-d46f6bf1243ff3268b8b7b0bfe74bf69/150/150/Image/Png/noFilter" },
  { name: "Flare Melon", value: 50000, icon: "https://tr.rbxcdn.com/180DAY-c954c12bee9d7b07d5d02ff025f98650/150/150/Image/Png/noFilter" },
  { name: "Fossilight", value: 88000, icon: "https://tr.rbxcdn.com/180DAY-76c85091e6a4866e74d271cf942ed31b/150/150/Image/Png/noFilter" },
  { name: "Four Leaf Clover", value: 70000, icon: "https://tr.rbxcdn.com/180DAY-821a4d570ac24c3ce4b11ac170436f2d/150/150/Image/Png/noFilter" },
  { name: "Foxglove", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-55f191b531ae4f96ac5f1529878b1423/150/150/Image/Png/noFilter" },
  { name: "Frost Bush", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-55e11fb11d7545c056caa8cb8f78f1f9/150/150/Image/Png/noFilter" },
  { name: "Frost Fern", value: 130130, icon: "https://tr.rbxcdn.com/180DAY-f4cc0e8268f4cef291f10290c5b36106/150/150/Image/Png/noFilter" },
  { name: "Frost Pepper", value: 88888, icon: "https://tr.rbxcdn.com/180DAY-544e4eddb02eb2abe5c807fcf2ddf7a4/150/150/Image/Png/noFilter" },
  { name: "Frostline Flake", value: 20, icon: "https://tr.rbxcdn.com/180DAY-e5d866cdfd60f045dca732dc8ae5b164/150/150/Image/Png/noFilter" },
  { name: "Frostspike", value: 45000, icon: "https://tr.rbxcdn.com/180DAY-65ec995e0974035397196da53b0c8385/150/150/Image/Png/noFilter" },
  { name: "Frostwing", value: 200000, icon: "https://tr.rbxcdn.com/180DAY-a029433a7d1d27d80695cd0c2d4d50e1/150/150/Image/Png/noFilter" },
  { name: "Frosty Bite", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-937aa9f4b9368a0138c9826270863307/150/150/Image/Png/noFilter" },
  { name: "Fruitball", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-6648d2e3ab61d7386e37bb980cfa2fb5/150/150/Image/Png/noFilter" },
  { name: "Gem Fruit", value: 45000, icon: "https://tr.rbxcdn.com/180DAY-13439ac5aba3f7e39490e2ff434fd527/150/150/Image/Png/noFilter" },
  { name: "Ghost Bush", value: 30500, icon: "https://tr.rbxcdn.com/180DAY-6533d20dcce125ef22f6ad33f618fb0c/150/150/Image/Png/noFilter" },
  { name: "Ghost Pepper", value: 77777, icon: "https://tr.rbxcdn.com/180DAY-d80093b64601da78e2c293616d632eb0/150/150/Image/Png/noFilter" },
  { name: "Ghoul Root", value: 55555, icon: "https://tr.rbxcdn.com/180DAY-7c05a118a920b1e6a622783e1a97bfcf/150/150/Image/Png/noFilter" },
  { name: "Giant Pinecone", value: 72000, icon: "https://tr.rbxcdn.com/180DAY-c23e3ee2d90cdb4303cbd3371fce2722/150/150/Image/Png/noFilter" },
  { name: "Gift Berry", value: 188888, icon: "https://tr.rbxcdn.com/180DAY-ee30901ed6d7b420e1f2310771668653/150/150/Image/Png/noFilter" },
  { name: "Gift Root", value: 20, icon: "https://tr.rbxcdn.com/180DAY-02c49d9cdfc2434eef2011f5c4a05daf/150/150/Image/Png/noFilter" },
  { name: "Gingerbread Blossom", value: 250000, icon: "https://tr.rbxcdn.com/180DAY-9906bfa4e50c44d0a3de45b810b8cc05/150/150/Image/Png/noFilter" },
  { name: "Glacial Petal", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-f8783aa8e8ee51dbe7408d638e150b3d/150/150/Image/Png/noFilter" },
  { name: "Glass Kiwi", value: 65000, icon: "https://tr.rbxcdn.com/180DAY-810243c6e87565d243dd2dac98416798/150/150/Image/Png/noFilter" },
  { name: "Gleamroot", value: 75000, icon: "https://tr.rbxcdn.com/180DAY-53f7645f9d6c815c0cc6e85d28a9ae67/150/150/Image/Png/noFilter" },
  { name: "Glowpod", value: 30000, icon: "https://tr.rbxcdn.com/180DAY-acc76b77bc0a62b47f0b017ade776219/150/150/Image/Png/noFilter" },
  { name: "Glowshroom", value: 300, icon: "https://tr.rbxcdn.com/180DAY-0dec30289c91b2fc069a49c0d4d1364b/150/150/Image/Png/noFilter" },
  { name: "Glowthorn", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-fe11a8140fa722b4eb475ca977dba6ad/150/150/Image/Png/noFilter" },
  { name: "Golden Egg", value: 250000, icon: "https://tr.rbxcdn.com/180DAY-7e761a72616f34ea7f395b40b2b6f5ff/150/150/Image/Png/noFilter" },
  { name: "Golden Peach", value: 88000, icon: "https://tr.rbxcdn.com/180DAY-9425b183391a789840995df30c5b709d/150/150/Image/Png/noFilter" },
  { name: "Gooseberry", value: 350, icon: "https://tr.rbxcdn.com/180DAY-79d6fc8bb1cbb7f723081dcc48dc52d4/150/150/Image/Png/noFilter" },
  { name: "Grand Cucumber", value: 13500, icon: "https://tr.rbxcdn.com/180DAY-1b644c1e869f3c13d7937913a57e863b/150/150/Image/Png/noFilter" },
  { name: "Grand Tomato", value: 88000, icon: "https://tr.rbxcdn.com/180DAY-6f84ee04353851c224c106d7b0e571d3/150/150/Image/Png/noFilter" },
  { name: "Grand Volcania", value: 70555, icon: "https://tr.rbxcdn.com/180DAY-a6fad17e3d9bdd3c39f942d5b40d71d4/150/150/Image/Png/noFilter" },
  { name: "Grape", value: 7850, icon: "https://tr.rbxcdn.com/180DAY-7d4ab887509d942acb436d2479e0d605/150/150/Image/Png/noFilter" },
  { name: "Grape Droplet", value: 50000, icon: "https://tr.rbxcdn.com/180DAY-6b5a60b5bca7a1d294dde788820b1dcb/150/150/Image/Png/noFilter" },
  { name: "Great Pumpkin", value: 180000, icon: "https://tr.rbxcdn.com/180DAY-7da0836ce4f13a79456cfbf0d02ddba2/150/150/Image/Png/noFilter" },
  { name: "Green Apple", value: 300, icon: "https://tr.rbxcdn.com/180DAY-4c44ab59b5559cd56a689fb5945c8980/150/150/Image/Png/noFilter" },
  { name: "Guanabana", value: 70500, icon: "https://tr.rbxcdn.com/180DAY-909eae3b07f4a46d2040325282bf672a/150/150/Image/Png/noFilter" },
  { name: "Gumball", value: 12000, icon: "https://tr.rbxcdn.com/180DAY-29b8877a17124b10d96284c60f4b70ba/150/150/Image/Png/noFilter" },
  { name: "Gumdrop", value: 65000, icon: "https://tr.rbxcdn.com/180DAY-43d12b3eea3e3119fc1123b8715ecc8d/150/150/Image/Png/noFilter" },
  { name: "Gummy Cactus", value: 100000, icon: "https://tr.rbxcdn.com/180DAY-173dd93e71bc5d4bb4249c7a32d9bb21/150/150/Image/Png/noFilter" },
  { name: "Haskap Berry", value: 150000, icon: "https://tr.rbxcdn.com/180DAY-df3743160c298ce96a80fe63ad519f0d/150/150/Image/Png/noFilter" },
  { name: "Hazelnut", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-02bc3ed995c7e956dca9a5523d2e2369/150/150/Image/Png/noFilter" },
  { name: "Heart Blossom", value: 200000, icon: "https://tr.rbxcdn.com/180DAY-a7dac76253ab008b3f3acc73a157fa48/150/150/Image/Png/noFilter" },
  { name: "Heart Gem", value: 37777, icon: "https://tr.rbxcdn.com/180DAY-e975d24e5ef9eb591410458197cfbb97/150/150/Image/Png/noFilter" },
  { name: "Helenium", value: 129000, icon: "https://tr.rbxcdn.com/180DAY-ddf7b68b4be4f5fa87257c7c049fcd14/150/150/Image/Png/noFilter" },
  { name: "Hexberry", value: 33333, icon: "https://tr.rbxcdn.com/180DAY-71f9d6526944cad9e6d20454fb5a3bfa/150/150/Image/Png/noFilter" },
  { name: "Hinomai", value: 80000, icon: "https://tr.rbxcdn.com/180DAY-ea9df275233afdfc0347dcfb1c39f713/150/150/Image/Png/noFilter" },
  { name: "Hive Fruit", value: 62000, icon: "https://tr.rbxcdn.com/180DAY-0284725af7abb6e54bde5e9c921f6f05/150/150/Image/Png/noFilter" },
  { name: "Hive Petal", value: 100000, icon: "https://tr.rbxcdn.com/180DAY-a0d0bb3aa9bcd62dcb3e4cdd694b7688/150/150/Image/Png/noFilter" },
  { name: "Hollow Bamboo", value: 120000, icon: "https://tr.rbxcdn.com/180DAY-3c13ce460f2a323f682b371e09b29436/150/150/Image/Png/noFilter" },
  { name: "Holly Berry", value: 15000, icon: "https://tr.rbxcdn.com/180DAY-db66884646bb32b734891168de7d7ef6/150/150/Image/Png/noFilter" },
  { name: "Hollyhock", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-7e94da70ea1e57dbf62fae6ca7648ef1/150/150/Image/Png/noFilter" },
  { name: "Honey Alien Apple", value: 1000000, icon: "https://tr.rbxcdn.com/180DAY-2144834a60e83c8d9e8a8a25432d2d8d/150/150/Image/Png/noFilter" },
  { name: "Honey Ambercomb", value: 66660, icon: "https://tr.rbxcdn.com/180DAY-cbad26fef2ec502ca7f3980d41bcafc7/150/150/Image/Png/noFilter" },
  { name: "Honey Apple", value: 275, icon: "https://tr.rbxcdn.com/180DAY-c1e33a3fbc277d30fb91a6246584ab76/150/150/Image/Png/noFilter" },
  { name: "Honey Bamboo", value: 4000, icon: "https://tr.rbxcdn.com/180DAY-43923c39cc6f9dd053300fa147bcb8a6/150/150/Image/Png/noFilter" },
  { name: "Honey Beanstalk", value: 28000, icon: "https://tr.rbxcdn.com/180DAY-9b2e5a93a9da5d9541ff2596cea16017/150/150/Image/Png/noFilter" },
  { name: "Honey Bee Bell", value: 77700, icon: "https://tr.rbxcdn.com/180DAY-65b90896033c5f5623530a30554b0ff6/150/150/Image/Png/noFilter" },
  { name: "Honey Birds of Paradise", value: 99120, icon: "https://tr.rbxcdn.com/180DAY-839c5178d0f1e13174b65878f593fd90/150/150/Image/Png/noFilter" },
  { name: "Honey Blueberry", value: 20, icon: "https://tr.rbxcdn.com/180DAY-e80209592610d2a57aa6472550f9ff38/150/150/Image/Png/noFilter" },
  { name: "Honey Bumble Bulb", value: 280000, icon: "https://tr.rbxcdn.com/180DAY-2f83d3df58e875b2ae7c54738d6727ad/150/150/Image/Png/noFilter" },
  { name: "Honey Burning Bud", value: 70000, icon: "https://tr.rbxcdn.com/180DAY-842609a0e397604e088a2838cde2b11e/150/150/Image/Png/noFilter" },
  { name: "Honey Buttercup", value: 600, icon: "https://tr.rbxcdn.com/180DAY-1f2914896248a9a6ca1cf71c7654eeb2/150/150/Image/Png/noFilter" },
  { name: "Honey Cacao", value: 12000, icon: "https://tr.rbxcdn.com/180DAY-2230995168d633fbc836e5d334499cb7/150/150/Image/Png/noFilter" },
  { name: "Honey Cactus", value: 3400, icon: "https://tr.rbxcdn.com/180DAY-5807099d9dd8264b4bf0117d1aaa8a2d/150/150/Image/Png/noFilter" },
  { name: "Honey Carrot", value: 20, icon: "https://tr.rbxcdn.com/180DAY-29f93114b22c3e96b1c4bb841973fb63/150/150/Image/Png/noFilter" },
  { name: "Honey Coconut", value: 400, icon: "https://tr.rbxcdn.com/180DAY-d364fbae9d98b6313c415b94c3979634/150/150/Image/Png/noFilter" },
  { name: "Honey Coneflower", value: 75000, icon: "https://tr.rbxcdn.com/180DAY-3080c279ea5c66f652214a2c89bbf390/150/150/Image/Png/noFilter" },
  { name: "Honey Corn", value: 40, icon: "https://tr.rbxcdn.com/180DAY-e2ae59086b2e0cec30f6aeee4a5812e3/150/150/Image/Png/noFilter" },
  { name: "Honey Crimson Thorn", value: 210000, icon: "https://tr.rbxcdn.com/180DAY-36afe816dbf99cca36b51b579f4265da/150/150/Image/Png/noFilter" },
  { name: "Honey Daffodil", value: 1000, icon: "https://tr.rbxcdn.com/180DAY-3b82899dcb4ea3065142faef3f03c0e2/150/150/Image/Png/noFilter" },
  { name: "Honey Daisy", value: 5000, icon: "https://tr.rbxcdn.com/180DAY-42e0b82c0969eac1f4db24b09b354767/150/150/Image/Png/noFilter" },
  { name: "Honey Dew", value: 30000, icon: "https://tr.rbxcdn.com/180DAY-8dbb6913048cf06be86b9a2b7845f505/150/150/Image/Png/noFilter" },
  { name: "Honey Dipper", value: 56789, icon: "https://tr.rbxcdn.com/180DAY-99495faccb2c13142bed737b94e83c32/150/150/Image/Png/noFilter" },
  { name: "Honey Dragon Fruit", value: 4750, icon: "https://tr.rbxcdn.com/180DAY-f5d7d0142dcb751a97a8ab979feb3661/150/150/Image/Png/noFilter" },
  { name: "Honey Elder Strawberry", value: 90000, icon: "https://tr.rbxcdn.com/180DAY-547d5e5803fcceaefe4e7a395309c470/150/150/Image/Png/noFilter" },
  { name: "Honey Ember Lily", value: 66666, icon: "https://tr.rbxcdn.com/180DAY-93c18b3a2ef4bc5190639f1cbe6c63d7/150/150/Image/Png/noFilter" },
  { name: "Honey Giant Pinecone", value: 72000, icon: "https://tr.rbxcdn.com/180DAY-1d41917e0714d1f6184a911bc562542b/150/150/Image/Png/noFilter" },
  { name: "Honey Grape", value: 7850, icon: "https://tr.rbxcdn.com/180DAY-ebb10673bed3c2d42762ef7fbf0a3fa0/150/150/Image/Png/noFilter" },
  { name: "Honey Hive Petal", value: 100000, icon: "https://tr.rbxcdn.com/180DAY-7f21d416cb12e05175ee0e3b9086633e/150/150/Image/Png/noFilter" },
  { name: "Honey Hollow", value: 177000, icon: "https://tr.rbxcdn.com/180DAY-331e902018bdde9572b9ea6d3ee2ba1f/150/150/Image/Png/noFilter" },
  { name: "Honey Honey Daisy", value: 5000, icon: "https://tr.rbxcdn.com/180DAY-07d1e8c410a747728821e9a9257aad32/150/150/Image/Png/noFilter" },
  { name: "Honey Honey Dew", value: 30000, icon: "https://tr.rbxcdn.com/180DAY-0ec92d6bacc3fc9999fc55b86fa6dfa7/150/150/Image/Png/noFilter" },
  { name: "Honey Honey Dipper", value: 56789, icon: "https://tr.rbxcdn.com/180DAY-56eac8dcfee6e668ba5c94f0923347cd/150/150/Image/Png/noFilter" },
  { name: "Honey Honey Hollow", value: 177000, icon: "https://tr.rbxcdn.com/180DAY-f784ea1b8a11c8efedce4af3d77e6101/150/150/Image/Png/noFilter" },
  { name: "Honey Mango", value: 6500, icon: "https://tr.rbxcdn.com/180DAY-7e6bbe4d102ac6e3e2071203386bb818/150/150/Image/Png/noFilter" },
  { name: "Honey Mushroom", value: 151000, icon: "https://tr.rbxcdn.com/180DAY-3bedd9e0321a9f90bc9cdca535e539d8/150/150/Image/Png/noFilter" },
  { name: "Honey Octobloom", value: 288888, icon: "https://tr.rbxcdn.com/180DAY-1824ba995d50af4c0b30ed460cbf04c5/150/150/Image/Png/noFilter" },
  { name: "Honey Orange Tulip", value: 850, icon: "https://tr.rbxcdn.com/180DAY-50c659215c0992119dfb8ddb6df4058f/150/150/Image/Png/noFilter" },
  { name: "Honey Pepper", value: 8000, icon: "https://tr.rbxcdn.com/180DAY-5846119c62449a9a289caec0cd32c04e/150/150/Image/Png/noFilter" },
  { name: "Honey Pollenvine", value: 144444, icon: "https://tr.rbxcdn.com/180DAY-b83e08e3506a3282a8352200208d606f/150/150/Image/Png/noFilter" },
  { name: "Honey Pumpkin", value: 3400, icon: "https://tr.rbxcdn.com/180DAY-ad0eded03b73162341079b6c2e1b91df/150/150/Image/Png/noFilter" },
  { name: "Honey Romanesco", value: 166000, icon: "https://tr.rbxcdn.com/180DAY-04a2324ebafd2e057c3e18eea0dfb21f/150/150/Image/Png/noFilter" },
  { name: "Honey Stingpetal", value: 30000, icon: "https://tr.rbxcdn.com/180DAY-2064e166899dfe19d517468002b364a9/150/150/Image/Png/noFilter" },
  { name: "Honey Strawberry", value: 15, icon: "https://tr.rbxcdn.com/180DAY-d25853536d184241c6fc9b69a3db7e5c/150/150/Image/Png/noFilter" },
  { name: "Honey Sugar Apple", value: 48000, icon: "https://tr.rbxcdn.com/180DAY-a2c42b03367c3d72b1e5944f47c95167/150/150/Image/Png/noFilter" },
  { name: "Honey Sunflower", value: 55555, icon: "https://tr.rbxcdn.com/180DAY-62e26fdb17c3f8ab3aa3ddcfc792ce0e/150/150/Image/Png/noFilter" },
  { name: "Honey Tomato", value: 30, icon: "https://tr.rbxcdn.com/180DAY-b7844b42faf9bbcb3b46721a8fc40f5b/150/150/Image/Png/noFilter" },
  { name: "Honey Watermelon", value: 3000, icon: "https://tr.rbxcdn.com/180DAY-e41b24240f2ccc216801aae65c12e83d/150/150/Image/Png/noFilter" },
  { name: "Honey Woodbine", value: 45000, icon: "https://tr.rbxcdn.com/180DAY-d17cab434dd880e01a1bf34ee8aa80c2/150/150/Image/Png/noFilter" },
  { name: "Honey Zebrazinkle", value: 260000, icon: "https://tr.rbxcdn.com/180DAY-6627f54444c27d6d38cbe2c8275badc5/150/150/Image/Png/noFilter" },
  { name: "Honeysuckle", value: 100000, icon: "https://tr.rbxcdn.com/180DAY-d4f9484bbeb357820ae709db898a5a40/150/150/Image/Png/noFilter" },
  { name: "Horned Dinoshroom", value: 69000, icon: "https://tr.rbxcdn.com/180DAY-d965215b3e9cc8d2ae3c42d42720fce8/150/150/Image/Png/noFilter" },
  { name: "Horned Melon", value: 66666, icon: "https://tr.rbxcdn.com/180DAY-c022ee551da9f4b6070e8e5ba48cc8fa/150/150/Image/Png/noFilter" },
  { name: "Horned Redrose", value: 18000, icon: "https://tr.rbxcdn.com/180DAY-29c4aeabfe19c5ff5bdad1ff68474db4/150/150/Image/Png/noFilter" },
  { name: "Horsetail", value: 30000, icon: "https://tr.rbxcdn.com/180DAY-3db313492140fd1e0982904398b7bfbe/150/150/Image/Png/noFilter" },
  { name: "Ice Cream Bean", value: 4500, icon: "https://tr.rbxcdn.com/180DAY-03c1e4e758e0a136a9f67fb3fcf7458d/150/150/Image/Png/noFilter" },
  { name: "Icestalite", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-252bdf14a6ed09022662f834f39b50d4/150/150/Image/Png/noFilter" },
  { name: "Iciclesco", value: 166000, icon: "https://tr.rbxcdn.com/180DAY-5f63ea57e7dfb2dfa4422062727f50bc/150/150/Image/Png/noFilter" },
  { name: "Inferno Quince", value: 130000, icon: "https://tr.rbxcdn.com/180DAY-3133d97451ad7bd60edd24be4b46c6ca/150/150/Image/Png/noFilter" },
  { name: "Jack O Lantern", value: 33333, icon: "https://tr.rbxcdn.com/180DAY-00e27eb5a403784d2abe6b9319099e5a/150/150/Image/Png/noFilter" },
  { name: "Jalapeno", value: 30000, icon: "https://tr.rbxcdn.com/180DAY-24dd9e35935568127188e3c6e8037a52/150/150/Image/Png/noFilter" },
  { name: "Java Banana", value: 92222, icon: "https://tr.rbxcdn.com/180DAY-318c339e5d03d77bb9c125519dcf69f7/150/150/Image/Png/noFilter" },
  { name: "Jelly Bean Sprout", value: 100000, icon: "https://tr.rbxcdn.com/180DAY-2168f4d00b1e4a80021dacd865b339a4/150/150/Image/Png/noFilter" },
  { name: "Jelpod", value: 32500, icon: "https://tr.rbxcdn.com/180DAY-92bd95ea06adc0ceef1eb911cdbe9495/150/150/Image/Png/noFilter" },
  { name: "Jungle Cherry", value: 99000, icon: "https://tr.rbxcdn.com/180DAY-6ec23a4d2d6cb7085c80d2162a02e3eb/150/150/Image/Png/noFilter" },
  { name: "Jungle Kiwano", value: 5000, icon: "https://tr.rbxcdn.com/180DAY-b46ba16460e9aac94499e1b94e4f0bc7/150/150/Image/Png/noFilter" },
  { name: "Jungle Queen Bulb", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-727dd1c483880aa2ccc4a97eedc8935e/150/150/Image/Png/noFilter" },
  { name: "Kernel Curl", value: 80000, icon: "https://tr.rbxcdn.com/180DAY-6b99dbef0330a7442fdecee63fa73614/150/150/Image/Png/noFilter" },
  { name: "King Cabbage", value: 120000, icon: "https://tr.rbxcdn.com/180DAY-e16b1651c383a2149ab22b1ae1c5a5e8/150/150/Image/Png/noFilter" },
  { name: "King Palm", value: 15000, icon: "https://tr.rbxcdn.com/180DAY-f426d3b8119defbddb248435425bbe2e/150/150/Image/Png/noFilter" },
  { name: "Kiwi", value: 2750, icon: "https://tr.rbxcdn.com/180DAY-6d9b49f87dc77ddf278760d6efea5f2d/150/150/Image/Png/noFilter" },
  { name: "Kniphofia", value: 110000, icon: "https://tr.rbxcdn.com/180DAY-2d9689de4b4129e657a4e845c2e21e36/150/150/Image/Png/noFilter" },
  { name: "Lavender", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-4d54f20b605a1813947363b3b3080957/150/150/Image/Png/noFilter" },
  { name: "Legacy Sunflower", value: 160000, icon: "https://tr.rbxcdn.com/180DAY-24ef0c01caa9cafe127d6207cd5e85ac/150/150/Image/Png/noFilter" },
  { name: "Leifo Fruit", value: 5000, icon: "https://tr.rbxcdn.com/180DAY-09f805485ac43c9735f4b7c6e9c88fd9/150/150/Image/Png/noFilter" },
  { name: "Lemon", value: 350, icon: "https://tr.rbxcdn.com/180DAY-4220675ba8ad3186eb77e60a01a77cf0/150/150/Image/Png/noFilter" },
  { name: "Liberty Lily", value: 30000, icon: "https://tr.rbxcdn.com/180DAY-1bfe9776358a25e0db49ea01c958e6e1/150/150/Image/Png/noFilter" },
  { name: "Lightshoot", value: 40444, icon: "https://tr.rbxcdn.com/180DAY-03a7179e6ec8ecf12d34247fbc0d52ea/150/150/Image/Png/noFilter" },
  { name: "Lilac", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-d50fe2d905af8d1ec67ac2264ed3c90f/150/150/Image/Png/noFilter" },
  { name: "Lily of the Valley", value: 49120, icon: "https://tr.rbxcdn.com/180DAY-dd487c6926b8a93c281929433902e00c/150/150/Image/Png/noFilter" },
  { name: "Lime", value: 1000, icon: "https://tr.rbxcdn.com/180DAY-13360911888f5cc8f2aecbd01e300600/150/150/Image/Png/noFilter" },
  { name: "Lingonberry", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-4b9bbd40c48d1db8c17af4fc3e8bfaca/150/150/Image/Png/noFilter" },
  { name: "Liquorice", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-ea390888ccecf6eaff5a751a71ad6795/150/150/Image/Png/noFilter" },
  { name: "Log Pumpkin", value: 18000, icon: "https://tr.rbxcdn.com/180DAY-8c023c1d58e06d01cb8f302ad1517936/150/150/Image/Png/noFilter" },
  { name: "Loquat", value: 8000, icon: "https://tr.rbxcdn.com/180DAY-b19d38facfd01edf44c734e4a4297472/150/150/Image/Png/noFilter" },
  { name: "Lotus", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-bb803cdc81af9eeea18506a15f4819d3/150/150/Image/Png/noFilter" },
  { name: "Lucky Bamboo", value: 65000, icon: "https://tr.rbxcdn.com/180DAY-22204b7deec5e700ded0adb32d399134/150/150/Image/Png/noFilter" },
  { name: "Lumin Bloom", value: 2000, icon: "https://tr.rbxcdn.com/180DAY-b06765e085dcbd3ba216ed4f2f25e814/150/150/Image/Png/noFilter" },
  { name: "Luminova", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-3ba024db0d9ecb7cccc9ac2b0dc1b778/150/150/Image/Png/noFilter" },
  { name: "Lumira", value: 85000, icon: "https://tr.rbxcdn.com/180DAY-6bbca44cfde909a6f9a5aa339e1e57a3/150/150/Image/Png/noFilter" },
  { name: "Luna Stem", value: 68700, icon: "https://tr.rbxcdn.com/180DAY-915aec994109db389f46261d3ee55530/150/150/Image/Png/noFilter" },
  { name: "Madcrown Vine", value: 156156, icon: "https://tr.rbxcdn.com/180DAY-448346487d7bff1c8efe4f65e1c0ebe5/150/150/Image/Png/noFilter" },
  { name: "Madras Thorn", value: 4000, icon: "https://tr.rbxcdn.com/180DAY-be4fe78c8270bc37403f31dd8fa2179a/150/150/Image/Png/noFilter" },
  { name: "Magma Pepper", value: 222222, icon: "https://tr.rbxcdn.com/180DAY-0fcd39b0a5266bc6f7aab619bf647e28/150/150/Image/Png/noFilter" },
  { name: "Mahogany", value: 77777, icon: "https://tr.rbxcdn.com/180DAY-b6fc2632a7bd5e7453732d6de1970808/150/150/Image/Png/noFilter" },
  { name: "Mammoth Mistletoe", value: 20, icon: "https://tr.rbxcdn.com/180DAY-ab5285657b29542e046b7e799218d4b2/150/150/Image/Png/noFilter" },
  { name: "Mandrake", value: 50000, icon: "https://tr.rbxcdn.com/180DAY-d60372910ebed2aadbf23e0dbd74518d/150/150/Image/Png/noFilter" },
  { name: "Mandrone Berry", value: 65000, icon: "https://tr.rbxcdn.com/180DAY-770ab85646c222384303141830bd63cd/150/150/Image/Png/noFilter" },
  { name: "Mango", value: 6500, icon: "https://tr.rbxcdn.com/180DAY-8f2e4c11b13724fb5d2ba8fdaa82cea9/150/150/Image/Png/noFilter" },
  { name: "Mangosteen", value: 50000, icon: "https://tr.rbxcdn.com/180DAY-3a3390cc15ad95ce96eab37e838e6443/150/150/Image/Png/noFilter" },
  { name: "Mangrove", value: 100000, icon: "https://tr.rbxcdn.com/180DAY-a7acbd7e1a8711804d5530d729ffe99b/150/150/Image/Png/noFilter" },
  { name: "Manuka Flower", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-a442d5a050425190fec6333d0a15b82b/150/150/Image/Png/noFilter" },
  { name: "Maple Apple", value: 77777, icon: "https://tr.rbxcdn.com/180DAY-1e74f4a09928da9a52209fa127eab31a/150/150/Image/Png/noFilter" },
  { name: "Maple Resin", value: 190000, icon: "https://tr.rbxcdn.com/180DAY-f15a4566a420302541de90e3a2c35566/150/150/Image/Png/noFilter" },
  { name: "Marshmallow Root", value: 165000, icon: "https://tr.rbxcdn.com/180DAY-67cd355af3ca85d569901650caa2d0e7/150/150/Image/Png/noFilter" },
  { name: "Mauve Fruit", value: 13500, icon: "https://tr.rbxcdn.com/180DAY-cdbebe71ca91c5b219c38c41b9f63e96/150/150/Image/Png/noFilter" },
  { name: "Mega Mushroom", value: 500, icon: "https://tr.rbxcdn.com/180DAY-a4219bb477f6647b89ed49d147a9a663/150/150/Image/Png/noFilter" },
  { name: "Melon Flower", value: 32500, icon: "https://tr.rbxcdn.com/180DAY-41477a12a0f5dc554e529abbdf85e004/150/150/Image/Png/noFilter" },
  { name: "Merica Mushroom", value: 40000, icon: "https://tr.rbxcdn.com/180DAY-794f365dbaaf96bda65c644c128785f8/150/150/Image/Png/noFilter" },
  { name: "Meyer Lemon", value: 32000, icon: "https://tr.rbxcdn.com/180DAY-aff80cd2a25932c2a128bd2bdba8f757/150/150/Image/Png/noFilter" },
  { name: "Milk Table", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-3c532880e915ebf4e1726a81c580566f/150/150/Image/Png/noFilter" },
  { name: "Mind Root", value: 8000, icon: "https://tr.rbxcdn.com/180DAY-7f04acc861898b942b0492c0afcf7926/150/150/Image/Png/noFilter" },
  { name: "Mini Pumpkin", value: 65000, icon: "https://tr.rbxcdn.com/180DAY-73e7d6aefc8691cd48a231c2147c987b/150/150/Image/Png/noFilter" },
  { name: "Mint", value: 5250, icon: "https://tr.rbxcdn.com/180DAY-ab1d4067af298c2bd36bb4ae350c71d4/150/150/Image/Png/noFilter" },
  { name: "Monarch Jellpod", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-6541572da60fac05eb2f75a8f4f09265/150/150/Image/Png/noFilter" },
  { name: "Monoblooma", value: 22000, icon: "https://tr.rbxcdn.com/180DAY-467f5da49379b31b60858fa524b86e44/150/150/Image/Png/noFilter" },
  { name: "Monster Flower", value: 67666, icon: "https://tr.rbxcdn.com/180DAY-4cf00af9502aeb5cff40a2d67dd133f9/150/150/Image/Png/noFilter" },
  { name: "Monster Plum", value: 20, icon: "https://tr.rbxcdn.com/180DAY-25ca773ab4c4b41c9f9db06de163a0fc/150/150/Image/Png/noFilter" },
  { name: "Moon Blossom", value: 66666, icon: "https://tr.rbxcdn.com/180DAY-24594a21c62e0d84053a50bf354edd43/150/150/Image/Png/noFilter" },
  { name: "Moon Mango", value: 50000, icon: "https://tr.rbxcdn.com/180DAY-a44fd3f3ba2982010a762d7417d5396c/150/150/Image/Png/noFilter" },
  { name: "Moon Melon", value: 18000, icon: "https://tr.rbxcdn.com/180DAY-9526f19cc8d66ade3948a2503d442507/150/150/Image/Png/noFilter" },
  { name: "Moonflower", value: 9500, icon: "https://tr.rbxcdn.com/180DAY-bb95b539315a7fa3b15eda75e2e1f521/150/150/Image/Png/noFilter" },
  { name: "Moonglow", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-827384777030caf71d9079f35114df33/150/150/Image/Png/noFilter" },
  { name: "Multitrap", value: 180000, icon: "https://tr.rbxcdn.com/180DAY-186aa82c1b11fca3328b749e169e4256/150/150/Image/Png/noFilter" },
  { name: "Mummy's Hand", value: 111111, icon: "https://tr.rbxcdn.com/180DAY-b81a745533eb53c88913ee36944e3b98/150/150/Image/Png/noFilter" },
  { name: "Mushroom", value: 151000, icon: "https://tr.rbxcdn.com/180DAY-f87dd469d5f99782a7d4f8388486bb4b/150/150/Image/Png/noFilter" },
  { name: "Mutant Carrot", value: 18000, icon: "https://tr.rbxcdn.com/180DAY-47cdf08078fecfa80f0382b75492b97d/150/150/Image/Png/noFilter" },
  { name: "Naval Wort", value: 150000, icon: "https://tr.rbxcdn.com/180DAY-deca9e50e3ca52303cc708859ebd48b0/150/150/Image/Png/noFilter" },
  { name: "Nectar Thorn", value: 44444, icon: "https://tr.rbxcdn.com/180DAY-f6cd297073339380db2d058ab4cff801/150/150/Image/Png/noFilter" },
  { name: "Nectarine", value: 48000, icon: "https://tr.rbxcdn.com/180DAY-7d8f25be9855a1277c4f487ed01d802d/150/150/Image/Png/noFilter" },
  { name: "Nectarshade", value: 50000, icon: "https://tr.rbxcdn.com/180DAY-8e399624cbf902ff64b731d8d62cb25a/150/150/Image/Png/noFilter" },
  { name: "New Years Tinsel", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-98c18cfdfce08d96a5656ca5c5cd3080/150/150/Image/Png/noFilter" },
  { name: "Nightshade", value: 3500, icon: "https://tr.rbxcdn.com/180DAY-e15f769bf42cba92f6fc6a4a4ecf6d4e/150/150/Image/Png/noFilter" },
  { name: "Noble Flower", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-a43131bafbb19992d0ee4f7ca3a5fc67/150/150/Image/Png/noFilter" },
  { name: "Obby Oddvine", value: 44000, icon: "https://tr.rbxcdn.com/180DAY-7e06699d986e58d8662e1a7cb26b2e98/150/150/Image/Png/noFilter" },
  { name: "Observee", value: 20, icon: "https://tr.rbxcdn.com/180DAY-51258a1ebc2b3f123f17c38a883a5d65/150/150/Image/Png/noFilter" },
  { name: "Octobloom", value: 288888, icon: "https://tr.rbxcdn.com/180DAY-3d1779f7f4052ecb5d67017ba337cab6/150/150/Image/Png/noFilter" },
  { name: "Olive", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-28770854505c68200879d26526ac72ea/150/150/Image/Png/noFilter" },
  { name: "Onion", value: 10000, icon: "https://tr.rbxcdn.com/180DAY-43a70a54d5ff8615f997a0948b0eabaa/150/150/Image/Png/noFilter" },
  { name: "Orange Delight", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-73b02227603f7b1f256abd6e34ad3cc3/150/150/Image/Png/noFilter" },
  { name: "Orange Tulip", value: 850, icon: "https://tr.rbxcdn.com/180DAY-1f0f2ffac9eb2e9e704d47ba4c4ca65b/150/150/Image/Png/noFilter" },
  { name: "Ornament Vine", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-bb97364cb8166833d5d3f35d7135e303/150/150/Image/Png/noFilter" },
  { name: "Papaya", value: 1000, icon: "https://tr.rbxcdn.com/180DAY-e6231d5ab68cf0be8a51eb547ee44093/150/150/Image/Png/noFilter" },
  { name: "Paradise Petal", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-f394d3894122adee37d6db4be92074e0/150/150/Image/Png/noFilter" },
  { name: "Parasol Flower", value: 200000, icon: "https://tr.rbxcdn.com/180DAY-5351245d2e3166f6b5e176376225babd/150/150/Image/Png/noFilter" },
  { name: "Parsley", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-f2dc07842b3e945001230c4d6a3281a8/150/150/Image/Png/noFilter" },
  { name: "Passionfruit", value: 3550, icon: "https://tr.rbxcdn.com/180DAY-bc5a58c19df988d30a62cab6dd0bcfc8/150/150/Image/Png/noFilter" },
  { name: "Peace Lily", value: 24000, icon: "https://tr.rbxcdn.com/180DAY-b2536b61482a76c530e7c104e41a782c/150/150/Image/Png/noFilter" },
  { name: "Peach", value: 300, icon: "https://tr.rbxcdn.com/180DAY-ed964da9a420f5bf44d0d791ef5d1bde/150/150/Image/Png/noFilter" },
  { name: "Peach Sun", value: 40500, icon: "https://tr.rbxcdn.com/180DAY-5d4aa7cff8ad78b3766a4cfd09d20a11/150/150/Image/Png/noFilter" },
  { name: "Peacock Tail", value: 150000, icon: "https://tr.rbxcdn.com/180DAY-e7332faeac34b9b8765644fc457bae6c/150/150/Image/Png/noFilter" },
  { name: "Peanut", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-469e4d8c75d961a3303f62a9115c6c3c/150/150/Image/Png/noFilter" },
  { name: "Pear", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-a166ae0a3d0ce3707385ab28261291f2/150/150/Image/Png/noFilter" },
  { name: "Pecan", value: 100000, icon: "https://tr.rbxcdn.com/180DAY-bdd7642b7974a903d7dce1064e90b2f9/150/150/Image/Png/noFilter" },
  { name: "Pepper", value: 8000, icon: "https://tr.rbxcdn.com/180DAY-f63b3d2717b04989a0e10b4a8d997493/150/150/Image/Png/noFilter" },
  { name: "Peppermint Pop", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-7239e6d39a9865c73abfe4e213d14341/150/150/Image/Png/noFilter" },
  { name: "Peppermint Vine", value: 177777, icon: "https://tr.rbxcdn.com/180DAY-8f78b436470b087d17582de05ef64ced/150/150/Image/Png/noFilter" },
  { name: "Persimmon", value: 60000, icon: "https://tr.rbxcdn.com/180DAY-6d2c38d42f4b27e6516d255f042fa771/150/150/Image/Png/noFilter" },
  { name: "Pineapple", value: 2000, icon: "https://tr.rbxcdn.com/180DAY-815fd09492f52ac8b5aa96dd916564c0/150/150/Image/Png/noFilter" },
  { name: "Pink Lily", value: 65000, icon: "https://tr.rbxcdn.com/180DAY-a7517defa1cca940a48d42ea0f673821/150/150/Image/Png/noFilter" },
  { name: "Pink Rose", value: 120000, icon: "https://tr.rbxcdn.com/180DAY-12382f1d3167a7e821938955e631c3d2/150/150/Image/Png/noFilter" },
  { name: "Pink Tulip", value: 850, icon: "https://tr.rbxcdn.com/180DAY-f5bb10fce0aeff46cb054a6def4e922f/150/150/Image/Png/noFilter" },
  { name: "Pinkside Dandelion", value: 177000, icon: "https://tr.rbxcdn.com/180DAY-a878d0343a26f44baeee8c595b40fc0f/150/150/Image/Png/noFilter" },
  { name: "Pitcher Plant", value: 52000, icon: "https://tr.rbxcdn.com/180DAY-dcc57500e964f6920b7511c8ce760a9b/150/150/Image/Png/noFilter" },
  { name: "Pixie Faern", value: 30000, icon: "https://tr.rbxcdn.com/180DAY-c63c2292959ac60ee4f108fcd28347b4/150/150/Image/Png/noFilter" },
  { name: "Plumwillow", value: 111111, icon: "https://tr.rbxcdn.com/180DAY-562d787841543d8ee2f0f60354ccadaf/150/150/Image/Png/noFilter" },
  { name: "Pohutukawa", value: 267000, icon: "https://tr.rbxcdn.com/180DAY-2c1d626d108efb5d71a6046a89e7fe3b/150/150/Image/Png/noFilter" },
  { name: "Poinsettia", value: 30000, icon: "https://tr.rbxcdn.com/180DAY-fbaec6ff8dd560d1fbe3606355107be2/150/150/Image/Png/noFilter" },
  { name: "Poison Apple", value: 111111, icon: "https://tr.rbxcdn.com/180DAY-471637ca0d4540ccff0d5806734daef9/150/150/Image/Png/noFilter" },
  { name: "Pollen Cone", value: 120000, icon: "https://tr.rbxcdn.com/180DAY-98060c2dd366ba1b0d490375c82fd59c/150/150/Image/Png/noFilter" },
  { name: "Pollen Puffball", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-dde9c3d3e4b415ef898166c95e07aaff/150/150/Image/Png/noFilter" },
  { name: "Pollenvine", value: 144444, icon: "https://tr.rbxcdn.com/180DAY-59d2e9cd5075d34f23f8c19a003fd59e/150/150/Image/Png/noFilter" },
  { name: "Pomegranate", value: 33333, icon: "https://tr.rbxcdn.com/180DAY-90050d082069f1f0e8109434f39bc6da/150/150/Image/Png/noFilter" },
  { name: "Poseidon Plant", value: 65555, icon: "https://tr.rbxcdn.com/180DAY-5095a1574933893372497df09aba6f71/150/150/Image/Png/noFilter" },
  { name: "Potato", value: 90000, icon: "https://tr.rbxcdn.com/180DAY-a19e8448812b83c7cecd9f2f810a0638/150/150/Image/Png/noFilter" },
  { name: "Pricklefruit", value: 80000, icon: "https://tr.rbxcdn.com/180DAY-6957c2cb03ef33d838a1213a97eeb184/150/150/Image/Png/noFilter" },
  { name: "Prickly Pear", value: 7000, icon: "https://tr.rbxcdn.com/180DAY-e0cf316e9dcc7fe8363ff7150fce43ff/150/150/Image/Png/noFilter" },
  { name: "Princess Thorn", value: 111111, icon: "https://tr.rbxcdn.com/180DAY-4e31d168067cc50c61de6f77933b95aa/150/150/Image/Png/noFilter" },
  { name: "Protea", value: 50000, icon: "https://tr.rbxcdn.com/180DAY-23782aaee6ad705385023c59465dadf1/150/150/Image/Png/noFilter" },
  { name: "Pumpkin", value: 3400, icon: "https://tr.rbxcdn.com/180DAY-5d5b0f7de5b309e69edd1bc9550ee504/150/150/Image/Png/noFilter" },
  { name: "Purple Cabbage", value: 500, icon: "https://tr.rbxcdn.com/180DAY-b0551337aef57d76def0a79f45f21813/150/150/Image/Png/noFilter" },
  { name: "Purple Dahlia", value: 75000, icon: "https://tr.rbxcdn.com/180DAY-f861fb4ec03d458e58b1caa4a699fd25/150/150/Image/Png/noFilter" },
  { name: "Purple Treeshroom", value: 144000, icon: "https://tr.rbxcdn.com/180DAY-55ec03689283b3de863ed3c7a3cf8d4d/150/150/Image/Png/noFilter" },
  { name: "Pyracantha", value: 42000, icon: "https://tr.rbxcdn.com/180DAY-325c2ddf7ab6c4ad2f38d0bdf8b4137a/150/150/Image/Png/noFilter" },
  { name: "Queen Fruit", value: 4500, icon: "https://tr.rbxcdn.com/180DAY-4ea73f5757aaf94aa31b58b721cbf841/150/150/Image/Png/noFilter" },
  { name: "Queen of the Forest", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-24a55e86d32d0d0041e5466f8449e546/150/150/Image/Png/noFilter" },
  { name: "Radish", value: 40000, icon: "https://tr.rbxcdn.com/180DAY-4055db27f6a7ac031bf0c7df63498ec0/150/150/Image/Png/noFilter" },
  { name: "Rafflesia", value: 3500, icon: "https://tr.rbxcdn.com/180DAY-087e8454f6e6e14d995d1fb906c90425/150/150/Image/Png/noFilter" },
  { name: "Rambutan", value: 20, icon: "https://tr.rbxcdn.com/180DAY-8ee034150a857628aeb4816c8fcc1690/150/150/Image/Png/noFilter" },
  { name: "Raspberry", value: 100, icon: "https://tr.rbxcdn.com/180DAY-c8f67c40d4ad0c0a56816b07d8dc2706/150/150/Image/Png/noFilter" },
  { name: "Red Lollipop", value: 50000, icon: "https://tr.rbxcdn.com/180DAY-ca8410ab32af7f95fc5ad748e04c19b8/150/150/Image/Png/noFilter" },
  { name: "Reindeer Root", value: 150000, icon: "https://tr.rbxcdn.com/180DAY-515b31319ac7b5441cbee96bcdf6410f/150/150/Image/Png/noFilter" },
  { name: "Rhubarb", value: 15000, icon: "https://tr.rbxcdn.com/180DAY-685db07d6eda29bc46a489418f812221/150/150/Image/Png/noFilter" },
  { name: "Romanesco", value: 166000, icon: "https://tr.rbxcdn.com/180DAY-1dbe3448fcb963a106c5bd9f5ac87b8f/150/150/Image/Png/noFilter" },
  { name: "Rose", value: 5000, icon: "https://tr.rbxcdn.com/180DAY-55452ca5e15d56f38ead46fd414fb97d/150/150/Image/Png/noFilter" },
  { name: "Rosemary", value: 98000, icon: "https://tr.rbxcdn.com/180DAY-94e67d1e35670371cc05cf6b5a1e0265/150/150/Image/Png/noFilter" },
  { name: "Rosy Delight", value: 69000, icon: "https://tr.rbxcdn.com/180DAY-d9baf0eb995965cfb4bee8cfb7dd95ab/150/150/Image/Png/noFilter" },
  { name: "Royal Jelly Cup", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-a70a1ae8c2c3a2face6cff5add4e7887/150/150/Image/Png/noFilter" },
  { name: "Royal Rose", value: 120000, icon: "https://tr.rbxcdn.com/180DAY-55c8d57218a523fd0887133eafea1165/150/150/Image/Png/noFilter" },
  { name: "Sakura Bush", value: 28575, icon: "https://tr.rbxcdn.com/180DAY-a6701db9d15f8c2e4a3169417116b45e/150/150/Image/Png/noFilter" },
  { name: "Saskia", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-467ac3bb523f47151ca1e0b9ab8bd811/150/150/Image/Png/noFilter" },
  { name: "Seer Vine", value: 88888, icon: "https://tr.rbxcdn.com/180DAY-f2db33597a379b1d9d35973327e37601/150/150/Image/Png/noFilter" },
  { name: "Serenity", value: 30000, icon: "https://tr.rbxcdn.com/180DAY-9ef3c91155d392ebf0cfff949dd503c2/150/150/Image/Png/noFilter" },
  { name: "Severed Spine", value: 98980, icon: "https://tr.rbxcdn.com/180DAY-5ba61acd2a497e408735234837745241/150/150/Image/Png/noFilter" },
  { name: "Shadow Buttercup", value: 600, icon: "https://tr.rbxcdn.com/180DAY-1c7bc6ae725ce338d203501d589e611f/150/150/Image/Png/noFilter" },
  { name: "Sherrybloom", value: 80000, icon: "https://tr.rbxcdn.com/180DAY-71ffbabe8c6f12fb2ee26ef020e26aa9/150/150/Image/Png/noFilter" },
  { name: "Shimmersprout", value: 10000, icon: "https://tr.rbxcdn.com/180DAY-616cfc1eea374ee4457cfa4c07f14d38/150/150/Image/Png/noFilter" },
  { name: "Sinisterdrip", value: 69000, icon: "https://tr.rbxcdn.com/180DAY-ae3c8d6afd817eb1ebfda63a240101af/150/150/Image/Png/noFilter" },
  { name: "Skull Flower", value: 8000, icon: "https://tr.rbxcdn.com/180DAY-e8924d77e8a03c9445aa73e8e76eb6f7/150/150/Image/Png/noFilter" },
  { name: "Snakeskin Tulip", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-e6ed9bd1f68c5327d73e7a40d3d4da1f/150/150/Image/Png/noFilter" },
  { name: "Snaparino Beanarini", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-cac0292dc43506bfa9149e99357b301a/150/150/Image/Png/noFilter" },
  { name: "Snowman Sprout", value: 165000, icon: "https://tr.rbxcdn.com/180DAY-fd75aafa5f953c680e4a9f87595a7051/150/150/Image/Png/noFilter" },
  { name: "Soft Sunshine", value: 45000, icon: "https://tr.rbxcdn.com/180DAY-88490b833220a4bf9d178a168cc06cb0/150/150/Image/Png/noFilter" },
  { name: "Soul Fruit", value: 7750, icon: "https://tr.rbxcdn.com/180DAY-4bc3df97456e0cd5a8d18c309fe73c93/150/150/Image/Png/noFilter" },
  { name: "Sour Lemon", value: 250000, icon: "https://tr.rbxcdn.com/180DAY-a2f01410112cb8a673583cba29d3af7c/150/150/Image/Png/noFilter" },
  { name: "Sparkle Slice", value: 125000, icon: "https://tr.rbxcdn.com/180DAY-61fdb4db09c9e4a2080bae79d7115bc9/150/150/Image/Png/noFilter" },
  { name: "Speargrass", value: 51000, icon: "https://tr.rbxcdn.com/180DAY-d4f19c5f37f426647bf54976f6cb9ec3/150/150/Image/Png/noFilter" },
  { name: "Spectralis", value: 7500, icon: "https://tr.rbxcdn.com/180DAY-6b5b660710755c09c4d5d55293d23be7/150/150/Image/Png/noFilter" },
  { name: "Spider Vine", value: 44444, icon: "https://tr.rbxcdn.com/180DAY-209ef235fd6e266e62e4e3bf12d423d0/150/150/Image/Png/noFilter" },
  { name: "Spiked Mango", value: 67500, icon: "https://tr.rbxcdn.com/180DAY-f49eaf91ec767e80fa1330173462ab78/150/150/Image/Png/noFilter" },
  { name: "Spirit Flower", value: 135000, icon: "https://tr.rbxcdn.com/180DAY-5afa2a617a574bfac9119cf5f8976315/150/150/Image/Png/noFilter" },
  { name: "Spirit Lantern", value: 7500, icon: "https://tr.rbxcdn.com/180DAY-52feb5fe403c767a77746706c5d1f6e5/150/150/Image/Png/noFilter" },
  { name: "Spirit Sparkle", value: 200000, icon: "https://tr.rbxcdn.com/180DAY-9bd84c0327cec83cc356d233fd142730/150/150/Image/Png/noFilter" },
  { name: "Spring Onion", value: 30000, icon: "https://tr.rbxcdn.com/180DAY-49d4e97e8aec95b7b72037f71094c394/150/150/Image/Png/noFilter" },
  { name: "Star Palm", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-9dfb3848b895984fa8c8f21b3676305a/150/150/Image/Png/noFilter" },
  { name: "Starfruit", value: 15000, icon: "https://tr.rbxcdn.com/180DAY-91817933f404a7098fd84a760658d80b/150/150/Image/Png/noFilter" },
  { name: "Stinger Lily", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-282bdf678b89513a7b4e404ce2f73284/150/150/Image/Png/noFilter" },
  { name: "Stinger Reed", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-d742741a7fea889ffa8e9e83282b51c5/150/150/Image/Png/noFilter" },
  { name: "Stingpetal", value: 30000, icon: "https://tr.rbxcdn.com/180DAY-3872a9fb5eed6496275b156e1a0858b4/150/150/Image/Png/noFilter" },
  { name: "Stonebite", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-a15eb03513568d7669111f2c6d312cc7/150/150/Image/Png/noFilter" },
  { name: "Strange Man's Wheat", value: 4000, icon: "https://tr.rbxcdn.com/180DAY-a2f73d24e4d375f58db529d903995095/150/150/Image/Png/noFilter" },
  { name: "Strawberry", value: 15, icon: "https://tr.rbxcdn.com/180DAY-40110b2c97a24c14386daf4e11e41c09/150/150/Image/Png/noFilter" },
  { name: "Succulent", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-5996e1d3ba983b37354867c87eade6e3/150/150/Image/Png/noFilter" },
  { name: "Sugar Apple", value: 48000, icon: "https://tr.rbxcdn.com/180DAY-6dc328fedb24908c952eed209cb30467/150/150/Image/Png/noFilter" },
  { name: "Sugar Melon", value: 40000, icon: "https://tr.rbxcdn.com/180DAY-c4332e7f99f6f0256583a56567fa3510/150/150/Image/Png/noFilter" },
  { name: "Sugar Snapdragon", value: 77000, icon: "https://tr.rbxcdn.com/180DAY-1ce23a14e34e9a831042ab06658a71db/150/150/Image/Png/noFilter" },
  { name: "Sugarcane", value: 4500, icon: "https://tr.rbxcdn.com/180DAY-1dee2d815af27719bca1a2ed6c358f9e/150/150/Image/Png/noFilter" },
  { name: "Sugarglaze", value: 70000, icon: "https://tr.rbxcdn.com/180DAY-c6d7f32cc99c9b2fe68cf44852626324/150/150/Image/Png/noFilter" },
  { name: "Sunbulb", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-c4f1703a4e900d90dd20132cf4d22ac2/150/150/Image/Png/noFilter" },
  { name: "Suncoil", value: 80000, icon: "https://tr.rbxcdn.com/180DAY-37059a9225e7085daa43e7b0163e0301/150/150/Image/Png/noFilter" },
  { name: "Sundew", value: 40000, icon: "https://tr.rbxcdn.com/180DAY-cef6590c69734bb4af28b8b0adc6d239/150/150/Image/Png/noFilter" },
  { name: "Sunflower", value: 55555, icon: "https://tr.rbxcdn.com/180DAY-d702d2b0b94bd7a01d4a27951aae5755/150/150/Image/Png/noFilter" },
  { name: "Sweetheart Flower", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-6065c6dd9191cc4a52f97f4ee21e6747/150/150/Image/Png/noFilter" },
  { name: "Taco Fern", value: 75000, icon: "https://tr.rbxcdn.com/180DAY-cb3277c8abceeb7efa67ff9cfb2aeb1a/150/150/Image/Png/noFilter" },
  { name: "Taffy Tree", value: 37777, icon: "https://tr.rbxcdn.com/180DAY-68f1a7533dcf1177b66359b4680c13ed/150/150/Image/Png/noFilter" },
  { name: "Tall Asparagus", value: 100000, icon: "https://tr.rbxcdn.com/180DAY-7389373d10301794064975b7e1a7528c/150/150/Image/Png/noFilter" },
  { name: "Taro Flower", value: 120000, icon: "https://tr.rbxcdn.com/180DAY-86219acee574e55079c562866ea83480/150/150/Image/Png/noFilter" },
  { name: "Thornspire", value: 100000, icon: "https://tr.rbxcdn.com/180DAY-f2fa390d57bb647626332253fede3c62/150/150/Image/Png/noFilter" },
  { name: "Tinsel", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-16c729aa563e853c2771f3050400010b/150/150/Image/Png/noFilter" },
  { name: "Tomato", value: 30, icon: "https://tr.rbxcdn.com/180DAY-e87e298e8a8c61a8578b6fca6d20efca/150/150/Image/Png/noFilter" },
  { name: "Torchflare", value: 66250, icon: "https://tr.rbxcdn.com/180DAY-e69410449f3c44562eec51c5497e959c/150/150/Image/Png/noFilter" },
  { name: "Tranquil Bloom", value: 93333, icon: "https://tr.rbxcdn.com/180DAY-ad1695d8091b5b115fc9a478aa216ecf/150/150/Image/Png/noFilter" },
  { name: "Traveler's Fruit", value: 59000, icon: "https://tr.rbxcdn.com/180DAY-9fa17e24cd437d41ae8b9af91237c8d9/150/150/Image/Png/noFilter" },
  { name: "Trinity Fruit", value: 155555, icon: "https://tr.rbxcdn.com/180DAY-1f20ce7fcf99eb22a392061d23cbbf23/150/150/Image/Png/noFilter" },
  { name: "Turkish Hazel", value: 2000, icon: "https://tr.rbxcdn.com/180DAY-c7a4659ed4d212187a26947e71210996/150/150/Image/Png/noFilter" },
  { name: "Turnip", value: 12000, icon: "https://tr.rbxcdn.com/180DAY-3b5bc6b09aec74364c0ca39eae452598/150/150/Image/Png/noFilter" },
  { name: "Twisted Tangle", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-299d70df8229cd37cc74b50bed595a65/150/150/Image/Png/noFilter" },
  { name: "Untold Bell", value: 94000, icon: "https://tr.rbxcdn.com/180DAY-a0817e3161f47a6acfa52e9b15fc0f6d/150/150/Image/Png/noFilter" },
  { name: "Urchin Plant", value: 111111, icon: "https://tr.rbxcdn.com/180DAY-e1285a1915d5f866545fced492cbfe8f/150/150/Image/Png/noFilter" },
  { name: "Vampbloom", value: 4500, icon: "https://tr.rbxcdn.com/180DAY-7fe002877336254712758f760dd6fc26/150/150/Image/Png/noFilter" },
  { name: "Veinpetal", value: 60000, icon: "https://tr.rbxcdn.com/180DAY-c7faf096fa23e911a43b8afe4366d67f/150/150/Image/Png/noFilter" },
  { name: "Venus Fly Trap", value: 85000, icon: "https://tr.rbxcdn.com/180DAY-a48a69695d680821bb79ef7b7fad382f/150/150/Image/Png/noFilter" },
  { name: "Viburnum Berry", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-b14ae02d1315ea735871b854e017cd30/150/150/Image/Png/noFilter" },
  { name: "Violet Corn", value: 50000, icon: "https://tr.rbxcdn.com/180DAY-c9abf90577b22b69d40b4bbb0c63b996/150/150/Image/Png/noFilter" },
  { name: "Waddling Willow", value: 200000, icon: "https://tr.rbxcdn.com/180DAY-ab2fbfa30a22aaed262bada190c9c631/150/150/Image/Png/noFilter" },
  { name: "Walnut", value: 5000, icon: "https://tr.rbxcdn.com/180DAY-2662e3af62d14324dc9efcfe379abc13/150/150/Image/Png/noFilter" },
  { name: "Watermelon", value: 3000, icon: "https://tr.rbxcdn.com/180DAY-25611f19e72adcc29e92cbd7b3838265/150/150/Image/Png/noFilter" },
  { name: "Weeping Branch", value: 155555, icon: "https://tr.rbxcdn.com/180DAY-7dee058782e56b8db676addc91b7203d/150/150/Image/Png/noFilter" },
  { name: "Wereplant", value: 170000, icon: "https://tr.rbxcdn.com/180DAY-84262d1bc875364515473a1bb4886b8a/150/150/Image/Png/noFilter" },
  { name: "White Mulberry", value: 3000, icon: "https://tr.rbxcdn.com/180DAY-2750cbe58d9a22f8d0af6866331d4ea5/150/150/Image/Png/noFilter" },
  { name: "Wild Berry", value: 2000, icon: "https://tr.rbxcdn.com/180DAY-b97d7eb7bf01f21a2c8d975ff6c7434d/150/150/Image/Png/noFilter" },
  { name: "Wild Carrot", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-74abf6e552237785c9fd398895a86910/150/150/Image/Png/noFilter" },
  { name: "Wild Frond", value: 13500, icon: "https://tr.rbxcdn.com/180DAY-d54f08a952601a3611705cd080d40488/150/150/Image/Png/noFilter" },
  { name: "Wild Pineapple", value: 88888, icon: "https://tr.rbxcdn.com/180DAY-4fc4fa9450305425d5b311581ed28231/150/150/Image/Png/noFilter" },
  { name: "Willowberry", value: 7500, icon: "https://tr.rbxcdn.com/180DAY-b64b29562509882177f0343ba45e9aef/150/150/Image/Png/noFilter" },
  { name: "Wintercreep", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-8fb1d4fc994b5b71f9c8f1faac7d9274/150/150/Image/Png/noFilter" },
  { name: "Wisp Flower", value: 70000, icon: "https://tr.rbxcdn.com/180DAY-d75d05c09383e40a92b6981146e38bdc/150/150/Image/Png/noFilter" },
  { name: "Wispwing", value: 180000, icon: "https://tr.rbxcdn.com/180DAY-596b05454e7c07aa2d1135190ab47893/150/150/Image/Png/noFilter" },
  { name: "Witch Cap", value: 77777, icon: "https://tr.rbxcdn.com/180DAY-7e052bd4dabd76ef10621afc375e9cd0/150/150/Image/Png/noFilter" },
  { name: "Witches Hair", value: 35000, icon: "https://tr.rbxcdn.com/180DAY-5bc65620a70b3f969913b0ce853fe32b/150/150/Image/Png/noFilter" },
  { name: "Woodbine", value: 45000, icon: "https://tr.rbxcdn.com/180DAY-620c622f5182780c24ac63e698e1bab7/150/150/Image/Png/noFilter" },
  { name: "Wreath Span", value: 20000, icon: "https://tr.rbxcdn.com/180DAY-bfbd07c282eb68c33c0251ffa9763a15/150/150/Image/Png/noFilter" },
  { name: "Wyrmvine", value: 120000, icon: "https://tr.rbxcdn.com/180DAY-b77a9214382dde0e68b141772322ea23/150/150/Image/Png/noFilter" },
  { name: "Yarrow", value: 170000, icon: "https://tr.rbxcdn.com/180DAY-b22e0f8d86244d955797e53c81576fb1/150/150/Image/Png/noFilter" },
  { name: "Yellow Core", value: 44440, icon: "https://tr.rbxcdn.com/180DAY-ae5b3f3104d1109ece535d1ca83f8363/150/150/Image/Png/noFilter" },
  { name: "Zebrazinkle", value: 260000, icon: "https://tr.rbxcdn.com/180DAY-2bc0b503f3b64389c0eef0beb6cc963b/150/150/Image/Png/noFilter" },
  { name: "Zen Rocks", value: 150000, icon: "https://tr.rbxcdn.com/180DAY-64861298fa2096ceb3bfdf40f222e231/150/150/Image/Png/noFilter" },
  { name: "Zenflare", value: 25000, icon: "https://tr.rbxcdn.com/180DAY-2bc02e7e05b50ce5d1305f54cc742900/150/150/Image/Png/noFilter" },
  { name: "Zombie Fruit", value: 60000, icon: "https://tr.rbxcdn.com/180DAY-67b8f1d1ce5cc81d61a43d6ca9e2ac06/150/150/Image/Png/noFilter" },
  { name: "Zucchini", value: 144321, icon: "https://tr.rbxcdn.com/180DAY-ccd5fd402ce9721a9801d59f6cf63700/150/150/Image/Png/noFilter" }
];

const cropTraits = [
  { name: "Apple", icon: "🍏" }, { name: "Berry", icon: "🍇" }, { name: "Candy", icon: "🍬" },
  { name: "Christmas", icon: "🎄" }, { name: "Fall", icon: "🍁" }, { name: "Flower", icon: "🌸" },
  { name: "Fruit", icon: "🍎" }, { name: "Fungus", icon: "🍄" }, { name: "Leafy", icon: "🌿" },
  { name: "Magical", icon: "✨" }, { name: "Night", icon: "🌙" }, { name: "Nutty", icon: "🌰" },
  { name: "Prehistoric", icon: "🦕" }, { name: "Prickly", icon: "🌵" }, { name: "Root", icon: "🥕" },
  { name: "Safari", icon: "🦓" }, { name: "Sour", icon: "🍋" }, { name: "Spicy", icon: "🌶️" },
  { name: "Spooky", icon: "🎃" }, { name: "Stalky", icon: "🎋" }, { name: "Summer", icon: "☀️" },
  { name: "Sweet", icon: "🍯" }, { name: "Toxic", icon: "☠️" }, { name: "Tropical", icon: "🌴" },
  { name: "Vegetable", icon: "🥦" }, { name: "Woody", icon: "🪵" }, { name: "Zen", icon: "🧘" }
];

const mutations = [
  { name: "Abyssal", mult: "x240" },
  { name: "Acidic", mult: "x15" },
  { name: "Affluent", mult: "x70" },
  { name: "Alienated", mult: "x25" },
  { name: "Alienlike", mult: "x100" },
  { name: "Amber", mult: "x10" },
  { name: "AncientAmber", mult: "x50" },
  { name: "Arctic", mult: "x12" },
  { name: "Arid", mult: "x6" },
  { name: "Aromatic", mult: "x3" },
  { name: "AscendedChakra", mult: "x230" },
  { name: "Ash", mult: "x4" },
  { name: "Astral", mult: "x365" },
  { name: "Aurora", mult: "x90" },
  { name: "Azure", mult: "x75" },
  { name: "Batty", mult: "x45" },
  { name: "Beanbound", mult: "x100" },
  { name: "Biohazard", mult: "x157" },
  { name: "Blackout", mult: "x95" },
  { name: "Blazing", mult: "x52" },
  { name: "Blight", mult: "x8" },
  { name: "Blitzshock", mult: "x50" },
  { name: "Blizzard", mult: "x40" },
  { name: "Bloodlit", mult: "x4" },
  { name: "Bloom", mult: "x8" },
  { name: "Blossoming", mult: "x50" },
  { name: "Boil", mult: "x15" },
  { name: "Brainrot", mult: "x100" },
  { name: "Brewed", mult: "x7" },
  { name: "Burnt", mult: "x4" },
  { name: "Candy", mult: "x10" },
  { name: "Celestial", mult: "x120" },
  { name: "Ceramic", mult: "x32" },
  { name: "Chakra", mult: "x15" },
  { name: "Charcoal", mult: "x6" },
  { name: "Chilled", mult: "x2" },
  { name: "Choc", mult: "x2" },
  { name: "Clay", mult: "x5" },
  { name: "Clockwork", mult: "x15" },
  { name: "Cloudtouched", mult: "x5" },
  { name: "Coin", mult: "x3" },
  { name: "Confection", mult: "x18" },
  { name: "Contagion", mult: "x205" },
  { name: "Cooked", mult: "x10" },
  { name: "Corrosive", mult: "x40" },
  { name: "Corrupt", mult: "x20" },
  { name: "CorruptChakra", mult: "x15" },
  { name: "CorruptFoxfireChakra", mult: "x90" },
  { name: "Cosmic", mult: "x240" },
  { name: "Cracked", mult: "x4" },
  { name: "Crystalized", mult: "x25" },
  { name: "Cute", mult: "x20" },
  { name: "Cyclonic", mult: "x50" },
  { name: "Dawnbound", mult: "x150" },
  { name: "Desolate", mult: "x50" },
  { name: "Disco", mult: "x125" },
  { name: "Drenched", mult: "x5" },
  { name: "Eclipsed", mult: "x20" },
  { name: "Eggnog", mult: "x8" },
  { name: "Enchanted", mult: "x50" },
  { name: "Enlightened", mult: "x35" },
  { name: "Extraterrestrial", mult: "x130" },
  { name: "Fall", mult: "x4" },
  { name: "Festive", mult: "x24" },
  { name: "Fiery", mult: "x2" },
  { name: "Fierywork", mult: "x30" },
  { name: "Firework", mult: "x26" },
  { name: "Flaming", mult: "x25" },
  { name: "Floral", mult: "x25" },
  { name: "Fortune", mult: "x50" },
  { name: "FoxfireChakra", mult: "x90" },
  { name: "Fractured", mult: "x92" },
  { name: "Fried", mult: "x8" },
  { name: "Friendbound", mult: "x70" },
  { name: "Frozen", mult: "x10" },
  { name: "Galactic", mult: "x120" },
  { name: "Gale", mult: "x25" },
  { name: "Geode", mult: "x5" },
  { name: "Ghostly", mult: "x25" },
  { name: "Gilded", mult: "x15" },
  { name: "Glacial", mult: "x25" },
  { name: "Glimmering", mult: "x2" },
  { name: "Glitched", mult: "x85" },
  { name: "Gloom", mult: "x30" },
  { name: "Glossy", mult: "x30" },
  { name: "Gnomed", mult: "x15" },
  { name: "Goldsparkle", mult: "x500" },
  { name: "Gourmet", mult: "x37" },
  { name: "Graceful", mult: "x77" },
  { name: "Grim", mult: "x170" },
  { name: "Gummy", mult: "x4" },
  { name: "HarmonisedChakra", mult: "x35" },
  { name: "HarmonisedFoxfireChakra", mult: "x190" },
  { name: "Haze", mult: "x6" },
  { name: "Heartbound", mult: "x100" },
  { name: "Heartstruck", mult: "x3" },
  { name: "Heavenly", mult: "x5" },
  { name: "Honeygem", mult: "x33" },
  { name: "HoneyGlazed", mult: "x5" },
  { name: "Infected", mult: "x75" },
  { name: "Infernal", mult: "x180" },
  { name: "Jackpot", mult: "x15" },
  { name: "Jellygem", mult: "x25" },
  { name: "Junkshock", mult: "x45" },
  { name: "Leeched", mult: "x70" },
  { name: "Lightcycle", mult: "x50" },
  { name: "Luck", mult: "x3" },
  { name: "Luminous", mult: "x50" },
  { name: "Lush", mult: "x3" },
  { name: "Maelstrom", mult: "x100" },
  { name: "Meatball", mult: "x3" },
  { name: "Meteoric", mult: "x125" },
  { name: "MindBender", mult: "x175" },
  { name: "Mineral", mult: "x18" },
  { name: "Mirage", mult: "x25" },
  { name: "Moist", mult: "x3" },
  { name: "Molten", mult: "x25" },
  { name: "Monsoon", mult: "x50" },
  { name: "Moonbled", mult: "x25" },
  { name: "Moonlit", mult: "x2" },
  { name: "Necrotic", mult: "x8" },
  { name: "Nocturnal", mult: "x4" },
  { name: "Oil", mult: "x15" },
  { name: "OilBoil", mult: "x30" },
  { name: "OldAmber", mult: "x20" },
  { name: "Opulent", mult: "x5" },
  { name: "Ornamented", mult: "x10" },
  { name: "Paradisal", mult: "x100" },
  { name: "Pasta", mult: "x3" },
  { name: "Peppermint", mult: "x4" },
  { name: "Pestilent", mult: "x8" },
  { name: "Plagued", mult: "x102" },
  { name: "Plasma", mult: "x5" },
  { name: "Pollinated", mult: "x3" },
  { name: "Pollinated_Fair", mult: "x1" },
  { name: "Pollinated_Godly", mult: "x1" },
  { name: "Pollinated_Good", mult: "x1" },
  { name: "Pollinated_Poor", mult: "x1" },
  { name: "Radioactive", mult: "x55" },
  { name: "Riptide", mult: "x80" },
  { name: "Rot", mult: "x8" },
  { name: "Sandy", mult: "x3" },
  { name: "Sauce", mult: "x3" },
  { name: "Severed", mult: "x40" },
  { name: "Shadowbound", mult: "x70" },
  { name: "Shocked", mult: "x100" },
  { name: "Sizzled", mult: "x18" },
  { name: "Slashbound", mult: "x95" },
  { name: "Sleepy", mult: "x3" },
  { name: "Sliced", mult: "x50" },
  { name: "Smoldering", mult: "x66" },
  { name: "Snowtouched", mult: "x5" },
  { name: "Snowy", mult: "x2" },
  { name: "Spaghetti", mult: "x15" },
  { name: "Spooky", mult: "x8" },
  { name: "Spotty", mult: "x33" },
  { name: "Stampede", mult: "x50" },
  { name: "Static", mult: "x8" },
  { name: "Stormbound", mult: "x270" },
  { name: "Stormcharged", mult: "x180" },
  { name: "Subzero", mult: "x40" },
  { name: "Sundried", mult: "x85" },
  { name: "SunScorched", mult: "x32" },
  { name: "Supernatural", mult: "x37" },
  { name: "Tempered", mult: "x6" },
  { name: "Tempestuous", mult: "x12" },
  { name: "Terran", mult: "x75" },
  { name: "Touchdown", mult: "x105" },
  { name: "Toxic", mult: "x15" },
  { name: "Tranquil", mult: "x20" },
  { name: "Twilight", mult: "x4" },
  { name: "Twisted", mult: "x5" },
  { name: "Typhoon", mult: "x30" },
  { name: "Umbral", mult: "x30" },
  { name: "Vamp", mult: "x3" },
  { name: "Verdant", mult: "x4" },
  { name: "Voidtouched", mult: "x135" },
  { name: "Volcanic", mult: "x25" },
  { name: "Warped", mult: "x75" },
  { name: "Webbed", mult: "x8" },
  { name: "Wet", mult: "x2" },
  { name: "Whalebound", mult: "x50" },
  { name: "Whimsical", mult: "x6" },
  { name: "Wildfast", mult: "x5" },
  { name: "Wilted", mult: "x10" },
  { name: "Wiltproof", mult: "x4" },
  { name: "Windstruck", mult: "x2" },
  { name: "Withered", mult: "x20" },
  { name: "Zombified", mult: "x1" }
];

const variants = [
  { name: "Normal", mult: "x1" },
  { name: "Silver", mult: "x5" },
  { name: "Gold", mult: "x20" },
  { name: "Rainbow", mult: "x50" },
  { name: "Diamond", mult: "x50" },
];


const getTraits = (name: string): string[] => {
  const n = name.toLowerCase();
  const traits: string[] = [];
  if (n.includes('apple')) traits.push('Apple');
  if (n.includes('berry')) traits.push('Berry');
  if (n.includes('candy') || n.includes('gummy') || n.includes('lollipop') || n.includes('chocolate') || n.includes('taffy') || n.includes('mint')) traits.push('Candy');
  if (n.includes('christmas') || n.includes('frost') || n.includes('snow') || n.includes('holly') || n.includes('tinsel')) traits.push('Christmas');
  if (n.includes('fall') || n.includes('autumn') || n.includes('maple') || n.includes('acorn')) traits.push('Fall');
  if (n.includes('flower') || n.includes('rose') || n.includes('lily') || n.includes('daisy') || n.includes('bloom') || n.includes('blossom') || n.includes('tulip') || n.includes('orchid')) traits.push('Flower');
  if (n.includes('fruit') || n.includes('melon') || n.includes('banana') || n.includes('mango') || n.includes('peach') || n.includes('pear') || n.includes('plum') || n.includes('grape') || n.includes('kiwi')) traits.push('Fruit');
  if (n.includes('shroom') || n.includes('mushroom') || n.includes('fungus')) traits.push('Fungus');
  if (n.includes('leaf') || n.includes('fern') || n.includes('cabbage') || n.includes('lettuce')) traits.push('Leafy');
  if (n.includes('magic') || n.includes('fae') || n.includes('crystal') || n.includes('spirit') || n.includes('soul') || n.includes('wisp') || n.includes('gem')) traits.push('Magical');
  if (n.includes('night') || n.includes('moon') || n.includes('star') || n.includes('dusk') || n.includes('twilight')) traits.push('Night');
  if (n.includes('nut') || n.includes('acorn') || n.includes('pecan') || n.includes('peanut')) traits.push('Nutty');
  if (n.includes('dino') || n.includes('bone') || n.includes('fossil') || n.includes('prehistoric')) traits.push('Prehistoric');
  if (n.includes('cactus') || n.includes('thorn') || n.includes('prick') || n.includes('spine') || n.includes('stinger')) traits.push('Prickly');
  if (n.includes('root') || n.includes('carrot') || n.includes('potato') || n.includes('radish') || n.includes('turnip') || n.includes('onion')) traits.push('Root');
  if (n.includes('safari') || n.includes('zebra') || n.includes('elephant') || n.includes('tiger')) traits.push('Safari');
  if (n.includes('sour') || n.includes('lemon') || n.includes('lime')) traits.push('Sour');
  if (n.includes('pepper') || n.includes('spicy') || n.includes('fire') || n.includes('flame') || n.includes('magma') || n.includes('jalapeno')) traits.push('Spicy');
  if (n.includes('spooky') || n.includes('ghost') || n.includes('zombie') || n.includes('skull') || n.includes('bat') || n.includes('vamp') || n.includes('corpse') || n.includes('pumpkin') || n.includes('ghoul') || n.includes('mummy')) traits.push('Spooky');
  if (n.includes('stalk') || n.includes('bamboo') || n.includes('corn') || n.includes('cane') || n.includes('asparagus')) traits.push('Stalky');
  if (n.includes('summer') || n.includes('sun') || n.includes('beach') || n.includes('sand')) traits.push('Summer');
  if (n.includes('sweet') || n.includes('honey') || n.includes('sugar') || n.includes('nectar') || n.includes('syrup')) traits.push('Sweet');
  if (n.includes('toxic') || n.includes('poison') || n.includes('venom') || n.includes('acid') || n.includes('biohazard') || n.includes('sludge')) traits.push('Toxic');
  if (n.includes('tropical') || n.includes('coconut') || n.includes('pineapple') || n.includes('palm') || n.includes('mango') || n.includes('jungle')) traits.push('Tropical');
  if (n.includes('vegetable') || n.includes('tomato') || n.includes('broccoli') || n.includes('squash') || n.includes('celery')) traits.push('Vegetable');
  if (n.includes('wood') || n.includes('tree') || n.includes('branch') || n.includes('pine') || n.includes('willow') || n.includes('mahogany') || n.includes('oak')) traits.push('Woody');
  if (n.includes('zen') || n.includes('lotus') || n.includes('bamboo') || n.includes('peace') || n.includes('tranquil') || n.includes('serenity')) traits.push('Zen');
  return traits;
};

export default function CropValueCalculator() {
  const [selectedCrop, setSelectedCrop] = useState(crops[0]);
  const [search, setSearch] = useState("");
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [matchAny, setMatchAny] = useState(true);
  const [mutSearch, setMutSearch] = useState("");

  
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [inputMode, setInputMode] = useState<"weight" | "value">("weight");
  const [inputValue, setInputValue] = useState("0.275");
  
  const [selectedMutations, setSelectedMutations] = useState<string[]>([]);
  const [mutSortBy, setMutSortBy] = useState("A-Z");
  const [mutSortAsc, setMutSortAsc] = useState(true);
  const [mutLimitDisabled, setMutLimitDisabled] = useState(false);
  const [showMutations, setShowMutations] = useState(true);

  const toggleMutation = (mut: string) => {
    setSelectedMutations(prev => {
      if (prev.includes(mut)) return prev.filter(m => m !== mut);
      if (!mutLimitDisabled && prev.length >= 3) return prev;
      return [...prev, mut];
    });
  };

  const handleMax = () => {
    const sorted = [...mutations].sort((a, b) => parseFloat(b.mult.slice(1)) - parseFloat(a.mult.slice(1)));
    if (mutLimitDisabled) {
       setSelectedMutations(sorted.map(m => m.name));
    } else {
       setSelectedMutations(sorted.slice(0, 3).map(m => m.name));
    }
  };
  
  const sortedAndFilteredMutations = mutations
    .filter(m => m.name.toLowerCase().includes(mutSearch.toLowerCase()))
    .sort((a, b) => {
      let cmp = 0;
      if (mutSortBy === "A-Z") {
        cmp = a.name.localeCompare(b.name);
      } else {
        cmp = parseFloat(a.mult.slice(1)) - parseFloat(b.mult.slice(1));
      }
      return mutSortAsc ? cmp : -cmp;
    });

  const toggleTrait = (trait: string) => {
    setSelectedTraits(prev => prev.includes(trait) ? prev.filter(t => t !== trait) : [...prev, trait]);
  };

    const visibleCrops = crops.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
    if (selectedTraits.length === 0) return matchesSearch;
    const cTraits = getTraits(c.name);
    const matchesTraits = matchAny 
      ? selectedTraits.some(t => cTraits.includes(t))
      : selectedTraits.every(t => cTraits.includes(t));
    return matchesSearch && matchesTraits;
  });


  const result = React.useMemo(() => {
    let totalMult = parseFloat(selectedVariant.mult.slice(1));
    selectedMutations.forEach(mutName => {
      const mut = mutations.find(m => m.name === mutName);
      if (mut) totalMult *= parseFloat(mut.mult.slice(1));
    });

    const val = parseFloat(inputValue) || 0;

    if (inputMode === "weight") {
      const resultValue = Math.floor(selectedCrop.value * (val / 0.275) * totalMult);
      return {
        valueText: resultValue.toLocaleString(),
        valueAbbrev: resultValue > 1000000 ? (resultValue / 1000000).toFixed(2) + 'm' : resultValue > 1000 ? (resultValue / 1000).toFixed(2) + 'k' : resultValue.toString(),
        rawResult: resultValue.toString(),
        unit: "¢",
        subText: val.toString() + "kg",
        copyLabel: "Copy Sheckles"
      };
    } else {
      const resultWeight = (val / (selectedCrop.value * totalMult)) * 0.275;
      return {
        valueText: resultWeight.toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 3 }),
        valueAbbrev: resultWeight.toFixed(3) + "kg",
        rawResult: resultWeight.toFixed(3),
        unit: "kg",
        subText: val.toLocaleString() + "¢",
        copyLabel: "Copy Weight"
      };
    }
  }, [inputMode, inputValue, selectedCrop, selectedVariant, selectedMutations]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result.rawResult);
  };

  return (
    <div className="w-full max-w-6xl mx-auto text-white animate-fade-in pb-20 pt-8 px-4 font-sans">
      
      {/* Header Description */}
      <h1 className="text-3xl font-bold mb-3 mt-4 text-white">Crop Value Calculator</h1>
      <p className="text-gray-400 text-sm max-w-2xl leading-relaxed mb-10">
        Calculate Grow a Garden crop values with every mutation included. 100% accurate sheckle value results.
      </p>

      {/* Crops Section */}
      <div className="mb-10 max-w-4xl">
        <label className="text-sm text-gray-400 block mb-3">Crops</label>
        
        <div className="flex gap-2 mb-4">
          <div className="relative w-[240px]">
            <input 
              type="text" 
              placeholder="Search crops..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-3 pr-4 py-2.5 bg-[#151c18] border border-[#2a362e] rounded-sm outline-none focus:border-green-500 transition-colors text-sm text-white placeholder:text-gray-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#151c18] border border-[#2a362e] text-gray-300 text-sm rounded-sm hover:bg-[#2a362e] transition-colors">
            Sort: A-Z
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-[#151c18] border border-[#2a362e] text-gray-300 rounded-sm hover:bg-[#2a362e] transition-colors">
            ↑
          </button>
          <button 
            onClick={() => setMatchAny(!matchAny)}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#151c18] border border-[#2a362e] text-gray-300 text-sm rounded-sm hover:bg-[#2a362e] transition-colors"
          >
            Match: {matchAny ? 'Any trait' : 'All traits'}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {cropTraits.map(trait => {
            const isSelected = selectedTraits.includes(trait.name);
            return (
              <button
                key={trait.name}
                onClick={() => toggleTrait(trait.name)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm border transition-all text-xs ${
                  isSelected 
                    ? "bg-[#14452a] border-green-600 text-white" 
                    : "bg-[#151c18] border-[#2a362e] hover:bg-[#1a231d] text-gray-300"
                }`}
              >
                <span>{trait.icon}</span>
                <span>{trait.name}</span>
              </button>
            )
          })}
        </div>

        <div className="max-h-[460px] overflow-y-auto custom-scrollbar border border-[#2a362e] rounded-sm">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-0">
            {visibleCrops.map((crop) => {
              const isSelected = selectedCrop.name === crop.name;
              return (
                <button
                  key={crop.name}
                  onClick={() => setSelectedCrop(crop)}
                  className={`flex flex-col items-center justify-center p-3 transition-all h-[130px] border-b border-r border-[#2a362e] ${
                    isSelected 
                      ? "bg-[#b058ff] border-[#b058ff] shadow-lg z-10 scale-[1.02]" 
                      : "bg-[#151c18] hover:bg-[#1a231d]"
                  }`}
                >
                  <img src={crop.icon} alt={crop.name} className="w-14 h-14 object-contain mb-2 drop-shadow-md" />
                  <span className={`text-xs font-medium text-center leading-tight mb-1 truncate w-full ${isSelected ? "text-black font-bold" : "text-gray-200"}`}>
                    {crop.name}
                  </span>
                  <span className={`text-[10px] ${isSelected ? "text-black font-medium" : "text-gray-400"}`}>
                    {crop.value}¢
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-10 max-w-4xl">
        
        {/* Mutations Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm text-gray-400">Mutations</label>
            <button 
              onClick={() => setShowMutations(!showMutations)}
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              {showMutations ? "Hide" : "Show"}
            </button>
          </div>
          {showMutations && (
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex flex-wrap sm:flex-nowrap gap-2">
                <div className="relative flex-1 min-w-[200px]">
                  <input 
                    type="text" 
                    placeholder="Search mutations..." 
                    value={mutSearch}
                    onChange={(e) => setMutSearch(e.target.value)}
                    className="w-full pl-3 pr-4 py-2 bg-[#151c18] border border-[#2a362e] rounded-sm outline-none focus:border-green-500 transition-colors text-sm text-white placeholder:text-gray-500"
                  />
                </div>
                <button 
                  onClick={() => setMutSortBy(prev => prev === "A-Z" ? "Value" : "A-Z")}
                  className="flex items-center gap-2 px-4 py-2 bg-[#151c18] border border-[#2a362e] text-gray-300 text-sm rounded-sm hover:bg-[#2a362e] transition-colors w-[110px] justify-center"
                >
                  Sort: {mutSortBy}
                </button>
                <button 
                  onClick={() => setMutSortAsc(prev => !prev)}
                  className="flex items-center justify-center w-10 h-10 bg-[#151c18] border border-[#2a362e] text-gray-300 rounded-sm hover:bg-[#2a362e] transition-colors"
                >
                  {mutSortAsc ? '↑' : '↓'}
                </button>
                <div className="flex gap-2 ml-auto">
                  <button 
                    onClick={() => setMutLimitDisabled(!mutLimitDisabled)}
                    className={`px-4 py-2 border text-sm rounded-sm transition-colors ${mutLimitDisabled ? 'bg-[#14452a] border-green-600 text-white' : 'bg-[#151c18] border-[#2a362e] text-gray-300 hover:bg-[#2a362e]'}`}
                  >
                    Disable Limit
                  </button>
                  <button 
                    onClick={handleMax}
                    className="px-4 py-2 bg-[#151c18] border border-[#2a362e] text-gray-300 text-sm rounded-sm hover:bg-[#2a362e] transition-colors"
                  >
                    Max
                  </button>
                  <button 
                    onClick={() => setSelectedMutations([])}
                    className="px-4 py-2 bg-[#8c181f] border border-[#a31e22] text-white text-sm rounded-sm hover:bg-[#a31e22] transition-colors font-medium"
                  >
                    Clear ({selectedMutations.length})
                  </button>
                </div>
              </div>

              <div className="max-h-[470px] overflow-y-auto custom-scrollbar pr-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
                  {sortedAndFilteredMutations.map((mut) => {
                    const isSelected = selectedMutations.includes(mut.name);
                    return (
                      <button
                        key={mut.name}
                        onClick={() => toggleMutation(mut.name)}
                        className={`flex flex-col items-center justify-center p-3 rounded-sm border transition-all h-[70px] ${
                          isSelected 
                            ? "bg-[#14452a] border-green-600 text-white" 
                            : "bg-[#151c18] border-[#2a362e] hover:border-[#3a4a3e] text-gray-300"
                        }`}
                      >
                        <span className={`text-[11px] text-center leading-tight truncate w-full ${isSelected ? 'text-white' : 'text-gray-300'}`}>{mut.name}</span>
                        <span className={`text-[10px] mt-1 ${isSelected ? 'text-green-300' : 'text-gray-400'}`}>{mut.mult}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Variants */}
        <div>
          <label className="text-sm text-gray-400 block mb-3">Variants</label>
          <div className="flex flex-wrap gap-2">
            {variants.map((v) => {
              const isSelected = selectedVariant.name === v.name;
              return (
                <button
                  key={v.name}
                  onClick={() => setSelectedVariant(v)}
                  className={`flex flex-col items-center justify-center px-4 py-2 rounded-sm border transition-all w-24 ${
                    isSelected 
                      ? "bg-gray-400 border-gray-400 text-black shadow-sm" 
                      : "bg-[#151c18] border-[#2a362e] text-gray-300 hover:border-[#3a4a3e]"
                  }`}
                >
                  <span className={`text-sm font-medium ${isSelected ? 'text-black' : 'text-gray-200'}`}>{v.name}</span>
                  <span className={`text-[11px] ${isSelected ? 'text-gray-800' : 'text-gray-400'}`}>{v.mult}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Input Section */}
        <div>
          <label className="text-sm text-gray-400 block mb-3">
            {inputMode === "weight" ? "Weight" : "Value"}
          </label>
          <div className="flex gap-2 items-center">
            <div className="relative w-64">
              <input 
                type="number" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full bg-[#0a0f0c] border border-[#1a231d] rounded-sm pl-4 pr-12 py-2.5 outline-none focus:border-green-800 transition-colors text-sm text-white"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                {inputMode === "weight" ? "kg" : "¢"}
              </span>
            </div>
            <button 
              onClick={() => {
                setInputMode(inputMode === "weight" ? "value" : "weight");
                setInputValue(inputMode === "weight" ? selectedCrop.value.toString() : "0.275");
              }}
              className="bg-[#151c18] border border-[#2a362e] px-4 py-2.5 text-sm hover:bg-[#2a362e] transition-colors rounded-sm text-gray-300 w-[140px]"
            >
              Switch to {inputMode === "weight" ? "Value" : "Weight"}
            </button>
          </div>
        </div>

        {/* Result Box */}
        <div className="mt-6 bg-[#09351c] border border-[#0d421d] rounded-sm p-8 text-center flex flex-col relative overflow-hidden">
          <button 
            onClick={copyToClipboard}
            className="absolute top-4 right-4 bg-[#151c18]/50 border border-[#2a362e] px-3 py-1.5 text-xs hover:bg-[#2a362e] transition-colors rounded-sm text-gray-300 shadow-sm"
          >
            {result.copyLabel}
          </button>
          
          <div className="text-xs text-white mb-6">Result</div>
          
          <div className="flex flex-row gap-6 mb-4 mt-2">
            <div className="w-20 h-20 bg-[#151c18] border border-[#2a362e] rounded-sm flex items-center justify-center p-2 shrink-0 shadow-inner">
              <img src={selectedCrop.icon} alt={selectedCrop.name} className="w-full h-full object-contain filter drop-shadow-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <div className={`text-base font-medium mb-1 ${(selectedCrop as any).rarityColor || 'text-white'}`}>
                {selectedCrop.name}
              </div>
              <div className="text-sm font-bold text-gray-300">
                Base Value: <span className="text-white">{selectedCrop.value}¢</span>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-gray-200 mb-4">
            {result.subText}
          </div>
          
          <div className="text-5xl font-bold text-white mb-2 tracking-tight">
            {result.valueText}<span className="text-[32px] align-baseline">{result.unit}</span>
          </div>
          
          <div className="text-xs text-gray-300 mb-8 font-medium">
            {result.valueAbbrev}{result.unit === "¢" ? "¢" : ""}
          </div>
          
          <div className="flex justify-center">
            <button className="border border-[#14452a] hover:bg-[#14452a]/50 bg-[#0b2818] text-green-400 rounded-full px-5 py-2 text-xs inline-flex items-center gap-2 transition-colors">
              <span className="text-red-500 text-base">🍓</span> 
              www.growagardencalculator.ca 
              <Copy className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
