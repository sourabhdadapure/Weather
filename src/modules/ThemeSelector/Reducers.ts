import Types from './Types'

export type colors = "red" | "blue" |"green"

class ThemeSelectorModel {
    loading: boolean = false ;
    selectedTheme :colors="red";
    error: Object ={}
}

export default function(state=ThemeSelectorModel, action:any){
    switch (action.type) {
        case Types.THEME_SELECTION_START:{
            return {
                ...state,
                loading: true
            }
        }
        case Types.THEME_SELECTION_SUCCESS:{
            return{
                ...state,
                loading:false,
                selectedTheme: action.payload
            }
        }
    }

}