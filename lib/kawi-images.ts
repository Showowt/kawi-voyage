const WIX = 'https://static.wixstatic.com/media'

export function wixOriginal(id: string): string {
  return `${WIX}/${id}`
}

// === HERO / GLOBAL ===
export const HERO_IMAGES = {
  main: '9cc74a_d9b625d9ae314534a7876c46acf5d3e4~mv2_d_6262_3844_s_4_2.jpg',
  cayo: '9cc74a_b7b684aa7ddf4411814ab31d41d54144~mv2.jpg',
  background: '9cc74a_d33b802a70d141968fbe9d9eb0e1b316~mv2_d_4032_3024_s_4_2.jpg',
  section: '9cc74a_c3608170091949b187252523524665f2~mv2.jpg',
  banner: '9cc74a_e1e6fb429e4a420e9294c527725ae021~mv2.jpg',
}

// === ABOUT / TEAM ===
export const TEAM_IMAGES = {
  sophie: '9cc74a_75cd3cfc849c4a0eb44453d321492a03~mv2.jpeg',
  team_coconut: '9cc74a_6ac0fd26b6a64b3cb40ce9fe2c668ea9~mv2.jpeg',
  team_group: '9cc74a_18f712a9eaae42529c62a1d8ac2ae844~mv2.jpeg',
}

// === TOUR IMAGES (verified from scraper) ===
export const TOUR_IMAGES: Record<string, { primary: string; secondary?: string; tertiary?: string }> = {
  zapatilla: {
    primary: '9cc74a_779fcafbcd9a4c44878c691bc988dddb~mv2_d_1600_1200_s_2.jpg',
    secondary: '9cc74a_20cb1ffe0b7643f1bf448b0d99c59d97~mv2.jpeg',
    tertiary: '9cc74a_24f0e6f7b0894a5db6258a05a70c1e23~mv2.jpg',
  },
  bioluminescence: {
    primary: '9cc74a_142c19494bfe4a2f9ab821a5a5143ed0~mv2.jpg',
    secondary: '9cc74a_04cc805c9d01440c957ed9b6e06edd81~mv2.jpg',
  },
  bahia_honda: {
    primary: '9cc74a_5718d0d530a449a98dc57471265fefef~mv2.jpg',
    secondary: '9cc74a_d7e5bcc910cc4e76846af646cf48aca5~mv2.jpg',
    tertiary: '9cc74a_2ba45d5cb1f64e7aa1c7c60aa33bb3d4~mv2_d_4032_3024_s_4_2.jpg',
  },
  salt_creek: {
    primary: '9cc74a_1223ebcc3c45452e8bff54e846c04bfd~mv2.jpg',
    secondary: '9cc74a_0e13ae4a108a454dae399df5d5939714~mv2_d_4000_3000_s_4_2.jpg',
  },
  chocolate: {
    primary: '9cc74a_673b3811097940b9a18f9fe15aa9bbcc~mv2.jpeg',
    secondary: '9cc74a_a1684dfbbca1435a8ae40a3dac7ebb17~mv2.jpeg',
    tertiary: '9cc74a_28524155506843b796423fcfc3051a6c~mv2.jpeg',
  },
  monkey_island: {
    primary: '9cc74a_c27e9348a21c4ff5be1525092a5ef9c8~mv2.jpeg',
    secondary: '9cc74a_f9193673eb514203a1e9d93686ca9662~mv2.jpg',
    tertiary: '9cc74a_c34c4555492a43efaec768a63af9bda7~mv2_d_1400_1400_s_2.jpeg',
  },
  piying_creek: {
    primary: '9cc74a_7152d484cab4433f9abb41c2eb52d7ec~mv2.jpeg',
    secondary: '9cc74a_4c6372a59a36480d9e4a23698aafd62d~mv2.jpeg',
    tertiary: '9cc74a_73b45d53cc7d4552a4ad709e30ddad62~mv2.jpeg',
  },
  manatees: {
    primary: '9cc74a_baaacbf03dd64f2986a127986c183129~mv2.jpg',
    secondary: '9cc74a_1f092c24c4fd4f808494d849c544705b~mv2.jpeg',
    tertiary: '9cc74a_facc974636d44165a4ec84ad67891d95~mv2.jpeg',
  },
  coral: {
    primary: '9cc74a_79ed43e601434692a15dfd51bf07df50~mv2.jpg',
    secondary: '9cc74a_8fb13ecc4258476cad25f6dd34ee7205~mv2.jpg',
    tertiary: '9cc74a_9e6980964fc94918b29b7746daea7a7f~mv2.jpg',
  },
  escudo: {
    primary: '9cc74a_511bae0b712e4b72be2635f276d97c44~mv2.jpg',
    secondary: '9cc74a_70b0475b11894329a4f48873b12b1619~mv2.jpg',
    tertiary: '9cc74a_81983721c0c245518ad05273e1f8b3f6~mv2.jpg',
  },
  starfish: {
    primary: '9cc74a_65f49f3030494a878650bdc454997bec~mv2.jpg',
    secondary: '9cc74a_ceab9014a7794144823922fbf52aad52~mv2_d_4032_3024_s_4_2.jpg',
    tertiary: '9cc74a_d1d4038011994a5190552b877edcd960~mv2.jpg',
  },
  fishing: {
    primary: '9cc74a_ac4bd99683ed423598f2a6e7666607b9~mv2.jpg',
    secondary: '9cc74a_a45d94554ed74b6fa3294d4e668e9094~mv2.jpeg',
    tertiary: '9cc74a_dd3f38c1df1b4562ad99e91c3e22efc8~mv2.jpeg',
  },
  surf: {
    primary: '9cc74a_18f9999e69a3480cb4eb52b4b6b483ff~mv2.jpg',
    secondary: '9cc74a_780fd20207014f318852980ac5f08822~mv2.jpg',
    tertiary: '9cc74a_897ececb53764531822ea91d89c6ea57~mv2.jpg',
  },
  horse: {
    primary: '9cc74a_e491a5aedc8544eba12e1c64cf0167fd~mv2.jpg',
    secondary: '9cc74a_ddfbe7c16e4d45bb920b48cf73936228~mv2.jpg',
    tertiary: '9cc74a_408be2773ce240c1aceb3322b5404336~mv2.jpg',
  },
  ebike: {
    primary: '9cc74a_7031ee36695045f0b621fc376e74bf38~mv2_d_1881_1254_s_2.jpg',
    secondary: '9cc74a_eb59774485d2461d857a66686816ef62~mv2_d_1328_1328_s_2.jpg',
    tertiary: '9cc74a_09da903fbf5047e193879962d4cffe07~mv2_d_2360_1328_s_2.jpg',
  },
  scuba: {
    primary: '9cc74a_af655c674fd04270aec4a0bd2f55cda9~mv2.jpeg',
    secondary: '9cc74a_41e713c96cc0485fa1e4b35ffd65da30~mv2.jpg',
  },
}

