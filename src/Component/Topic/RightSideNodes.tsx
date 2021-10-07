import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NodeData } from "../../Api/NodeData";
import { RightSideNodeLine } from "./RightSideNodeLine";
import {Node} from '../../Types/common';

export interface nodeParams {
    id: string,
}

export const RightSideNodes = () => {
    const { id } = useParams<nodeParams>();
    const [nodesData, setNodeData] = useState<Node[]>([]);

    useEffect(
        function() {
            NodeData(id).then(res => {
                setNodeData(res.data);
            });
        }, []);
        
    return (
        <RightSideNodeLine nodes={nodesData}/>
    )

};