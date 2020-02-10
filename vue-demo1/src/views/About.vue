<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button type="primary" @click="exportpdf">PDF</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <div id="table">
      <template v-for="(item, index) in rows">
        <div :key="item.choiceId">
          <h2>{{ index + 1 }}、{{ item.choiceTitle }}</h2>
          <h4>来源：{{ item.topicFrom }}</h4>
          <h4>难度：{{ item.degree }}</h4>
          <h4>
            方法：<span :key="method.id" v-for="method in item.methodList"
              >{{ method.name }}&nbsp;&nbsp;
            </span>
          </h4>
          <template v-for="file in item.choiceFileList">
            <img :src="file.path_" :key="file.id_" alt="" srcset="" />
          </template>
          <h3>选项</h3>
          <template v-for="opt in item.optionList">
            <h4 :key="opt.order">{{ opt.order }}、{{ opt.content }}</h4>
          </template>
          <p>{{ item.parsing }}</p>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { Button } from "view-design";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
export default {
  name: "",
  components: {
    Button
  },
  props: {},
  data() {
    return {
      rows: [
        {
          choiceTitle: "2017年A省邮电业务总量同比增速在以下哪个范围之内？",
          choiceFileList: [
            {
              id_: "6a91237a0a894280badd9a11276181e1",
              path_:
                "http://lixing-develop.oss-cn-hangzhou.aliyuncs.com/large_file/1559184279541.png"
            }
          ],
          degree: "3",
          topicFrom: "2019年国家公务员录用考试《行测》真题（副省级）",
          parsing: "",
          underlineTextList: [],
          parsingFile:
            "http://lixing-develop.oss-cn-hangzhou.aliyuncs.com/large_file/1559626137700.png",
          optionList: [
            {
              content: "低于25%",
              answer: "0",
              fileId: "",
              order: 1,
              path: ""
            },
            {
              content: "25%-50%之间",
              answer: "0",
              fileId: "",
              order: 2,
              path: ""
            },
            {
              content: "50%-75%之间",
              answer: "1",
              fileId: "",
              order: 3,
              path: ""
            },
            {
              content: "超过75%",
              answer: "0",
              fileId: "",
              order: 4,
              path: ""
            }
          ],
          noteName: "一错再错",
          choiceId: "f2cf6268ed6245e181ca44d87bc9231f",
          createTime: 1568280947490,
          methodList: [
            {
              id: 120,
              name: "估算法"
            },
            {
              id: 269,
              name: "偏向法"
            },
            {
              id: 270,
              name: "直接计算法"
            }
          ]
        },
        {
          choiceTitle: "下列与扶贫有关的说法正确的是：",
          choiceFileList: [],
          degree: "1",
          topicFrom: "2019年国家公务员录用考试《行测》真题（副省级）",
          parsing:
            "B项，题支中其实缺少了“扶智”，这里命题人就在提醒这个选项不能选；我们都知道“大水漫灌”其实是有点浪费水的，而“精准滴灌”是对水资源的重复利用，我国的扶贫工作已经从“大水漫灌”转为“精准滴灌”了，所以不能再继续说他们要结合，排除。\nC项，脱贫是一个循序渐进的过程，发展高新技术产业需要一定的经济和物质基础，因此将高新技术产业作为脱贫的一项重要举措是有问题的，排除。\nD项，2035年离现在还有10多年，按照中国现在的经济发展形势和在脱贫工作上的力度，不可能要那么久，排除。\nA选项，习大大首次提出精准扶贫的概念，符合常理认知，因此本题选择A项。",
          underlineTextList: ["正确"],
          parsingFile: "",
          optionList: [
            {
              content: "习近平总书记首次提出了“精准扶贫”的理念",
              answer: "1",
              fileId: "",
              order: 1,
              path: ""
            },
            {
              content:
                "扶贫工作坚持扶贫同扶志相结合，“大水漫灌”与“精准滴灌”相结合",
              answer: "0",
              fileId: "",
              order: 2,
              path: ""
            },
            {
              content:
                "全面发展高新技术产业是《“十三五”脱贫攻坚计划》提出的一项重要举措",
              answer: "0",
              fileId: "",
              order: 3,
              path: ""
            },
            {
              content:
                "脱贫目标是到2035年稳定实现现行标准下农村贫困人口“两不愁、三保障”",
              answer: "0",
              fileId: "",
              order: 4,
              path: ""
            }
          ],
          noteName: "一错再错",
          choiceId: "24fc7975c0ac44a6acb17957fbe4e6b2",
          createTime: 1568280944072,
          methodList: [
            {
              id: 34,
              name: "逻辑分析法"
            }
          ]
        },
        {
          choiceTitle: "2017年A省邮电业务总量同比增速在以下哪个范围之内？",
          choiceFileList: [
            {
              id_: "6a91237a0a894280badd9a11276181e1",
              path_:
                "http://lixing-develop.oss-cn-hangzhou.aliyuncs.com/large_file/1559184279541.png"
            }
          ],
          degree: "3",
          topicFrom: "2019年国家公务员录用考试《行测》真题（副省级）",
          parsing: "",
          underlineTextList: [],
          parsingFile:
            "http://lixing-develop.oss-cn-hangzhou.aliyuncs.com/large_file/1559626137700.png",
          optionList: [
            {
              content: "低于25%",
              answer: "0",
              fileId: "",
              order: 1,
              path: ""
            },
            {
              content: "25%-50%之间",
              answer: "0",
              fileId: "",
              order: 2,
              path: ""
            },
            {
              content: "50%-75%之间",
              answer: "1",
              fileId: "",
              order: 3,
              path: ""
            },
            {
              content: "超过75%",
              answer: "0",
              fileId: "",
              order: 4,
              path: ""
            }
          ],
          noteName: "一错再错",
          choiceId: "f2cf6268ed6245e181ca44d87bc9231f",
          createTime: 1568280947490,
          methodList: [
            {
              id: 120,
              name: "估算法"
            },
            {
              id: 269,
              name: "偏向法"
            },
            {
              id: 270,
              name: "直接计算法"
            }
          ]
        },
        {
          choiceTitle: "下列与扶贫有关的说法正确的是：",
          choiceFileList: [],
          degree: "1",
          topicFrom: "2019年国家公务员录用考试《行测》真题（副省级）",
          parsing:
            "B项，题支中其实缺少了“扶智”，这里命题人就在提醒这个选项不能选；我们都知道“大水漫灌”其实是有点浪费水的，而“精准滴灌”是对水资源的重复利用，我国的扶贫工作已经从“大水漫灌”转为“精准滴灌”了，所以不能再继续说他们要结合，排除。\nC项，脱贫是一个循序渐进的过程，发展高新技术产业需要一定的经济和物质基础，因此将高新技术产业作为脱贫的一项重要举措是有问题的，排除。\nD项，2035年离现在还有10多年，按照中国现在的经济发展形势和在脱贫工作上的力度，不可能要那么久，排除。\nA选项，习大大首次提出精准扶贫的概念，符合常理认知，因此本题选择A项。",
          underlineTextList: ["正确"],
          parsingFile: "",
          optionList: [
            {
              content: "习近平总书记首次提出了“精准扶贫”的理念",
              answer: "1",
              fileId: "",
              order: 1,
              path: ""
            },
            {
              content:
                "扶贫工作坚持扶贫同扶志相结合，“大水漫灌”与“精准滴灌”相结合",
              answer: "0",
              fileId: "",
              order: 2,
              path: ""
            },
            {
              content:
                "全面发展高新技术产业是《“十三五”脱贫攻坚计划》提出的一项重要举措",
              answer: "0",
              fileId: "",
              order: 3,
              path: ""
            },
            {
              content:
                "脱贫目标是到2035年稳定实现现行标准下农村贫困人口“两不愁、三保障”",
              answer: "0",
              fileId: "",
              order: 4,
              path: ""
            }
          ],
          noteName: "一错再错",
          choiceId: "24fc7975c0ac44a6acb17957fbe4e6b2",
          createTime: 1568280944072,
          methodList: [
            {
              id: 34,
              name: "逻辑分析法"
            }
          ]
        },
        {
          choiceTitle: "2017年A省邮电业务总量同比增速在以下哪个范围之内？",
          choiceFileList: [
            {
              id_: "6a91237a0a894280badd9a11276181e1",
              path_:
                "http://lixing-develop.oss-cn-hangzhou.aliyuncs.com/large_file/1559184279541.png"
            }
          ],
          degree: "3",
          topicFrom: "2019年国家公务员录用考试《行测》真题（副省级）",
          parsing: "",
          underlineTextList: [],
          parsingFile:
            "http://lixing-develop.oss-cn-hangzhou.aliyuncs.com/large_file/1559626137700.png",
          optionList: [
            {
              content: "低于25%",
              answer: "0",
              fileId: "",
              order: 1,
              path: ""
            },
            {
              content: "25%-50%之间",
              answer: "0",
              fileId: "",
              order: 2,
              path: ""
            },
            {
              content: "50%-75%之间",
              answer: "1",
              fileId: "",
              order: 3,
              path: ""
            },
            {
              content: "超过75%",
              answer: "0",
              fileId: "",
              order: 4,
              path: ""
            }
          ],
          noteName: "一错再错",
          choiceId: "f2cf6268ed6245e181ca44d87bc9231f",
          createTime: 1568280947490,
          methodList: [
            {
              id: 120,
              name: "估算法"
            },
            {
              id: 269,
              name: "偏向法"
            },
            {
              id: 270,
              name: "直接计算法"
            }
          ]
        },
        {
          choiceTitle: "下列与扶贫有关的说法正确的是：",
          choiceFileList: [],
          degree: "1",
          topicFrom: "2019年国家公务员录用考试《行测》真题（副省级）",
          parsing:
            "B项，题支中其实缺少了“扶智”，这里命题人就在提醒这个选项不能选；我们都知道“大水漫灌”其实是有点浪费水的，而“精准滴灌”是对水资源的重复利用，我国的扶贫工作已经从“大水漫灌”转为“精准滴灌”了，所以不能再继续说他们要结合，排除。\nC项，脱贫是一个循序渐进的过程，发展高新技术产业需要一定的经济和物质基础，因此将高新技术产业作为脱贫的一项重要举措是有问题的，排除。\nD项，2035年离现在还有10多年，按照中国现在的经济发展形势和在脱贫工作上的力度，不可能要那么久，排除。\nA选项，习大大首次提出精准扶贫的概念，符合常理认知，因此本题选择A项。",
          underlineTextList: ["正确"],
          parsingFile: "",
          optionList: [
            {
              content: "习近平总书记首次提出了“精准扶贫”的理念",
              answer: "1",
              fileId: "",
              order: 1,
              path: ""
            },
            {
              content:
                "扶贫工作坚持扶贫同扶志相结合，“大水漫灌”与“精准滴灌”相结合",
              answer: "0",
              fileId: "",
              order: 2,
              path: ""
            },
            {
              content:
                "全面发展高新技术产业是《“十三五”脱贫攻坚计划》提出的一项重要举措",
              answer: "0",
              fileId: "",
              order: 3,
              path: ""
            },
            {
              content:
                "脱贫目标是到2035年稳定实现现行标准下农村贫困人口“两不愁、三保障”",
              answer: "0",
              fileId: "",
              order: 4,
              path: ""
            }
          ],
          noteName: "一错再错",
          choiceId: "24fc7975c0ac44a6acb17957fbe4e6b2",
          createTime: 1568280944072,
          methodList: [
            {
              id: 34,
              name: "逻辑分析法"
            }
          ]
        },
        {
          choiceTitle: "2017年A省邮电业务总量同比增速在以下哪个范围之内？",
          choiceFileList: [
            {
              id_: "6a91237a0a894280badd9a11276181e1",
              path_:
                "http://lixing-develop.oss-cn-hangzhou.aliyuncs.com/large_file/1559184279541.png"
            }
          ],
          degree: "3",
          topicFrom: "2019年国家公务员录用考试《行测》真题（副省级）",
          parsing: "",
          underlineTextList: [],
          parsingFile:
            "http://lixing-develop.oss-cn-hangzhou.aliyuncs.com/large_file/1559626137700.png",
          optionList: [
            {
              content: "低于25%",
              answer: "0",
              fileId: "",
              order: 1,
              path: ""
            },
            {
              content: "25%-50%之间",
              answer: "0",
              fileId: "",
              order: 2,
              path: ""
            },
            {
              content: "50%-75%之间",
              answer: "1",
              fileId: "",
              order: 3,
              path: ""
            },
            {
              content: "超过75%",
              answer: "0",
              fileId: "",
              order: 4,
              path: ""
            }
          ],
          noteName: "一错再错",
          choiceId: "f2cf6268ed6245e181ca44d87bc9231f",
          createTime: 1568280947490,
          methodList: [
            {
              id: 120,
              name: "估算法"
            },
            {
              id: 269,
              name: "偏向法"
            },
            {
              id: 270,
              name: "直接计算法"
            }
          ]
        },
        {
          choiceTitle: "下列与扶贫有关的说法正确的是：",
          choiceFileList: [],
          degree: "1",
          topicFrom: "2019年国家公务员录用考试《行测》真题（副省级）",
          parsing:
            "B项，题支中其实缺少了“扶智”，这里命题人就在提醒这个选项不能选；我们都知道“大水漫灌”其实是有点浪费水的，而“精准滴灌”是对水资源的重复利用，我国的扶贫工作已经从“大水漫灌”转为“精准滴灌”了，所以不能再继续说他们要结合，排除。\nC项，脱贫是一个循序渐进的过程，发展高新技术产业需要一定的经济和物质基础，因此将高新技术产业作为脱贫的一项重要举措是有问题的，排除。\nD项，2035年离现在还有10多年，按照中国现在的经济发展形势和在脱贫工作上的力度，不可能要那么久，排除。\nA选项，习大大首次提出精准扶贫的概念，符合常理认知，因此本题选择A项。",
          underlineTextList: ["正确"],
          parsingFile: "",
          optionList: [
            {
              content: "习近平总书记首次提出了“精准扶贫”的理念",
              answer: "1",
              fileId: "",
              order: 1,
              path: ""
            },
            {
              content:
                "扶贫工作坚持扶贫同扶志相结合，“大水漫灌”与“精准滴灌”相结合",
              answer: "0",
              fileId: "",
              order: 2,
              path: ""
            },
            {
              content:
                "全面发展高新技术产业是《“十三五”脱贫攻坚计划》提出的一项重要举措",
              answer: "0",
              fileId: "",
              order: 3,
              path: ""
            },
            {
              content:
                "脱贫目标是到2035年稳定实现现行标准下农村贫困人口“两不愁、三保障”",
              answer: "0",
              fileId: "",
              order: 4,
              path: ""
            }
          ],
          noteName: "一错再错",
          choiceId: "24fc7975c0ac44a6acb17957fbe4e6b2",
          createTime: 1568280944072,
          methodList: [
            {
              id: 34,
              name: "逻辑分析法"
            }
          ]
        },
        {
          choiceTitle: "2017年A省邮电业务总量同比增速在以下哪个范围之内？",
          choiceFileList: [
            {
              id_: "6a91237a0a894280badd9a11276181e1",
              path_:
                "http://lixing-develop.oss-cn-hangzhou.aliyuncs.com/large_file/1559184279541.png"
            }
          ],
          degree: "3",
          topicFrom: "2019年国家公务员录用考试《行测》真题（副省级）",
          parsing: "",
          underlineTextList: [],
          parsingFile:
            "http://lixing-develop.oss-cn-hangzhou.aliyuncs.com/large_file/1559626137700.png",
          optionList: [
            {
              content: "低于25%",
              answer: "0",
              fileId: "",
              order: 1,
              path: ""
            },
            {
              content: "25%-50%之间",
              answer: "0",
              fileId: "",
              order: 2,
              path: ""
            },
            {
              content: "50%-75%之间",
              answer: "1",
              fileId: "",
              order: 3,
              path: ""
            },
            {
              content: "超过75%",
              answer: "0",
              fileId: "",
              order: 4,
              path: ""
            }
          ],
          noteName: "一错再错",
          choiceId: "f2cf6268ed6245e181ca44d87bc9231f",
          createTime: 1568280947490,
          methodList: [
            {
              id: 120,
              name: "估算法"
            },
            {
              id: 269,
              name: "偏向法"
            },
            {
              id: 270,
              name: "直接计算法"
            }
          ]
        },
        {
          choiceTitle: "下列与扶贫有关的说法正确的是：",
          choiceFileList: [],
          degree: "1",
          topicFrom: "2019年国家公务员录用考试《行测》真题（副省级）",
          parsing:
            "B项，题支中其实缺少了“扶智”，这里命题人就在提醒这个选项不能选；我们都知道“大水漫灌”其实是有点浪费水的，而“精准滴灌”是对水资源的重复利用，我国的扶贫工作已经从“大水漫灌”转为“精准滴灌”了，所以不能再继续说他们要结合，排除。\nC项，脱贫是一个循序渐进的过程，发展高新技术产业需要一定的经济和物质基础，因此将高新技术产业作为脱贫的一项重要举措是有问题的，排除。\nD项，2035年离现在还有10多年，按照中国现在的经济发展形势和在脱贫工作上的力度，不可能要那么久，排除。\nA选项，习大大首次提出精准扶贫的概念，符合常理认知，因此本题选择A项。",
          underlineTextList: ["正确"],
          parsingFile: "",
          optionList: [
            {
              content: "习近平总书记首次提出了“精准扶贫”的理念",
              answer: "1",
              fileId: "",
              order: 1,
              path: ""
            },
            {
              content:
                "扶贫工作坚持扶贫同扶志相结合，“大水漫灌”与“精准滴灌”相结合",
              answer: "0",
              fileId: "",
              order: 2,
              path: ""
            },
            {
              content:
                "全面发展高新技术产业是《“十三五”脱贫攻坚计划》提出的一项重要举措",
              answer: "0",
              fileId: "",
              order: 3,
              path: ""
            },
            {
              content:
                "脱贫目标是到2035年稳定实现现行标准下农村贫困人口“两不愁、三保障”",
              answer: "0",
              fileId: "",
              order: 4,
              path: ""
            }
          ],
          noteName: "一错再错",
          choiceId: "24fc7975c0ac44a6acb17957fbe4e6b2",
          createTime: 1568280944072,
          methodList: [
            {
              id: 34,
              name: "逻辑分析法"
            }
          ]
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    exportpdf() {
      //将整个页面转成canvas
      // html2canvas(document.body).then(canvas => {
      html2canvas(document.getElementById("table"), {
        allowTaint: true,
        logging: false,
        // proxy: "http://lixing-develop.oss-cn-hangzhou.aliyuncs.com/",
        // foreignObjectRendering: true,
        useCORS: true,
        scale: 1
      }).then(canvas => {
        //返回图片dataURL，参数：图片格式和清晰度(0-1)
        var pageData = canvas.toDataURL("image/jpeg", 1.0);
        // console.log(pageData);

        //方向默认竖直，尺寸ponits，格式a4[595.28,841.89]
        var doc = new jsPDF("", "pt", "a4");
        //addImage后两个参数控制添加图片的尺寸，此处将页面高度按照a4纸宽高比列进行压缩
        doc.addImage(
          pageData,
          "JPEG",
          0,
          0,
          595.28,
          (592.28 / canvas.width) * canvas.height
        );
        doc.save("错题本.pdf");
      });
      //初始化
      // const doc = new jsPDF();
      // //设置字体
      // // doc.setFont("msyh");
      // // //设置内容
      // // doc.autoTable({ html: "#table" });
      // // //导出
      // // doc.save("table.pdf");
      // // var doc = new jsPDF();

      // // doc.html("#table", {
      // doc.html(document.body, {
      //   callback: function(doc) {
      //     doc.save();
      //   }
      // });
    }
  },
  created() {},
  activated() {},
  mounted() {}
};
</script>
<style lang="less" scoped></style>
