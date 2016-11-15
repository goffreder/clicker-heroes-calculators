import images from '../css/images';

export default function AncientsTableRow(props)  {
    const imgStyle = {
        width: 50,
        marginRight: 5,
    };

    const tdStyle = { verticalAlign: 'middle' };

    return (
        <tr>
            <td className="text-left">
                <img
                    src={images.ancients[props.name.toLowerCase()]}
                    style={imgStyle}
                />
                {props.name}
            </td>
            <td style={tdStyle}>{props.multiplier}</td>
        </tr>
    );
}
