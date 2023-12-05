import { render, h } from 'vue';
const button = {
  name: 'btn-component',
  render() {
    return h(
      'button',
      {
        id: 'btn-primary',
      },
      'hone按钮',
    );
  },
};
export default button;
