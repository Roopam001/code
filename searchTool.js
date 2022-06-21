import { LightningElement } from 'lwc';
import cdRecord from '@salesforce/apex/CdRecords.cdRecord';
	
import { NavigationMixin } from 'lightning/navigation';

export default class SearchTool extends NavigationMixin(LightningElement) {
    Value;
    cdList;
     columns = [
        { label: 'Name', type:'text',fieldName: 'Name' },
        { label: 'Value', type:'text',fieldName: 'Value__c'}
    ];
    ValueHandler(event)
    {
        this.Value=event.target.value;
    }
    searchhandler()
    {
        cdRecord({Value:this.Value})
        .then(result=>{

                this.cdList=result;
                

        }).catch(error=>{

        });
    }
    searchhandler2()
    {
        
    }
    recordPage(event)
    {
        let rowId = event.target.dataset.recordId;
        

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: rowId,
                objectApiName: 'Account',
                actionName: 'view'
            }
        });
    }
}