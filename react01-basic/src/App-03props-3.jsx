function MyComponent({p1, p2, p3, p4}){
  return (<>
    <h2>props 구조분해할당</h2>
    <p>
      {p1}, {p2}, {p3}, {p4}
    </p>
  </>)
}
function App(){
  return(<>
    <MyComponent p1={'HTML5'} p2={'CSS3'} p3={'Javascript'} p4={'jQuery'}></MyComponent>
  </>)
}
export default App