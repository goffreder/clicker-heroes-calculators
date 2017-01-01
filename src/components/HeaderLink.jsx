const HeaderLink = ({ active, href, label, onClick }) => {
    return (
        <li className={active ? 'active' : null}>
            <a
                href={href}
                data-toggle="collapse"
                data-target="#navbar.in"
                onClick={onClick}
            >
                {label}
            </a>
        </li>
    );
};

const { bool, string, func } = React.PropTypes;

HeaderLink.propTypes = {
    active: bool,
    href: string,
    label: string,
    onClick: func,
};

export default HeaderLink;
