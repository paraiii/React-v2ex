import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RightSideNodeLine } from "./RightSideNodeLine";
import {Node} from '../../Types/common';
import { NodeData } from "../../Api/NodeData";

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
        }, [id]);
        
    return (
        <RightSideNodeLine nodes={nodesData}/>
    )

};