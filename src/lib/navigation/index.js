import _ from 'lodash';

const _checkRouteRescurcive = (state, result) => {
    if( _.isArray( state.routes ) ) {
        state.routes.map((route, i)=>{
            if( state.index === i ){
                if(route.routes) {
                    _checkRouteRescurcive(route, result);
                } else {
                    result.routeName = route.routeName;
                }
            }
        })
    }
};

export const getCurrentRoute = (state) => {
    let result = { routeName: '' };
    
    _checkRouteRescurcive(state, result);

    return result;
}