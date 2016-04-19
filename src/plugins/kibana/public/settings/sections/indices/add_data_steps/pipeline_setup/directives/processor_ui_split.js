import uiModules from 'ui/modules';
import _ from 'lodash';
import keysDeep from '../lib/keys_deep';
import template from '../views/processor_ui_split.html';

const app = uiModules.get('kibana');

//scope.processor, scope.pipeline are attached by the process_container.
app.directive('processorUiSplit', function () {
  return {
    restrict: 'E',
    template: template,
    controller : function ($scope) {
      const processor = $scope.processor;
      const pipeline = $scope.pipeline;

      function consumeNewInputObject() {
        const allKeys = keysDeep(processor.inputObject);
        $scope.fields = _.filter(allKeys, (key) => { return _.isString(_.get(processor.inputObject, key)); });
        refreshFieldData();
      }

      function refreshFieldData() {
        $scope.fieldData = _.get(processor.inputObject, processor.sourceField);
      }

      function processorUiChanged() {
        pipeline.setDirty();
      }

      $scope.$watch('processor.inputObject', consumeNewInputObject);

      $scope.$watch('processor.sourceField', () => {
        refreshFieldData();
        processorUiChanged();
      });

      $scope.$watch('processor.separator', processorUiChanged);
    }
  };
});
