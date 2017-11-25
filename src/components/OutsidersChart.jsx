import { PieChart, Pie } from 'recharts';
import RenderActiveShape from './utils/RenderActiveShape';
import { arrayOf, shape, number, string, object, func } from 'prop-types';

export default class OutsidersChart extends React.Component {
    static propTypes = {
        outsiders: arrayOf(
            shape({
                id: number.isRequired,
                label: string.isRequired,
                level: number.isRequired,
            }),
        ).isRequired,
        outsiderCallbacks: object.isRequired,
        unspentSouls: number.isRequired,
        highlightedOutsider: number.isRequired,
        highlightOutsider: func.isRequired,
    };

    onPieEnter = data => {
        this.props.highlightOutsider(data.id);
    };

    render() {
        const data = [
            ...this.props.outsiders.map(o => {
                return {
                    id: o.id,
                    name: o.label,
                    value: this.props.outsiderCallbacks[o.id].costForLevel(
                        o.level,
                    ),
                };
            }),
            { id: 0, name: 'Unspent', value: this.props.unspentSouls },
        ];

        const activeIndex = data.findIndex(
            o => o.id === this.props.highlightedOutsider,
        );

        return (
            <PieChart width={800} height={400}>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={RenderActiveShape}
                    data={data}
                    dataKey="value"
                    cx={200}
                    cy={150}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    onMouseEnter={this.onPieEnter}
                />
            </PieChart>
        );
    }
}
