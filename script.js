// kiểm tra tính năng
if (window.navigator.userAgentData) {
  // sử dụng navigator.userAgentData
  const browserName = window.navigator.userAgentData.brands[0].brand;
  console.log(`Trình duyệt của bạn là: ${browserName}`);
} else {
  // sử dụng feature detection
  if (window.chrome) {
    // thực hiện tác vụ trên Chrome
    console.log('Bạn đang sử dụng Chrome');
  } else if (window.safari) {
    // thực hiện tác vụ trên Safari
    console.log('Bạn đang sử dụng Safari');
  } else {
    // thực hiện tác vụ trên các trình duyệt khác
    console.log('Bạn đang sử dụng một trình duyệt khác');
  }
}
