import axios from "axios";
import actions from './actions';
import {message} from "antd";
import axiosClient from 'helpers/axiosClient';

export const GetUsers = () => {
    return dispatch => {
        axiosClient.get('/users')
            .then(res => {
                dispatch({
                    type: actions.GET_USER_SUCCESS,
                });
            })
            .catch(function (error) {
                // handle error
                message.error('Something went wrong');
                dispatch({
                    type: actions.GET_USER_FAILURE,
                });
            })
    };
};
