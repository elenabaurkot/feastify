import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner'; 
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';
import './profiles.css';

const Profiles = ({ getProfiles, profile: {profiles, loading}}) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);
    return <Fragment>
        { loading ? 
        <Spinner /> 
            : 
        <Fragment>
            <h1 className='large text-dark center mt-5'>Feastify Users</h1>
            <p className='lead center'>
            <i class="fas fa-glass-cheers"></i>
                Connect With Other Feastify Users!
            </p>
            <div>
                { profiles.length > 0 ? (
                    profiles.map(profile => (
                        <ProfileItem key={profile._id} profile={profile} />
                    ))
                ) : <h4>No profiles found</h4>}
            </div>
        </Fragment>}
    </Fragment>
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
