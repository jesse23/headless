import { registerCommandViewModel } from "@headless/components";
import { getCommandViewModelFromServer } from "../../mockDeclServer/mockCmdStoreService";

export const getRemoteCommandViewModel = async id => {
    const commandViewModel = await getCommandViewModelFromServer(id);
    registerCommandViewModel(commandViewModel);
    // return something to trigger the update for now
    return Object.keys(commandViewModel.commands).length;
}