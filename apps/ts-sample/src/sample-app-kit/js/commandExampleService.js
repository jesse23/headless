import { registerCommandViewModel } from "@headless/components";
import { getCommandViewModel } from "../../mockDeclServer/mockCmdStoreService";

export const getRemoteCommandViewModel = async id => {
    const commandViewModel = await getCommandViewModel(id);
    registerCommandViewModel(commandViewModel);
    // return something to trigger the update for now
    return Object.keys(commandViewModel.commands).length;
}