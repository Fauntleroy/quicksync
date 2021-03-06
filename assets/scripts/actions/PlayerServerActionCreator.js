import TandemDispatcher from '../dispatcher/TandemDispatcher.js';
import { ActionTypes } from '../constants/TandemConstants.js';

var PlayerServerActionCreator = {
	receiveState: function( state ){
		TandemDispatcher.handleServerAction({
			type: ActionTypes.PLAYER_RECEIVE_STATE,
			state: state
		});
	},
	receiveItem: function( item ){
		TandemDispatcher.handleServerAction({
			type: ActionTypes.PLAYER_RECEIVE_ITEM,
			item: item
		});
	},
	receiveElapsedTime: function( elapsed_time ){
		TandemDispatcher.handleServerAction({
			type: ActionTypes.PLAYER_RECEIVE_ELAPSED_TIME,
			elapsed_time: elapsed_time
		});
	},
	receiveSkipItem: function( item, user ){
		TandemDispatcher.handleServerAction({
			type: ActionTypes.PLAYER_RECEIVE_SKIP_ITEM,
			item: item,
			user: user
		});
	},
	receiveLikeItem: function( likers, user, like_message ){
		TandemDispatcher.handleServerAction({
			type: ActionTypes.PLAYER_RECEIVE_LIKE_ITEM,
			likers: likers,
			user: user,
			like_message: like_message
		});
	},
	receiveSetOrder: function( order ){
		TandemDispatcher.handleServerAction({
			type: ActionTypes.PLAYER_RECEIVE_ORDER,
			order: order
		});
	}
};

export default PlayerServerActionCreator;
