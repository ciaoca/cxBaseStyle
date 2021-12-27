/**
 * 插件默认配置
 *
 * FastClick
 * cxDialog
 * Notyf
 * cxValidation
 * cxSelect
 * cxCalendar
 * --------------------
 */


// FastClick Only iOS
// 在 Android 低端机下，效果不理想，不使用
if ('addEventListener' in document && GLOBAL.platform && GLOBAL.platform.system === 'ios') {
  document.addEventListener('DOMContentLoaded', function(){
    FastClick.attach(document.body);
  }, false);
};


// cxDialog 对话框
if ($.cxDialog) {
  $.cxDialog.defaults.baseClass = 'ios';
  $.cxDialog.defaults.title = '提示';
  $.cxDialog.defaults.ok = function(){};
};


// Notyf 通知提示
if (typeof Notyf === 'function') {
  var notyf = new Notyf({
    ripple: false,
    position: {
      x: 'center',
      y: 'top',
    },
    types: [
      {
        type: 'success',
        className: 'notyf__cxm--success',
        background: 'rgba(140, 193, 82, 0.9)',
        icon: false
      },
      {
        type: 'info',
        className: 'notyf__cxm--info',
        background: 'rgba(51, 51, 51, 0.9)',
        icon: false
      },
      {
        type: 'warn',
        className: 'notyf__cxm--warn',
        background: 'rgba(254, 153, 57, 0.9)',
        icon: false
      },
      {
        type: 'error',
        className: 'notyf__cxm--error',
        background: 'rgba(218, 68, 83, 0.9)',
        icon: false
      }
    ]
  });

  // cxValidation 配置
  if (cxValidation) {
    cxValidation.setOptions({
      complete: function(result) {
        notyf.dismissAll();
      },
      error: function(result) {
        notyf.open({
          type: 'info',
          message: result.message
        });

        var nodeName = result.element.nodeName.toLowerCase();

        if (nodeName !== 'input' || ['radio','checkbox','color','range','file'].indexOf(result.element.type) === -1) {
          result.element.focus();
        };
      }
    });
  };
};


// cxSelect 配置
if ($.cxSelect) {
  $.cxSelect.defaults.url = GLOBAL.url.cityData;
};


// cxCalendar 日期选择器
if ($.cxCalendar) {
  if (GLOBAL.mediaMode === 'mobile') {
    $.cxCalendar.defaults.position = 'fixed';
    $.cxCalendar.defaults.baseClass = 'fixed';
  };
};
