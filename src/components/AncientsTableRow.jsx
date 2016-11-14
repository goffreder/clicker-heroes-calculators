import images from '../css/images';

export default function AncientsTableRow(props)  {
    return (
        <tr>
            <td className="text-right">
                <img src={images.ancients[props.name.toLowerCase()]} />
                {props.name}
            </td>
            <td className="text-left">{props.multiplier}</td>
        </tr>
    );
}
