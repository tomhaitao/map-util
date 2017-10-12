import { connect } from 'react-redux';
import Map from '../../components/Map';

const mapStateToProps = (state, ownProps) => {
	return {
		...ownProps
	};
};

const MapComponent = connect(mapStateToProps)(Map);

export default () => <MapComponent />;
