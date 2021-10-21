function getElementPos (el) {
  let _x = 0, _y = 0;
  do {
    _x += el.offsetLeft;
    _y += el.offsetTop;
  } while (el = el.offsetParent)
  return { x: _x, y: _y }
}

var ToolTip = function () {
  var obj = {};
  obj.tip = null;
  obj.showTip = function (el, html) {
    if (obj.tip) {
      return;
    }
    // 获取目标元素位置
    var elPos = getElementPos(el)

    // 获取tip弹出位置
    var posi = el.getAttribute('posi') ? el.getAttribute('posi') : "top"

    // 创建tip元素
    var tip = document.createElement("div");
    tip.className = 'tooltip'

    // 创建内容元素
    var content = document.createElement("div");
    content.className = 'tip-content ' + posi;

    tip.appendChild(content)
    content.innerHTML = html

    document.body.appendChild(tip)

    // 根据不同位置确定tip坐标
    switch (posi) {
      case "top": {
        tip.style.top = (elPos.y - content.offsetHeight - 7) + 'px';
        tip.style.left = (elPos.x + el.offsetWidth / 2 - content.offsetWidth / 2) + 'px';
      }
        break;
      case "bottom": {
        tip.style.top = (elPos.y + el.offsetHeight) + 'px';
        tip.style.left = (elPos.x + el.offsetWidth / 2 - content.offsetWidth / 2) + 'px';
      }
        break;
      case "left": {
        tip.style.top = (elPos.y + el.offsetHeight / 2 - content.offsetHeight / 2) + 'px';
        tip.style.left = (elPos.x - content.offsetWidth - 7) + 'px';
      }
        break;
      case "right": {
        tip.style.top = (elPos.y + el.offsetHeight / 2 - content.offsetHeight / 2) + 'px';
        tip.style.left = (elPos.x + el.offsetWidth) + 'px';
      }
        break;
    }

    // 鼠标进入tip, 将属性in设置为true
    tip.addEventListener("mouseenter", function () {
      tip.setAttribute('in', true)
    })
    //当鼠标离开tip区域，将属性in设置为false，同时隐藏tip
    tip.addEventListener("mouseleave", function () {
      tip.setAttribute("in", false);
      obj.hideTip();
    });

    obj.tip = tip;

  };
  obj.hideTip = function () {
    if (this.tip && this.tip.getAttribute("in") != "true") {
      document.body.removeChild(this.tip)
      obj.tip = null
    }
  }
  // 给目标元素动态添加enter和leave事件
  obj.init = function (el) {
    // console.log(111);
    el.onmouseenter = function () {

      obj.showTip(this, this.getAttribute('tipContent'));
    };
    el.onmouseleave = function () {
      // 将这段代码放到后面执行
      setTimeout(function () {
        obj.hideTip()
      }, 0)
    };
  }
  return obj;
}