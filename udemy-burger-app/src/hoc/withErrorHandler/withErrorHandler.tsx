import * as React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary'
import {AxiosInstance} from "axios";

interface ErrorHandlerState {
    error: { message: string | null };
}

// TODO any für WrappedComponent und props ist nicht ideal
const withErrorHandler = (WrappedComponent: any, axios: AxiosInstance) => {
    return class extends React.Component<{}, ErrorHandlerState> {

        state = {
            error: {message: null}
        };
        reqInterceptor: number | undefined;
        resInterceptor: number | undefined;


        componentWillMount(): void {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: {message: null}});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmount(): void {
            if (this.reqInterceptor !== undefined) {
                axios.interceptors.request.eject(this.reqInterceptor);
            }
            if (this.resInterceptor !== undefined) {
                axios.interceptors.response.eject(this.resInterceptor);
            }
        }

        errorConfirmedHandler = () => {
            this.setState({error: {message: null}})
        }

        render() {
            return <Aux>
                <Modal show={this.state.error.message !== null} modalClosed={this.errorConfirmedHandler}>
                    {this.state.error.message}
                </Modal>
                <WrappedComponent {...this.props}/>
            </Aux>
        };
    }
}

export default withErrorHandler;