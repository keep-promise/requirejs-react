define(['react'], (React) => {
  console.log('a模块加载react', React);
  return (props) => {
    console.log('a模块props', props);
    return <div>hello</div>
  }
});