// === HOTEL IMAGES (verified, 3 per hotel) ===
export const HOTEL_IMAGES: Record<string, string> = {
  'Eclypse de Mar Acqua Lodge': '9cc74a_06c80ab89a1e48aa92b35fb53180e35b~mv2.jpg',
  'Finca Vela Lodge': '9cc74a_555a5e8495914fe087cd87a4c8772323~mv2.jpg',
  'Divers Paradise': '9cc74a_09f74a53ec9748519784b059103aba91~mv2.jpg',
  'Riva B&B': '9cc74a_3092e92850644023941e70935c32b13d~mv2.jpeg',
  'Villa F&B Solarte': '9cc74a_ac772452622148a6b1e883b011b235dd~mv2.jpg',
  'Bah\u00EDa Para\u00EDso': '9cc74a_ab8b14a710154b30be3b37ed48a6de4c~mv2.jpg',
}

// === WILDLIFE / NATURE ===
export const NATURE_IMAGES = {
  red_frog: '9cc74a_f5685164703d4d8c8b5e36f6a4b0e324~mv2.jpg',
  starfish: '9cc74a_3861228cd58f4f65bf9e90f5d91946d6~mv2.jpg',
  dolphins: '9cc74a_951ad0669ce2472788f9d6078f35c262~mv2.jpg',
  diving: '9cc74a_4dde3f7ee4f34e4387c183aeceb7265c~mv2.png',
  coral: '9cc74a_7136f4ae61a54d28978348e87baee7c1~mv2.jpeg',
  sloth: '9cc74a_2ee4e57729524514b95d001eee277261~mv2.jpg',
  monkey: '9cc74a_c79321b698a24508aac6e8ae39628338~mv2.jpg',
}

// === DESTINATION IMAGES ===
export const DESTINATION_IMAGES = {
  bocas_overview: '9cc74a_3271fbaf20984fd3af052870c7673d4c~mv2.jpeg',
  why_panama_banner: '9cc74a_843e4fc3c96b498d988e7e1885b58a94~mv2.jpg',
  why_panama_frog: '9cc74a_3232133e83f945869cabb70361ae6483~mv2.jpg',
  beach: '9cc74a_c7160729611b41c097ca11cae4c06034~mv2.jpeg',
  eco_bottle1: '9cc74a_1440895674fb44078a74a6613f629716~mv2_d_1200_1600_s_2.jpg',
  eco_bottle2: '9cc74a_f5ff0a6d1fee44578fb696dbd065c439~mv2_d_1200_1600_s_2.jpg',
  panama_map: '9cc74a_dbeb66a9bff747b9a472a4914e7cd239~mv2.png',
}

// === BOCAS GALLERY (9 scenic images) ===
export const BOCAS_GALLERY = [
  '9cc74a_9f64998cbd0d4a638aefdd04049c572f~mv2.jpg',
  '9cc74a_76854a5d805d4ec7a943d1bf02750b93~mv2.jpg',
  '9cc74a_ef064d66632b449e8c0b4991ed6e877e~mv2.jpg',
  '9cc74a_712398606859468aa1d408acd95c553d~mv2_d_3226_3226_s_4_2.jpg',
  '9cc74a_7ec148cb0464489c9aad2c0027c132e7~mv2.jpg',
  '9cc74a_ad6ef10e8e4545dab07b25cc6ddeba16~mv2.jpg',
  '9cc74a_7a5eeef1fc4c463caf384e00b38a1dde~mv2.jpg',
  '9cc74a_24f0e6f7b0894a5db6258a05a70c1e23~mv2.jpg',
  '9cc74a_27e8327e6e1e401fb24b6f3388f45f46~mv2.jpg',
]
