import { FaPencil } from 'react-icons/fa6';

export function Entry() {
  return (
    <li data-entry-id="1">
      <div className="row">
        <div className="column-half">
          <div className="list-image-wrapper">
            <img src="https://i3.wp.com/wallpapers.com/images/hd/fun-pictures-cwlrd7f7clrq8ebd.jpg?ssl=1" />
          </div>
        </div>
        <div className="column-half">
          <h2>
            The Little Dude
            <FaPencil className="edit" />
          </h2>
          <p>This is The Little Dude surfing. Not many major waves today.</p>
        </div>
      </div>
    </li>
  );
}
