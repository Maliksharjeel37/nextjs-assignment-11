export default function greaterthenButton(props) {
  return (
    <div>
          <button className=" bg-blue-800 w-10 h-10 text-white rounded-3xl hover:bg-orange-500 hover:text-black" style={props.style} >{">"}</button>
    </div>
  );
}
