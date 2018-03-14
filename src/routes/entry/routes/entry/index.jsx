import { connect } from 'react-redux';
import Entry from '../../components/Entry';

const mapStateToProps = (state, ownProps) => {
	return {
		...ownProps
	};
};

const EntryComponent = connect(mapStateToProps)(Entry);

export default () => <EntryComponent />;
