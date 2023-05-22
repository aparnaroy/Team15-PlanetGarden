import CedarTree from "./cedar-tree.png";
import Chrysanthemum from "./Chrysanthemum.png";
import Iris from "./iris.png";
import LarchTree from "./larch-tree.png";
import Oaktree from "./oaktree.png";
import SequoiaTree from "./Sequoia.png";
import SpruceTree from "./spruce-tree.png";
import Sunflower from "./Sunflower.png";
import Tulip from "./Tulip.png";
import Lily from "./Lily.png";
import BlueHydrangea from "./Blue-Hydrangea.png";
import CherryBlossom from "./Cherry-Blossom.png";

describe("Item presence tests", () => {
    test("should have cedarTree item", () => {
        expect(CedarTree).toBeDefined();
    });

    test("should have larchTree item", () => {
        expect(LarchTree).toBeDefined();
    });

    test("should have oakTree item", () => {
        expect(Oaktree).toBeDefined();
    });

    test("should have sequoiaTree item", () => {
        expect(SequoiaTree).toBeDefined();
    });

    test("should have spruceTree item", () => {
        expect(SpruceTree).toBeDefined();
    });

    test("should have cherryBlossomTree item", () => {
        expect(CherryBlossom).toBeDefined();
    });

    test("should have chrysanthemumFlower item", () => {
        expect(Chrysanthemum).toBeDefined();
    });

    test("should have irisFlower item", () => {
        expect(Iris).toBeDefined();
    });

    test("should have sunflowerFlower item", () => {
        expect(Sunflower).toBeDefined();
    });

    test("should have tulipFlower item", () => {
        expect(Tulip).toBeDefined();
    });

    test("should have blueHydrangeaFlower item", () => {
        expect(BlueHydrangea).toBeDefined();
    });

    test("should have lilyFlower item", () => {
        expect(Lily).toBeDefined();
    });
});
