export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx739b3a6adfb6ebe2",
    // 公众号appSecret
    appSecret: "389c1dcddc1202fe6de627bf6016d85d",
    // 模板消息id
    templateId: "OH082W5ALKzfKxLQ9AaoCr_6-VE65jRKx1gTKrhtCSk",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "o0txX6y3ROAuvpXGqztjLH_0qrZg"]
    user: ["o0txX64-BjXf-fVIXzL1Iz1I94rw", "o0txX6y3ROAuvpXGqztjLH_0qrZg"],
     
    // 信息配置
    // 所在省份
    province: "河北",
    // 所在城市
    city: "石家庄",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "宝子", "year": "1998", "date": "06-28", "type": 'r'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2021-11-04",
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
