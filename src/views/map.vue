<template>
  <div id="container"></div>
</template>

<script>
import aJpg from '@/assets/a.jpg'
import bJpg from '@/assets/b.jpg'
window._AMapSecurityConfig = {
  securityJsCode: 'b6ccc0fa9e8c442c4c59e7f2780c31d5',
}
export default {
  mounted() {
    this.initMap()
  },
  data() {
    return {
      map: '',
      pathSimplifierIns: '',
      infoWindow: '',
      path1: [
        [120.229906, 30.209333],
        [120.229496, 30.209589],
        [120.228807, 30.210028],
        [120.228094, 30.210326],
        [120.227651, 30.210737],
        [120.227176, 30.21136],
        [120.226323, 30.211941],
        [120.225929, 30.212664],
        [120.225651, 30.213458],
        [120.225585, 30.214322],
        [120.225683, 30.215031],
        [120.226028, 30.215754],
        [120.226454, 30.216023],
        [120.226995, 30.216122],
        [120.227569, 30.216179],
        [120.228045, 30.215924],
        [120.228635, 30.215626],
        [120.228947, 30.215314],
        [120.22939, 30.214932],
        [120.229734, 30.214733],
        [120.230127, 30.214379],
        [120.230308, 30.214181],
        [120.230488, 30.214138],
      ],
      path2: [
        [120.229923, 30.209341],
        [120.230327, 30.209647],
        [120.230694, 30.210017],
        [120.231347, 30.210441],
        [120.231755, 30.210758],
        [120.232347, 30.211181],
        [120.232877, 30.211692],
        [120.233408, 30.212221],
        [120.233795, 30.21312],
        [120.234244, 30.21379],
        [120.23455, 30.214742],
        [120.234428, 30.2155],
        [120.234162, 30.215941],
        [120.233612, 30.21647],
        [120.233102, 30.216558],
        [120.232347, 30.216487],
        [120.231796, 30.21617],
        [120.23147, 30.215959],
        [120.231184, 30.2155],
        [120.231062, 30.215183],
        [120.230939, 30.214866],
        [120.230939, 30.214478],
        [120.23056, 30.214174],
      ],
    }
  },
  methods: {
    initMap() {
      this.map = new AMap.Map('container',)
      this.infoWindow = new AMap.InfoWindow({
        offset: new AMap.Pixel(0, 0),
      })
      this.initPath()
      // this.bind()
    },
    initPath() {
      AMapUI.load(['ui/misc/PathSimplifier'], (PathSimplifier) => {
        if (!PathSimplifier.supportCanvas) {
          alert('当前环境不支持 Canvas！')
          return
        }
        //启动页面
        this.pathSimplifierIns = new PathSimplifier({
          zIndex: 100,
          map: this.map, //所属的地图实例
          getPath: function (pathData, pathIndex) {
            //返回轨迹数据中的节点坐标信息，[AMap.LngLat, AMap.LngLat...] 或者 [[lng|number,lat|number],...]
            return pathData.path
          },
        })
        this.pathSimplifierIns.setData([
          {
            name: '轨迹1',
            path: this.path1,
          },
          {
            name: '轨迹2',
            path: this.path2,
          },
        ])
        var navg0 = this.pathSimplifierIns.createPathNavigator(
          0, //关联第1条轨迹
          {
            loop: false, //循环播放
            speed: 800,
            pathNavigatorStyle: {
              width: 40,
              height: 40,
              autoRotate: false, // 禁止调整方向
              // 经过路径的样式
              pathLinePassedStyle: {
                lineWidth: 6,
                strokeStyle: 'black',
                dirArrowStyle: {
                  stepSpace: 15,
                  strokeStyle: 'red',
                },
              },
              content: PathSimplifier.Render.Canvas.getImageContent(
                aJpg,
                onload,
                onerror,
              ),
            },
          },
        )
        var navg1 = this.pathSimplifierIns.createPathNavigator(
          1, //关联第1条轨迹
          {
            loop: false, //循环播放
            speed: 800,
            pathNavigatorStyle: {
              width: 40,
              height: 40,
              autoRotate: false, // 禁止调整方向
              // 经过路径的样式
              pathLinePassedStyle: {
                lineWidth: 6,
                strokeStyle: 'blue',
                dirArrowStyle: {
                  stepSpace: 15,
                  strokeStyle: 'red',
                },
              },
              content: PathSimplifier.Render.Canvas.getImageContent(
                bJpg,
                onload,
                onerror,
              ),
            },
          },
        )
        setTimeout(() => {
          navg0.start()
          navg1.start()

          navg1.on('move', (e) => {
            const idx = navg1.getCursor().idx // 走到了第几个点
            const list = [
              '不开门一直敲',
              '是一种打扰',
              '不回复本身',
              '就是一种回复',
              '双向奔赴才有意义',
            ]
            let text = ''
            if(idx < 3) {
              text = list[0]
            } else if(idx < 8) {
              text = list[1]
            } else if(idx < 13) {
              text = list[2]
            } else if(idx < 17) {
              text = list[3]
            } else {
              text = list[4]
            }
            const cont = `<div class="toptit">
              <p>${text}</p>
            </div>`

            // 设置气泡
            this.infoWindow.setContent(cont)
            this.infoWindow.open(this.map, e.target.getPosition())
          })
        }, 3000)
        this.pathSimplifierIns.renderLater()
      })
    },
    loadPlugin() {
      AMap.plugin(['AMap.ToolBar', 'AMap.MouseTool'], () => {
        // 异步加载插件
        const toolbar = new AMap.ToolBar() // 缩放工具条实例化
        this.map.addControl(toolbar)
      })
    },
    bind() {
      this.map.on('click', (e) => {
        const position = [+e.lnglat.getLng(), +e.lnglat.getLat()]
        const marker = new AMap.Marker({
          position: [+e.lnglat.getLng(), +e.lnglat.getLat()],
        })
        if (!window.list) {
          window.list = [position]
        } else {
          window.list.push(position)
        }
        marker.setMap(this.map)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#container {
  width: 1500px;
  height: 800px;
}
</style>
